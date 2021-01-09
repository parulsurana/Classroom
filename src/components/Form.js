import { Grid, makeStyles, Paper, TextField } from '@material-ui/core';
import React, { useState, useEffect } from 'react'

const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiFormControl-root': {
            width: '70%',
            margin: theme.spacing(1)
        }
    }
}))

// const useStyles = makeStyles(theme => ({
//         pageContent:{
//             margin:theme.spacing(5),
//             padding:theme.spacing(3)
//         }
// }))


const initialVlues = {
    id: 0,
    fullName: '',
    email: '',
    mobile: '',
    city: '',
    gender: "female",
    departmentId: '',
    hireDate: new Date(),
    isPermanent: false,
}


export default function Form({Sejal, Parul}) {
    const [values, Setvalues] = useState(initialVlues);
    const classes = useStyles();
    return (
        // <Paper className={classes.pageContent}>
              <form className={classes.root}>
            <Grid container>
                <Grid item xs={6}>
                    <TextField
                        variant="outlined"
                        label="Full Name"
                        value={values.fullName}
                    />
                    {Sejal && <TextField
                        variant="outlined"
                        label="Email"
                        value={values.email}
                    />}
                    {Parul && <TextField
                        variant="outlined"
                        label="Mobile"
                        value={values.mobile}
                    />}
                </Grid>
                <Grid item xs={6}></Grid>

            </Grid>
        </form>
        // </Paper>
      
    )
}
