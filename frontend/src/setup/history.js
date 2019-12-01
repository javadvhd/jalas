import { createHistory, createMemorySource } from '@reach/router'

const source = createMemorySource('/all')
export const history = createHistory(source)

export const { navigate } = history
