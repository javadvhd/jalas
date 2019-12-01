// modules
import React from 'react'
// components
import TextareaAutosize from '@material-ui/core/TextareaAutosize'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import { makeStyles } from '@material-ui/core/styles'

// icons
import SendIcon from '@material-ui/icons/Send'

const useStyles = makeStyles(() => ({
  root: {
    position: 'fixed',
    bottom: 0,
    width: '100%',
    height: 'auto',
    background: '#0D2154',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '5px 0',
  },

  textarea: {
    borderRadius: 11,
    width: '100%',
    padding: '5px 10px 0',
    marginRight: '10px',
    background: 'white',
    resize: 'none',
    minHeight: 30,
    fontSize: '16px',
    lineHeight: '21px',
    letterSpacing: '-0.08px',
    fontFamily: 'iranyekan',
    maxHeight: 70,
    outline: 'none',
    overflow: 'hidden',
    boxSizing: 'border-box',
    '&::placeholder': {
      direction: 'rtl',
      fontSize: 12,
    },
  },

  sendButton: {
    width: '40px',
    height: '40px',
    minWidth: '40px',
    minHeight: '40px',
    borderRadius: '50%',
    margin: '0 10px',
    alignSelf: 'flex-end',
  },
}))

const SendField = ({
  value,
  loading,
  onChange,
  onSend,
  onKeyDown,
  sendFieldHeight,
}) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Button
        onClick={onSend}
        disabled={loading}
        className={classes.sendButton}
      >
        {loading ? (
          <CircularProgress size={20} style={{ color: 'white' }} />
        ) : (
          <SendIcon
            style={{
              fontSize: 28,
              marginRight: 2,
              color: 'white',
              transform: 'rotate(180deg)',
            }}
          />
        )}
      </Button>
      <TextareaAutosize
        rows={1}
        rowsMax={5}
        className={classes.textarea}
        dir="auto"
        value={value}
        onKeyDown={onKeyDown}
        onChange={e => onChange(e.target.value)}
        placeholder="پاسخ خود را وارد کنید"
      />
    </div>
  )
}

export default SendField
