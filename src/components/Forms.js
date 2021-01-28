import { Grid, IconButton, InputLabel } from "@material-ui/core";
import React from "react";
import { UsableForm, Form } from "./usableForm";
import Input from "./Input";
import Select from "./Select";
import { GetSectionCollection } from "./Services";
// import CheckBox from "./CheckBox";
import DatePickers from "./DatePickers";
import Button from "./Button";
import employeeServices from "./Services";
import Popup from "./Popup";
import { PhotoCamera } from "@material-ui/icons";
import "./Form.css";


const initialValues = {
  id: 0,
  ClassName: "",
  ProjectName: "",
  BookName: "",
  AssignmentName: "",
  Subject: "",
  Section: "",
  AuthorName: "",
  Features: "",
  //   gender: "female",
  SectionId: "",
  StartDate: new Date(),
  EndDate: new Date(),
  isPermanent: false,
};

export default function Forms({ AddClassroom, Project, Book, Assignment }) {
  const validate = () => {
    let temp = {};
    temp.fullName = values.fullName ? "" : "This field is required";
    temp.email = /$^|.*.@.*..*/.test(values.email) ? "" : "Email is not valid";
    temp.mobile = values.mobile.length > 9 ? "" : "Minimun 10 numbers required";
    temp.SectionId =
      values.SectionId.length != 0 ? "" : "This field is required";
    SetErrors({
      ...temp,
    });

    return Object.values(temp).every((x) => x == "");
  };

  const {
    values,
    setValues,
    errors,
    SetErrors,
    handleInputChange,
  } = UsableForm(initialValues);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      employeeServices.insertEmployee(values);
    }
  };

  return (
    // <Paper className={classes.pageContent}>
    <>
      <Form onSubmit={handleSubmit}>
        <Grid container>
          <Grid item xs={12}>
            {AddClassroom && (
              <Input
                variant="outlined"
                label="Class Name"
                name="ClassName"
                value={values.ClassName}
                onChange={handleInputChange}
                error={errors.ClassName}
              />
            )}

            {AddClassroom && (
              <Input
                variant="outlined"
                label="Subject"
                name="Subject"
                value={values.Subject}
                onChange={handleInputChange}
                error={errors.Subject}
              />
            )}

            {AddClassroom && (
              <Input
                variant="outlined"
                label="Room Link"
                name="RoomLink"
                value={values.RoomLink}
                onChange={handleInputChange}
                error={errors.RoomLink}
              />
            )}

            {AddClassroom && (
              <Select
                label="Section"
                name="SectionId"
                value={values.SectionId}
                onChange={handleInputChange}
                options={GetSectionCollection}
                error={errors.SectionId}
              />
            )}

            {AddClassroom && (
              <DatePickers
                label="Start Date"
                name="StartDate"
                value={values.StartDate}
                onChange={handleInputChange}
              />
            )}

            {AddClassroom && (
              <DatePickers
                label="End Date"
                name="EndDate"
                value={values.EndDate}
                onChange={handleInputChange}
              />
            )}

            {Project && (
              <Input
                variant="outlined"
                label="Project Name"
                name="ProjectName"
                value={values.ProjectName}
                onChange={handleInputChange}
                error={errors.ProjectName}
              />
            )}

            {Project && (
              <Input
                variant="outlined"
                id="outlined-textarea"
                multiline
                label="Features"
                name="Features"
                value={values.Features}
                onChange={handleInputChange}
                error={errors.Features}
              />
            )}
            {Book && (
              <Input
                variant="outlined"
                label="Book Name"
                name="BookName"
                value={values.BookName}
                onChange={handleInputChange}
                error={errors.BookName}
              />
            )}

            {Book && (
              <Input
                variant="outlined"
                label="Author Name"
                name="AuthorName"
                value={values.AuthorName}
                onChange={handleInputChange}
                error={errors.AuthorName}
              />
            )}
            {Book && (
              <input
                style={{
                  fontSize: "20px",
                  padding: "10px",
                  outline: "none",
                }}
                variant="outlined"
                label="Book Cover"
                name="bookImage"
                accept="image/*"
                value={values.bookImage}
                onChange={handleInputChange}
                error={errors.bookImage}
                type="file"
              />
            )}
            {Book && (
              <>
                {" "}
                <input
                  style={{
                    fontSize: "20px",
                    padding: "10px",
                    outline: "none",
                  }}
                  name="filesuploaded"
                  value={values.filesuploaded}
                  onChange={handleInputChange}
                  error={errors.filesuploaded}
                  id="icon-button-photo"
                  placeholder="pdf"
                  type="file"
                />
              </>
            )}
            {Assignment && (
              <Input
                variant="outlined"
                label="Assignment Title"
                name="AssignmentTitle"
                value={values.AssignmentTitle}
                onChange={handleInputChange}
                error={errors.AssignmentTitle}
              />
            )}
            {Assignment && (
              <Input
                variant="outlined"
                id="outlined-textarea"
                multiline
                label="Instructions"
                name="Instructions"
                value={values.Instructions}
                onChange={handleInputChange}
                error={errors.Instructions}
              />
            )}
            {Assignment && (
              <>
                <input
                  style={{
                    fontSize: "20px",
                    padding: "10px",
                    outline: "none",
                  }}
                  variant="outlined"
                  label="Assignment Pdf"
                  name="AssignmentPdf"
                  value={values.AssignmentPdf}
                  onChange={handleInputChange}
                  error={errors.AssignmentPdf}
                  type="file"
                />
              </>
            )}
            <Button label="Submit" buttonName="add" />
          </Grid>
        </Grid>
      </Form>
      {/* </Popup> */}
    </>
    // </Paper>
  );
}

// eslint-disable-next-line no-lone-blocks
{
  /* {AddClassroom && (
                <Input
                  variant="outlined"
                  label="Email"
                  name="email"
                  value={values.email}
                  onChange={handleInputChange}
                  error={errors.email}
                />
              )} */
}
// eslint-disable-next-line no-lone-blocks
{
  /* {Parul && (
                <Input
                  variant="outlined"
                  label="Mobile"
                  name="mobile"
                  value={values.mobile}
                  onChange={handleInputChange}
                  error={errors.mobile}
                />
              )} */
}

// eslint-disable-next-line no-lone-blocks
{
  /* <CheckBox
                label="Permanent"
                name="isPermanent"
                value={values.isPermanent}
                onChange={handleInputChange}
              /> */
}
