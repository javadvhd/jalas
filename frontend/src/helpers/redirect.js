// module
import { navigate } from '@reach/router'

export default ({ to }) => {
  setTimeout(() => navigate(to), 0)
  return null
}
