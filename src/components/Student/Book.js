import React, { useEffect, useState } from "react";
import SidebarS from "./SidebarS";
import "../Book/AddBook.css";
import BookCard from "../Book/BookCard";

export default function AddClassroom() {
  const [book, setBook] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const url = "http://localhost:7000/book/";
      const response = await fetch(url);
      const data = await response.json();
      setBook(data);
      console.log(data);
    }
    fetchData();
  }, []);

  return (
    <div className="AddBook">
      <div className="AddBook_header">
        <SidebarS Menuicon={true} sideMenu={true} />
      </div>
      <div className="AddBook_item">
        {book.map((books) => (
          <div key={books.id}>
            <BookCard
              bookTitle={books.bookname}
              bookDescription={books.authorname}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
