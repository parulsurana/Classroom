import DateFnsUtils from '@date-io/date-fns'
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'
import React from 'react'

const convertToDefEventPara = (name, value) => ({
    target:{
        name, value
    }
})

export default function DatePickers(props) {
    const { name, label, value, onChange } = props;
    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker disableToolbar variant="inline" inputVariant="outlined" 
         label={label}
         format="MM/dd/yyyy"
         name={name}
         value={value}
         onChange={date => onChange(convertToDefEventPara(name, date))}
        />
        </MuiPickersUtilsProvider>
    )
}
