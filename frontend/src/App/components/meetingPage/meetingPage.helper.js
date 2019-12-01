// refs
import { listRef } from './meetingPage.jsx/index.js'

export const scrollToBottom = () => {
  listRef.current.scrollTo(0, listRef.current.scrollHeight)
}
