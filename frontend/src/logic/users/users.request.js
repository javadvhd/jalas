// modules
import * as R from 'ramda'
// setup
import { getRequest } from '../../setup/request'
import { getState } from '../../setup/redux'
import { dispatchAddUsers } from './users.actions'

import { dispatchSetSnackbarMessage } from '../../App/components/snackbar/snackbar.actions'

export const reqGetUsersById = ids => {
  const userIds = R.difference(ids, R.map(R.prop('_id'), getState().main.users))
  return getRequest({
    dest: 'user',
    action: 'USER_GET_USERS_BY_ID',
    payload: { userIds },
  })
    .then(({ data }) => dispatchAddUsers(data))
    .catch(() =>
      dispatchSetSnackbarMessage({
        type: 'error',
        message: 'مشکلی در دریافت اطلاعات کاربران به وجود آمده است',
      }),
    )
}
