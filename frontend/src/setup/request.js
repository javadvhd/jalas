// modules
import { create } from 'axios'

const server = 'http://localhost:4220'

export const { get, post } = create({
  baseURL: server,
})
