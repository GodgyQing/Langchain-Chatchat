import qs from 'qs'
import { api } from './api'

export const chat = (params: any) => {
  return api({
    url: '/chat',
    method: 'post',
    data: JSON.stringify(params),
  })
}

export const chatfile = (params: any) => {
  return api({
    url: '/chatfile',
    method: 'post',
    data: qs.stringify(params),
  })
}

export const getfilelist = (knowledge_base_id: any) => {
  return api({
    url: '/local_doc_qa/list_files',
    method: 'get',
    params: { knowledge_base_id },

  })
}

export const deletefile = (params: any) => {
  return api({
    url: '/local_doc_qa/delete_file',
    method: 'post',
    data: JSON.stringify(params),
  })
}