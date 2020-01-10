// modules
import { create } from 'axios'

export const { get, post } = create({
  baseURL: `http://localhost:${8085}`,
})

export const getRequest = ({ dest, action, payload }) => {
  const time = new Date()
  return get('/', {
    params: {
      dest,
      action,
      payload,
    },
  }).then(data => {
    return data
  })
}

export const postRequest = ({ dest, action, payload }) => {
  const time = new Date()
  return post('/', {
    dest,
    action,
    payload,
  }).then(data => {
    return data
  })
}
