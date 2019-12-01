// actions
import { dispatchSetUserData } from '../logic/user/user.actions'
import { dispatchAddUsers } from '../logic/users/users.actions'
// requests

export default () => {
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
}
