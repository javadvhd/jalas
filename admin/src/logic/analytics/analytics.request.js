// setup
import { getState } from '../../setup/redux'
import { create } from 'axios'
const { post } = create({
  baseURL: `http://localhost:${8085}`,
})

export const reqGetAnalytics = () =>
  get('/', {
    dest: 'analytics',
    action: 'ANALYTICS_SAVE_DATA',
    payload: {},
  })
