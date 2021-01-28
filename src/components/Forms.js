import { Grid, IconButton, InputLabel } from "@material-ui/core";
import React, { useState } from "react";
import { UsableForm, Form } from "./usableForm";
import Input from "./Input";
import Select from "./Select";
import { GetSectionCollection } from "./Services";
import DatePickers from "./DatePickers";
import Button from "./Button";
import employeeServices from "./Services";
import Popup from "./Popup";
import "./Form.css";
import { useForm } from "react-hook-form";

// const initialValues = {
//   id: 0,
//   ClassName: "",
//   ProjectName: "",
//   BookName: "",
//   AssignmentName: "",
//   Subject: "",
//   Section: "",
//   AuthorName: "",
//   Features: "",
//   SectionId: "",
//   StartDate: new Date(),
//   EndDate: new Date(),
//   isPermanent: false,
// };

export default function Forms({ AddClassroom, Project, Book, Assignment }) {
  //   const validate = () => {
  //     let temp = {};
  //     temp.fullName = values.fullName ? "" : "This field is required";
  //     temp.email = /$^|.*.@.*..*/.test(values.email) ? "" : "Email is not valid";
  //     temp.mobile = values.mobile.length > 9 ? "" : "Minimun 10 numbers required";
  //     temp.SectionId =
  //       values.SectionId.length != 0 ? "" : "This field is required";
  //     SetErrors({
  //       ...temp,
  //     });

  //     return Object.values(temp).every((x) => x == "");
  //   };

  // const {
  //   values,
  //   setValues,
  //   errors,
  //   SetErrors,
  //   handleInputChange,
  // } = UsableForm(initialValues);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (validate()) {
  //     // employeeServices.insertEmployee(values);
  //     console.log(values);
  //   }
  // };

  const clickme = () => {
    console.log(className);
  };
  const [className, setClassName] = useState("");
  const [subject, setSubject] = useState("");
  const [roomLink, setRoomLink] = useState("");
  const [section, setSection] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [projectName, setProjectName] = useState("");
  const [feature, setFeature] = useState("");
  const [bookName, setBookName] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [bookImage, setBookImage] = useState("");
  const [bookPdf, setBookPdf] = useState("");
  const [assignmentTitle, setAssignmentTitle] = useState("");
  const [instruction, setInstruction] = useState("");
  const [assignmentPdf, setAssignmentPdf] = useState("");

  return (
    <>
      <Form >
        <Grid container>
          <Grid item xs={12}>
            {AddClassroom && (
              <Input
                variant="outlined"
                label="Class Name"
                name="ClassName"
                value={className}
                // onChange={handleInputChange}
                onChange={(e) => setClassName(e.target.value)}
                // error={errors.ClassName}
              />
            )}

            {AddClassroom && (
              <Input
                variant="outlined"
                label="Subject"
                name="Subject"
                // value={values.Subject}
                // onChange={handleInputChange}
                // error={errors.Subject}
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            )}

            {AddClassroom && (
              <Input
                variant="outlined"
                label="Room Link"
                name="RoomLink"
                // value={values.RoomLink}
                // onChange={handleInputChange}
                // error={errors.RoomLink}
                value={roomLink}
                onChange={(e) => setRoomLink(e.target.value)}
              />
            )}

            {AddClassroom && (
              <Select
                label="Section"
                name="Section"
                // value={values.SectionId}
                // onChange={handleInputChange}
                options={GetSectionCollection}
                // error={errors.SectionId}
                value={section}
                onChange={(e) => setSection(e.target.value)}
              />
            )}

            {AddClassroom && (
              <DatePickers
                label="Start Date"
                name="StartDate"
                // value={values.StartDate}
                // onChange={handleInputChange}
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            )}

            {AddClassroom && (
              <DatePickers
                label="End Date"
                name="EndDate"
                // value={values.EndDate}
                // onChange={handleInputChange}
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            )}

            {Project && (
              <Input
                variant="outlined"
                label="Project Name"
                name="ProjectName"
                // value={values.ProjectName}
                // onChange={handleInputChange}
                // error={errors.ProjectName}
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
              />
            )}

            {Project && (
              <Input
                variant="outlined"
                id="outlined-textarea"
                multiline
                label="Features"
                name="Features"
                // value={values.Features}
                // onChange={handleInputChange}
                // error={errors.Features}
                value={feature}
                onChange={(e) => setFeature(e.target.value)}
              />
            )}
            {Book && (
              <Input
                variant="outlined"
                label="Book Name"
                name="BookName"
                // value={values.BookName}
                // onChange={handleInputChange}
                // error={errors.BookName}
                value={bookName}
                onChange={(e) => setBookName(e.target.value)}
              />
            )}

            {Book && (
              <Input
                variant="outlined"
                label="Author Name"
                name="AuthorName"
                // value={values.AuthorName}
                // onChange={handleInputChange}
                // error={errors.AuthorName}
                value={authorName}
                onChange={(e) => setAuthorName(e.target.value)}
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
                name="bookImage"
                accept="image/*"
                // value={values.bookImage}
                // onChange={handleInputChange}
                // error={errors.bookImage}
                type="file"
                value={bookImage}
                onChange={(e) => setBookImage(e.target.value)}
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
                  // name="filesuploaded"
                  // value={values.filesuploaded}
                  // onChange={handleInputChange}
                  // error={errors.filesuploaded}
                  variant="outlined"
                  type="file"
                  name="bookPdf"
                  value={bookPdf}
                  onChange={(e) => setBookPdf(e.target.value)}
                />
              </>
            )}
            {Assignment && (
              <Input
                variant="outlined"
                label="Assignment Title"
                name="AssignmentTitle"
                // value={values.AssignmentTitle}
                // onChange={handleInputChange}
                // error={errors.AssignmentTitle}
                value={assignmentTitle}
                onChange={(e) => setAssignmentTitle(e.target.value)}
              />
            )}
            {Assignment && (
              <Input
                variant="outlined"
                id="outlined-textarea"
                multiline
                label="Instructions"
                name="Instructions"
                // value={values.Instructions}
                // onChange={handleInputChange}
                // error={errors.Instructions}
                value={instruction}
                onChange={(e) => setInstruction(e.target.value)}
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
                  // value={values.AssignmentPdf}
                  // onChange={handleInputChange}
                  // error={errors.AssignmentPdf}
                  type="file"
                  value={assignmentPdf}
                  onChange={(e) => setAssignmentPdf(e.target.value)}
                />
              </>
            )}
            <Button label="Submit" buttonName="add" onClick={clickme}/>
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
