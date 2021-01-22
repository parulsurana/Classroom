import { FormControl, FormControlLabel, Checkbox as MuiCheckbox } from '@material-ui/core';
import React from 'react'

const convertToDefEventPara = (name, value) => ({
    target:{
        name, value
    }
})

export default function CheckBox(props) {
    const {name, label, value, onChange} = props;
    return (
        <FormControl>
            <FormControlLabel 
                control={<MuiCheckbox
                name={name}
                color="primary"
                checked={value}
                onChange={e => onChange(convertToDefEventPara(name, e.target.checked))}
                />}
                label={label}
            />
        </FormControl>
    )
}
