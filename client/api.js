import request from 'superagent'

const serverUrl = 'http://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api'

export function getSuperhero() {
    return request
    .get(serverUrl + '/id/1.json')
    .then((resp) => {
      console.log(resp.body)
    })
}
