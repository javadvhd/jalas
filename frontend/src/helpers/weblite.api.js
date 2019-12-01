// actions
import { dispatchSetUserData } from '../logic/user/user.actions'
import { dispatchAddUsers } from '../logic/users/users.actions'
// requests
import { reqGetAllIssues } from '../logic/issues/issues.request'
// W
const { W } = window

export default () => {
  if (W)
    W.setHooks({
      wappWillStart(start, err, { args }) {
        start()
        W.loadData().then(({ user: { id }, creator, creatorId: adminId }) => {
          getUsersInfo([id])
          dispatchSetUserData({
            userId: id,
            wisId: W.wisId,
            adminId,
            isAdmin: creator,
          })
          reqGetAllIssues((args && args.issueId) || undefined)
        })
      },
    })
  else {
    dispatchAddUsers({
      '123': {
        firstname: 'محمد',
        lastname: 'قنبری',
      },
      '456': {
        firstname: 'حسین',
        lastname: 'نوروزی',
      },
      '200': {
        firstname: 'امیر حسین',
        lastname: 'ابراهیمی',
      },
    })
    dispatchSetUserData({
      userId: '200',
      adminId: '456',
      wisId: '5d88e57fe84f5f25fac59081',
      isAdmin: false,
    })
    reqGetAllIssues()
  }
}

export const getUsersInfo = userIds =>
  W && W.getUsersInfoById(userIds).then(dispatchAddUsers)
