import { sendEmail } from './email';
import db from './db';
export function notifyIfNecessary() {
  const movieFilter = 'joker';
  const subs = db
    .get('subscriptions')
    .filter({ notified: false, movie: movieFilter })
    .value();
  subs.forEach(sub => {
    sendEmail(sub.email, sub.movie, sub.theater);
  });
}
