import React from "react";
import Button from "../Button";
import "./BookCard.css";

function BookCard({ bookTitle, bookDescription }) {
  return (
    <div className="bookCard">
        <div className="blog_post">
          <div className="blog_postImg">
            <img
              src="https://github.com/parulsurana/Classroom/blob/master/src/Assets/images-_1_.jpg?raw=true"
              alt="book"
            />
          </div>{" "}
          <div className="blog_postInfo">
            <h1 className="blog_postTitle"> {bookTitle} </h1>{" "}
            <p className="blog_postText"> {bookDescription} </p>{" "}
            <Button buttonName="download" label="Download">
              {" "}
            </Button>{" "}
          </div>{" "}
        </div>{" "}
      </div>
  );
}

export default BookCard;
