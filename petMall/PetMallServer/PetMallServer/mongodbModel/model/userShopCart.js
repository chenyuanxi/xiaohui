var mongoose = require('../db/db.js')
var Schema = mongoose.Schema
var Promise = require('bluebird')

var child = new Schema({
  goodsId: String,
  count: Number,
  price: Number,
  imgSrc: String,
	title: String,
	specs: String
})

var Schema = new Schema({
    phone: String,         //用户手机账号
    goodsItem: [child],       //商品列表
})

var UserShopCart = mongoose.model('UserShopCart', Schema, 'userShopCart')
Promise.promisifyAll(UserShopCart)
Promise.promisifyAll(UserShopCart.prototype)

module.exports = UserShopCart
