import { TextField } from '@material-ui/core'
import React from 'react'

export default function Input(props) {

    const {id,name,label,value,error=null,onChange,type,url} = props;
    return (
        <TextField
        variant="outlined"
        label={label}
        name={name}
        value={value}
        type={type}
        onChange={onChange}
        url={url}
        id={id}
        multiline
        {...(error && {error:true, helperText:error })}
    />
   
    )
}
