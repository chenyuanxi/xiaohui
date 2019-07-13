var mongoose = require('../db/db.js')
var Schema = mongoose.Schema
var Promise = require('bluebird')

var child = new Schema({
  portrait: String,
  name: String,
  stars: Number,
	time: String,
	evaluate: String
})

var Schema = new Schema({
    goodsId: String,       //商品id
    evaluate: [child],       //评价列表
})

var shopEvaluate = mongoose.model('shopEvaluate', Schema, 'evaluate')
Promise.promisifyAll(shopEvaluate)
Promise.promisifyAll(shopEvaluate.prototype)

module.exports = shopEvaluate
