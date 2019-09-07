const CMRK =
  'https://api.cinemark.com.py/api/vista/data/billboard?cinema_id=2900';

export function getMovies() {
  return fetch(CMRK).then(resp => resp.json());
}
