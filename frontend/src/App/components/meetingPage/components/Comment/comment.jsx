// modules
import React from 'react'
// components
import Typography from '@material-ui/core/Typography'
import Fab from '@material-ui/core/Fab'
import Delete from '@material-ui/icons/Delete'
import { makeStyles } from '@material-ui/core/styles'
import ProfileInfo from '../profileInfo/profileInfo'
// helpers
const useStyles = makeStyles(() => ({
  deleteButton: {
    width: 30,
    height: 30,
    minHeight: 30,
    backgroundColor: '#ccc',
    boxShadow: 'none',
    '&:hover': {
      backgroundColor: '#E6494F',
      color: 'white',
      boxShadow: 'none',
    },
  },
  comment: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  reverse: {
    flexDirection: 'row-reverse',
  },
  typography: {
    background: '#F0F0F0',
    padding: '5px 9px',
    borderRadius: '11px',
    fontSize: '12px',
    lineHeight: '21px',
    flexGrow: 2,
    letterSpacing: '-0.08px',
    overflowWrap: 'break-word',
    wordWrap: 'break-word',
    wordBreak: 'break-word',
    whiteSpace: 'pre-line',
    fontFamily: 'iranyekan',
  },
  deleteIcon: {
    width: 20,
  },
}))

const Comment = ({
  body,
  fromAdmin,
  hasDeleteOption,
  onDeleteComment,
  ...props
}) => {
  const classes = useStyles()
  return (
    <div style={{ margin: '11px 20px' }}>
      <ProfileInfo {...props} fromAdmin={fromAdmin} />
      <div className={`${classes.comment} ${fromAdmin ? classes.reverse : ''}`}>
        {hasDeleteOption ? (
          <Fab
            size="small"
            className={classes.deleteButton}
            onClick={onDeleteComment}
          >
            <Delete className={classes.deleteIcon} />
          </Fab>
        ) : null}
        <Typography
          className={classes.typography}
          dir="rtl"
          style={{
            [`margin${fromAdmin ? 'Right' : 'Left'}`]: hasDeleteOption
              ? 11
              : 43,
          }}
        >
          {body}
        </Typography>
      </div>
    </div>
  )
}

export default Comment
