import { httpPost, httpGet, httpPut, httpDelete } from './api';

const CD_PATH = 'cds'

const postCD = async(cd) => {
  return await httpPost(CD_PATH, cd);
}

const readCD = async(id) => {
  const path = id ? `${CD_PATH}/id` : CD_PATH;
  return await httpGet(path)
}

const putCD = async(cd) => {
  return await httpPut(CD_PATH, cd)
}

const removeCD = async(id) => {
  return await httpDelete(`${CD_PATH}/${id}`)
}

export {postCD, readCD, putCD, removeCD}