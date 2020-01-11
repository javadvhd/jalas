// modules
import * as R from 'ramda'
import React from 'react'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import {
  Dialog,
  AppBar,
  IconButton,
  Typography,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Slide,
  Divider,
  Checkbox,
} from '@material-ui/core'
import getItemTitle from './notificationPanel.helper'

// style
const useStyles = makeStyles(theme => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}))

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})

const NotificationPanel = ({ onClose, onSubmit, notificationItems }) => {
  const classes = useStyles()
  const [items, makeItems] = React.useState(notificationItems)

  const click = ({ target: { checked } }, key) => {
    makeItems(R.assoc(key, checked, items))
  }
  return (
    <div>
      <Dialog
        fullScreen
        open={true}
        onClose={onClose}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={onClose}
              aria-label="close"
            >
              <img src="close.svg" alt="" />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              صفحه ی مدیریت نوتیف ها
            </Typography>
            <Button autoFocus color="inherit" onClick={() => onSubmit(items)}>
              <img src="done.svg" alt="" />
            </Button>
          </Toolbar>
        </AppBar>
        <List>
          {Object.keys(items).map((key, index) => (
            <>
              <ListItem>
                <Checkbox
                  checked={items[key]}
                  onChange={e => click(e, key)}
                  value="primary"
                  inputProps={{ 'aria-label': 'primary checkbox' }}
                />
                <ListItemText primary={getItemTitle(key)} secondary="" />
              </ListItem>
              <Divider />
            </>
          ))}
        </List>
      </Dialog>
    </div>
  )
}

export default NotificationPanel
