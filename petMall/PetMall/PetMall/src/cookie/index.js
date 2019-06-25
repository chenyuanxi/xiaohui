export default {
  setCookie: function ({ name: value }, day) {
    let time = new Date()
    time.setTime(time.getTime() + (day * 24 * 60 * 60 * 1000))
    var expires = 'expires= ' + time.toGMTString()
    document.cookie = name + '=' + value + ';' + expires
  },
  getCookie: function (attribute) {
    let name = (attribute += '=')
    let cookie = document.cookie.split(';')
    for (let i = 0; i < cookie.length; i++) {
      let item = cookie[i].trim()
      if (item.indexOf(name) === 0) {
        return item.substring(name.length, item.length)
      }
    }
  }
}
