import http from './http'
import {Utils} from "../utils/utils";

export default {

  async createUser(user) {
    let ret = await http.post('/user', {email: user.email, password: user.password});
    return ret.data;
  },

  async logout(id) {
    let ret = await http.get(`/user/logout/${id}`);
    return ret.data;
  },

  async updateUser(id, update) {
    let ret = await http.put(`user/${id}`, update);
    return ret.data;
  },

  async createProduct(id, body) {
    let ret = await http.post(`/product/${id}`, body);
    return ret.data;
  },

  async readAllProducts() {
    let ret = await http.get('/product');
    return ret.data;
  },

  async updateProduct(id, update) {
    let ret = await http.put(`/product/${id}`, update);
    return ret.data;
  },

  async buyItem(id, itemId) {
    let ret = await http.post(`/product/buy/${id}`, {itemId});
    return ret.data;
  },

  async deleteItem(id) {
    let ret = await http.delete(`/product/${id}`);
    return ret.data;
  }
}