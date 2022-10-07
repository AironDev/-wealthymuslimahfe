import request from '../axios.js'
import config from '~/config'

export default {

  async register (data) {
    return await request().post(`${config.baseUrl}/users`, data)
  },

  async fetchUser (id) {
    return await request().get(`${config.baseUrl}/users/${id}`)
  },

  async createInvestment (data) {
    return await request().post(`${config.baseUrl}/investments`, data)
  }
}