// modules
import { create } from 'axios'

const server =
  process.env.NODE_ENV === 'production'
    ? 'https://wapp.weblite.me/issues'
    : 'http://localhost:4220'

export const { get, post } = create({
  baseURL: server,
})
