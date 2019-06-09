import api from '../api/index'

export default {
  // 保存用户信息
  async getUserInfo ({ commit }) {
    const result = await api.getUserInfo()
    commit('receiveUserInfo', result)
  }
}
