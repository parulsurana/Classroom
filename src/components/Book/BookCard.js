import React from "react";
import Button from "../Button";
import "./BookCard.css";

function BookCard({ bookTitle, bookDescription }) {
  return (
    <div className="bookCard">
      <div className="blog_post">
        <div className="blog_postImg">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHA_MX2ITfOxFaGkry7zWdqqjz8GtIm7kSbQ&usqp=CAU"
            alt="book"
          />
        </div>{" "}
        <div className="blog_postInfo">
          <h1 className="blog_postTitle">
            {" "}
            {bookTitle}
            {" "}
          </h1>{" "}
          <p className="blog_postText">
            {bookDescription}{" "}
          </p>{" "}
          <Button buttonName="download" label="Download"></Button>
        </div>{" "}
      </div>{" "}
    </div>
  );
}

export default BookCard;
