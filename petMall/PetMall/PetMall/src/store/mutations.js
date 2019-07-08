export default {
  receiveUserInfo (state, getUserInfo) {
    state.getUserInfo = getUserInfo
  },
  receiveGoods (state, getGoods) {
    state.goods = getGoods
  },
  receiveGoodsDetails (state, goodsDetails) {
    state.goodsDetails = goodsDetails
  },
  receivePublicInfo (state, publicInfo) {
    state.publicInfo = publicInfo
  },
  receiveFindGoods (state, findGoods) {
    state.findGoods = findGoods
  },
  receiveAddToCart (state, addToCart) {
    state.addToCart = addToCart
  },
  receiveGetShopCart (state, getShopCart) {
    state.getShopCart = getShopCart
  },
  receiveGetShopCartCount (state, shopCartCount) {
    state.shopCartCount = shopCartCount
  },
  receiveSetShopCartCount (state, shopCartCount) {
    state.shopCartCount += shopCartCount
  }
}
