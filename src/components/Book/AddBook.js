import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import "./AddBook.css";
import BookCard from "./BookCard";

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
        <Sidebar
          Menuicon={true}
          sideMenu={true}
          SidebuttonTypeFour={true}
          SidebuttonTypeFive={true}
        />
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
