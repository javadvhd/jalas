// modules
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
              Sound
            </Typography>
            <Button autoFocus color="inherit" onClick={onSubmit}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <List>
          {items.map(item => (
            <>
              <ListItem>
                <ListItemText primary={item.title} secondary="Titania" />
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
