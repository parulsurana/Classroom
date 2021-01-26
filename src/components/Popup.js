import {
  Dialog,
  DialogTitle,
  DialogContent,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { Autorenew } from "@material-ui/icons";
import React from "react";
import Button from "./Button";

const useStyles = makeStyles((theme) => ({
  dialogWrapper: {
    height: "auto",
    width: theme.spacing(65),
    padding: theme.spacing(2),
    position: "absolute",
  },
}));

export default function Popup(props) {
  const { title, children, openPopup, setOpenPopup } = props;
  const classes = useStyles();
  return (
    <Dialog
      open={openPopup}
      maxWidth="md"
      classes={{ paper: classes.dialogWrapper }}
    >
     <div style={{backgroundColor: "#cdd0cb", borderRadius: "4px"}}>
     <DialogTitle>
        <div style={{ display: "flex" }}>
          <Typography variant="h6" component="div" style={{ flexGrow: 1, fontWeight: "bold", fontFamily: "Georgia, 'Times New Roman', Times, serif"}}>
            {title}
          </Typography>
          <Button
            label="X"
            buttonName="crossButton"
            onClick={() => setOpenPopup(false)}
          ></Button>
        </div>
      </DialogTitle>

     </div>
     <DialogContent dividers>{children}</DialogContent>

    </Dialog>
  );
}
