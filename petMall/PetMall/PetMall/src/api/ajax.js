import axios from 'axios'

export default function ajax (url, type, data, config) {
  return new Promise(function (resolve, reject) {
    let promise
    if (type === 'GET') {
      promise = axios.get(url, {
        params: config
      })
    } else {
      promise = axios.post(url, data)
    }
    promise.then(response => {
      resolve(response.data)
    })
      .catch(error => {
        reject(error)
      })
  })
}
