import React from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import TextField from '@material-ui/core/TextField'

const Login = ({ onSubmit, handleClose }) => {
  const [state, setState] = React.useState({
    email: 'hosein.norouzi76@gmail.com',
    password: '1',
  })
  return (
    <>
      <Dialog
        open={true}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        {/* <DialogTitle id="form-dialog-title">Subscribe</DialogTitle> */}
        <DialogContent>
          <DialogContentText>
            لطفاایمیل و رمز خود را وارد کنید
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="ایمیل"
            type="email"
            fullWidth
            value={state.email}
            onChange={({ target: { value } }) =>
              setState({ ...state, email: value })
            }
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="رمز ورود"
            type="text"
            fullWidth
            value={state.password}
            onChange={({ target: { value } }) =>
              setState({ ...state, password: value })
            }
          />
        </DialogContent>
        <DialogActions>
          {/* <Button onClick={handleClose} color="primary">
          Cancel
        </Button> */}
          <Button onClick={() => onSubmit(state)} color="primary">
            تایید
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default Login
