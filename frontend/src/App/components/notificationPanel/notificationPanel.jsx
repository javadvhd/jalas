// modules
import * as R from 'ramda'
import React from 'react'
import MuiAppBar from '@material-ui/core/AppBar'
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
  console.log('notificationItems ', notificationItems)
  const [items, makeItems] = React.useState(notificationItems)

  const click = ({ target: { checked } }, index) => {
    makeItems(R.update(index, { ...items[index], selected: checked }, items))
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
              close
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              صفحه ی مدیریت نوتیف ها
            </Typography>
            <Button autoFocus color="inherit" onClick={() => onSubmit(items)}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <List>
          {items.map((item, index) => (
            <>
              <ListItem>
                <Checkbox
                  checked={item.selected}
                  onChange={e => click(e, index)}
                  value="primary"
                  inputProps={{ 'aria-label': 'primary checkbox' }}
                />
                <ListItemText primary={item.title} secondary="" />
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
