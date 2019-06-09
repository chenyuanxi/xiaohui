var axios = require('axios');

module.exports = function ajax (url, data, type, config) {
  return new Promise(function (resolve, reject) {
    let promise
    if (type === 'GET') {
      console.log(config)
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
