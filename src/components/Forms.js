import { Grid, IconButton, InputLabel } from "@material-ui/core";
import React, { useEffect, useState } from "react";
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
import { DataUsageTwoTone } from "@material-ui/icons";
import {firebaseAp} from "../firebase";

export default function Forms({ AddClassroom, Project, Book, Assignment, Buttonone, Buttontwo, Buttonthree }) {
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

 
  const setBookImage = (e) => {
    const file = e.target.value[0]
    const storageRef = firebaseAp.storage().ref()
    const filedRef = storageRef.child(file.name)
    filedRef.put(file).then(() => {
      console.log("Upload file", file.name)
    })
  }


  const clickmeone = async (e) => {
    e.prevent.Default()
    try {
      const result = await fetch("http://localhost:7000/info/", {
        method: "post",
        mode: "cors",
        headers: {
          "Accept": "application/json",
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          classname: `${className}`,
          subject: `${subject}`,
          roomlink: `${roomLink}`,
          section: `${section}`,
          startDate: `${startDate}`,
          endDate: `${endDate}`
        })
      });
      console.log("Result:" + result)
    } catch (e) {
      console.log(e)
    } 
  };
  const clickmetwo = async () => {
    try {
      const result = await fetch("http://localhost:7000/project/", {
        method: "post",
        mode: "cors",
        headers: {
          "Accept": "application/json",
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          projectname: `${projectName}`,
          features: `${feature}`,
        })
      });
      console.log("Result:" + result)
    } catch (e) {
      console.log(e)
    } 
  };
  const clickmethree = async () => {
    try {
      const result = await fetch("http://localhost:7000/book/", {
        method: "post",
        mode: "cors",
        headers: {
          "Accept": "application/json",
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          bookname: `${bookName}`,
          authorname: `${authorName}`,
          // bookimage: `${bookImage}`,
          bookpdf: `${bookPdf}`,
        })
      });
      console.log("Result:" + result)
    } catch (e) {
      console.log(e)
    } 
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
  // const [bookImage, setBookImage] = useState("");
  const [bookPdf, setBookPdf] = useState("");
  const [assignmentTitle, setAssignmentTitle] = useState("");
  const [instruction, setInstruction] = useState("");
  const [assignmentPdf, setAssignmentPdf] = useState("");

  return (
    <>
      <Form>
        <Grid container>
          <Grid item xs={12}>
            {AddClassroom && (
              <Input
                variant="outlined"
                label="Class Name"
                name="ClassName"
                value={className}
                onChange={(e) => setClassName(e.target.value)}
                // error={errors.ClassName}
              />
            )}

            {AddClassroom && (
              <Input
                variant="outlined"
                label="Subject"
                name="Subject"
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
                // error={errors.RoomLink}
                value={roomLink}
                onChange={(e) => setRoomLink(e.target.value)}
              />
            )}

            {AddClassroom && (
              <Select
                label="Section"
                name="Section"
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
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            )}

            {AddClassroom && (
              <DatePickers
                label="End Date"
                name="EndDate"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            )}

            {Project && (
              <Input
                variant="outlined"
                label="Project Name"
                name="ProjectName"
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
                // error={errors.bookImage}
                type="file"
                // value={bookImage}
                onChange={setBookImage}
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
                  // error={errors.AssignmentPdf}
                  type="file"
                  value={assignmentPdf}
                  onChange={(e) => setAssignmentPdf(e.target.value)}
                />
              </>
            )}
           {Buttonone && (< Button label="Submit" buttonName="add" onClick={clickmeone}/>)}
           {Buttontwo && < Button label="Submit" buttonName="add" onClick={clickmetwo}/>}
           {Buttonthree && < Button label="Submit" buttonName="add" onClick={clickmethree}/>}
          </Grid>
        </Grid>
      </Form>

    </>
  
  );
}

