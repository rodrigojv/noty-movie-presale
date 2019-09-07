import fetch from 'node-fetch';
import addMinutes from 'date-fns/addMinutes';
require('dotenv').config();

const EMAIL_BASE_URL = 'https://api.buttondown.email/v1';
const { EMAIL_TOKEN } = process.env;
const subjectTemplate = movie => `Ya hay pre-estreno de ${movie}`;

const bodyTemplate = (
  movie,
  theater
) => `Como habías solicitado, amigo fan de DC. <br />
Te informamos que ya hay tickets para la película ${movie} en ${theater}.
˘Andá corriendo a reservar tu entrada! 🏃🏻‍♂️
`;

export async function subscribeIfNecessary(email) {
  const existingSubs = await getExistingSubscriber(email);
  if (!existingSubs.includes(email)) {
    console.log(`${email} is not in the mailing list. Will subscribe`);
    return subscribe(email);
  }
}

export async function sendEmail(email, movie, theater) {
  try {
    // TODO Invocar esto en el endpoint de subscribe
    await subscribeIfNecessary(email);
    return scheduleEmail(movie, theater);
  } catch (error) {
    console.error(error.toString());
    throw error;
  }
}

async function subscribe() {
  // TODO
}

async function getExistingSubscriber(email) {
  console.log('fetching subscribers', { email });
  const response = await fetch(`${EMAIL_BASE_URL}/subscribers?email=${email}`, {
    method: 'GET',
    headers: {
      Authorization: `Token ${EMAIL_TOKEN}`,
      'Content-Type': 'application/json',
    },
  });
  const { results } = await response.json();

  return results.map(subscriber => subscriber.email);
}

function scheduleEmail(movie, theater) {
  var body = {
    subject: subjectTemplate(movie),
    body: bodyTemplate(movie, theater),
    publish_date: addMinutes(new Date(), 1).toISOString(),
  };
  return fetch(`${EMAIL_BASE_URL}/scheduled-emails`, {
    method: 'POST',
    headers: {
      Authorization: `Token ${EMAIL_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })
    .then(response => response.json())
    .then(data => {
      console.log(`Submitted to Buttondown:`, { data });
    })
    .catch(error => ({ statusCode: 422, body: String(error) }));
}
