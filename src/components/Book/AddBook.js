import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import Card from "../Card";
import "./AddBook.css";


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
        <Sidebar Menuicon={true} sideMenu={true} SidebuttonTypeFour={true} SidebuttonTypeFive={true} />
      </div>
      <div className="AddBook_item">
        {book.map((books) => (
          <div key={books.id}>
            <Card
              title={books.bookimage}
              ImageUrl={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHA_MX2ITfOxFaGkry7zWdqqjz8GtIm7kSbQ&usqp=CAU"}
              body={books.authorname}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
