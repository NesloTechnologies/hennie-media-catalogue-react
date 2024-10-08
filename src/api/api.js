import axios from 'axios'
import jwt from '../jwt/jwt';

const API_HOME = "http://localhost:8080/api/";

const headers = {Authorization: `Bearer ${jwt}`}

const httpPost = async (path, item) => {
  return await axios.post(`${API_HOME}${path}`, item, {headers})
}

const httpGet = async (path) => {
  return await axios.get(`${API_HOME}${path}`, {headers})
}

const httpPut = async (path, item) => {
  return await axios.put(`${API_HOME}${path}/${item.id}`, item, {headers})
}

const httpDelete = async (path) => {
  return await axios.delete(`${API_HOME}${path}`, {headers})
}

export {httpPost, httpGet, httpPut, httpDelete};