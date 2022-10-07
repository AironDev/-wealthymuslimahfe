import request from '../axios.js'
import config from '~/config'

export default {

  async fetchUsers () {
    return await request().get(`${config.baseUrl}/admin/users`)
  },

  async deleteUser (id) {
    return await request().delete(`${config.baseUrl}/admin/users/${id}`)
  },


  async updateUser (user) {
    return await request().patch(`${config.baseUrl}/admin/users/${user.id}`, user)
  },
  async createUser (data) {
    return await request().post(`${config.baseUrl}/admin/users`, data)
  },
}