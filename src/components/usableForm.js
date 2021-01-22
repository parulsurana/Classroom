import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core';

export function UsableForm(initialValues) {
    const [values, SetValues] = useState(initialValues);
    const [errors, SetErrors] = useState({});
    const handleInputChange = e => {
        const { name, value } = e.target
        SetValues({
            ...values,
            [name]: value
        })
    }
    return {
        values,
        SetValues,
        errors,
        SetErrors,
        handleInputChange
    }
}

const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiFormControl-root': {
            width: '70%',
            margin: theme.spacing(1)
        }
    }
}))

export function Form(props) {
    const classes = useStyles();
    const {children ,  ...other}=props
    return (
        <form className={classes.root} autoComplete="off" {...other}>
            {props.children}
        </form>
    )
}
