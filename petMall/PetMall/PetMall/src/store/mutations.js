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
  }
}
