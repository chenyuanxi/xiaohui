import api from '../api/index'

export default {
  // 保存用户信息
  async getUserInfo ({ commit }) {
    const result = await api.getUserInfo()
    commit('receiveUserInfo', result)
  },
  // 保存商品信息
  async getGoods ({ commit }) {
    const result = await api.getGoods()
    commit('receiveGoods', result)
  },
  // 保存某个商品详细信息
  setGoodsDetails ({ commit }, goodsDetails) {
    commit('receiveGoodsDetails', goodsDetails)
  },
  // 根据id获取某个商品详细信息
  async getGoodsDetails ({ commit }, data) {
    const goodsDetails = await api.getGoodsDetails(data)
    commit('receiveGoodsDetails', goodsDetails)
  },
  // 获取公共信息
  async getPublicInfo ({ commit }) {
    const publicInfo = await api.getPublicInfo()
    commit('receivePublicInfo', publicInfo)
  },
  // 模糊查询商品
  async findGoods ({ commit }, data) {
    const findGoods = await api.findGoods(data)
    commit('receiveFindGoods', findGoods)
  }
}
