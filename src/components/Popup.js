import { Dialog, DialogTitle, DialogContent, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import Button from './Button';

const useStyles = makeStyles(theme =>({
    dialogWrapper : {
        height: theme.spacing(80),
        width: theme.spacing(50),
        padding : theme.spacing(2),
        position : 'absolute',
    }
}))


export default function Popup(props) {
    const { title, children, openPopup, setOpenPopup } = (props)
    const classes = useStyles();
    return (
        <Dialog open={openPopup} maxWidth="md" classes={{ paper : classes.dialogWrapper}}>
            <DialogTitle>
            <div style={{display: 'flex'}}>
                <Typography variant="h6" component="div" style={{flexGrow:1}}>
                  {title}
                </Typography>
                <Button
                label="X"
                buttonName="crossButton"
                onClick={()=> setOpenPopup(false)}
                >
                </Button>
                </div>
            </DialogTitle>
            
            <DialogContent dividers>
                {children}
            </DialogContent>
        </Dialog>
    )
}
