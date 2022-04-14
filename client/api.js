import request from 'superagent'

const serverUrl = 'http://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api'

const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min)
}

export function getSuperhero() {
  return request
    .get(serverUrl + '/id/' + randomNumber(1, 731) + '.json')
    .then((resp) => {
      return resp.body
    })
    .catch((err) => {
      if (err.response.statusCode === 404) {
        return getSuperhero()
      }
    })
}
