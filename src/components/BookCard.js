import React from "react";
import "./BookCard.css";

function BookCard({ bookTitle }) {
  return (
    <div className="bookCard">
      <div className="blog_post">
        <div className="blog_postImg">
          <img
            src="https://images.unsplash.com/photo-1534543210152-32025bcfaad9?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw0NzkzOTE1fHxlbnwwfHx8&w=1000&q=80"
            alt="book"
          />
        </div>
        <div className="blog_postInfo">
          <h1 className="blog_postTitle">
            {/* {bookTitle} */}
            Sejal
          </h1>
          <p className="blog_postText">
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used
            in laying out print, graphic or web designs.
          </p>
        </div>
      </div>
    </div>
  );
}

export default BookCard;
