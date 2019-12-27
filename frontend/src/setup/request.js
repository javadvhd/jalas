// modules
import { create } from 'axios'
import { saveAnalytics } from '../logic/analytics/analytics.request'

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
    saveAnalytics({ type: 'responseTime', action, duration: new Date() - time })
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
    saveAnalytics({ type: 'responseTime', action, duration: new Date() - time })
    return data
  })
}
