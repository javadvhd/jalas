// modules
import { create } from 'axios'
import config from '../../../backend/packages/servicesPort.json'

export const { get, post } = create({
  baseURL: `http://localhost:${config.apiGateway.port}`,
})

export const getRequest = ({ dest, action, payload }) =>
  get('/', {
    params: {
      dest,
      action,
      payload,
    },
  })

export const postRequest = ({ dest, action, payload }) =>
  post('/', {
    dest,
    action,
    payload,
  })
