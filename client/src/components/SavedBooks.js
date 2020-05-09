import React, { Component, useState, useEffect } from "react";
import API from "../utils/API";
import SavedMedia from "./SavedMedia";

function SavedBooks() {
  const [bookState, setBookState] = useState([]);

useEffect(() => {
   loadBooks();
}, []);

 function loadBooks(){
  const fetchData = async () => {
    const result = await API.getBooks();

    setBookState([...result.data]);
  };

  fetchData();
 }   

  function deleteBook(id){
    API.deleteBook(id)
    .then(()=>loadBooks())
    .catch((err) => console.log(err));
  }

 
  return (
    <div>
      {bookState.length ? ( 
      <ul >
        {bookState.map((item) => (
          <li className="list-group-item mb-3" key={item._id}>
            <SavedMedia
             title={item.title}
              imgsrc={item.image} 
              authors={item.authors} 
              description = {item.description}
              previewLink = {item.link}
              handleDeleteBook={deleteBook} 
              id={item._id} />
          </li>
        ))}
      </ul>
      ): (
        <h3>No Results to Display</h3>
      )}
    </div>
  );
}

export default SavedBooks;
