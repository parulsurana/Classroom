import { Grid, makeStyles, Paper, TextField } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { UsableForm, Form } from './usableForm';
import Input from "./Input";
import Select from './Select';
import { GetDepartmentCollection } from "./Services";
import CheckBox from './CheckBox';
import DatePickers from './DatePickers';
import Button from "./Button";
import employeeServices from "./Services";
import Popup from "./Popup";

// const useStyles = makeStyles(theme => ({
//         pageContent:{
//             margin:theme.spacing(5),
//             padding:theme.spacing(3)
//         }
// }))


const initialValues = {
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




export default function Forms({ Sejal, Parul }) {

    const validate = () => {
        let temp = {}
        temp.fullName = values.fullName ? "" : "This field is required";
        temp.email = (/$^|.*.@.*..*/).test(values.email) ? "" : "Email is not valid";
        temp.mobile = values.mobile.length > 9 ? "" : "Minimun 10 numbers required";
        temp.departmentId = values.departmentId.length != 0 ? "" : "This field is required";
        SetErrors({
            ...temp
        })

        return Object.values(temp).every(x => x == "");
    }

    const {
        values,
        setValues,
        errors,
        SetErrors,
        handleInputChange
    } = UsableForm(initialValues);

    const handleSubmit = e => {
        e.preventDefault()
        if (validate()) {
            employeeServices.insertEmployee(values);
        }
    }

    const [openPopup, setOpenPopup] = useState(false)


    return (
        // <Paper className={classes.pageContent}>
        <>
            
            <Button
                label="+ ADD"
                buttonName="homeButton popupButton"
                onClick={() => setOpenPopup(true)}
            />
            <Popup
            title = "Form"
            openPopup = {openPopup}
                setOpenPopup = {setOpenPopup}
                >
                <Form onSubmit={handleSubmit}>
                <Grid container>
                    <Grid item xs={12}>
                        <Input
                            variant="outlined"
                            label="FullName"
                            name="fullName"
                            value={values.fullName}
                            onChange={handleInputChange}
                            error={errors.fullName}
                        />
                        {Sejal && <Input
                            variant="outlined"
                            label="Email"
                            name="email"
                            value={values.email}
                            onChange={handleInputChange}
                            error={errors.email}
                        />}
                        {Parul && <Input
                            variant="outlined"
                            label="Mobile"
                            name="mobile"
                            value={values.mobile}
                            onChange={handleInputChange}
                            error={errors.mobile}
                        />}
                        <Select
                            label="Department"
                            name="departmentId"
                            value={values.departmentId}
                            onChange={handleInputChange}
                            options={GetDepartmentCollection}
                            error={errors.departmentId}
                        />
                        <CheckBox
                            label="Permanent"
                            name="isPermanent"
                            value={values.isPermanent}
                            onChange={handleInputChange}
                        />
                        <DatePickers
                            label="Hire Date"
                            name="hireDate"
                            value={values.hireDate}
                            onChange={handleInputChange}
                        />
                        <Button
                            label="Submit"
                            buttonName="homeButton"
                        />

                    </Grid>
                </Grid>
            </Form>
            </Popup>
        </>
        // </Paper>

    )
}
