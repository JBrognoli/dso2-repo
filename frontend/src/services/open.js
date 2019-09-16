import http from './http'
import {Utils} from "../utils/utils";

export default {

  async createUser(user) {
    let ret = await http.post('/user', {email: user.email, password: user.password});
    return ret.data;
  },

  async readAllUsers() {
    let ret = await http.get('/user')
    return ret.data;
  },

  async logIn(user) {
    let ret = await http.post('/user/login', {email: user.email, password: user.password});
    return ret.data;
  },
}
