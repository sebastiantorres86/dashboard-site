import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import MuiDialogTitle from '@material-ui/core/DialogTitle'
import MuiDialogContent from '@material-ui/core/DialogContent'
import MuiDialogActions from '@material-ui/core/DialogActions'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import AddIcon from '@material-ui/icons/Add'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2)
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500]
  },
})


const ColorButton = withStyles(theme => ({
  root: {
    backgroundColor: '#83C5BE',
    '&:hover': {
      backgroundColor: '#006D77'
    }
  }
}))(Button)

const DialogTitle = withStyles(styles)(props => {
  const { children, classes, onClose, ...other } = props
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant='h6'>{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label='close'
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  )
})

const DialogContent = withStyles(theme => ({
  root: {
    padding: theme.spacing(2)
  }
}))(MuiDialogContent)

const DialogActions = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(1)
  }
}))(MuiDialogActions)

export default function CustomizedDialogs () {
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <ColorButton
        variant='contained'
        color='secondary'
        startIcon={<AddIcon />}
        onClick={handleClickOpen}
      >
        Add Walk-up
      </ColorButton>
      <Dialog
        onClose={handleClose}
        aria-labelledby='customized-dialog-title'
        open={open}
        fullWidth={true}
      >
        <DialogTitle id='customized-dialog-title' onClose={handleClose}>
          <br />
        </DialogTitle>
        <iframe
          src='https://patienteducationgenius.jotform.com/210565096487060'
          title='W3Schools Free Online Web Tutorials'
          style={{height: '80vh'}}
        ></iframe>
      </Dialog>
    </div>
  )
}
