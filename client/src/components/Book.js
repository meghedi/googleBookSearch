import React, { Component, useState, useEffect } from "react";
import API from "../utils/API";
import SavedMedia from "./SavedMedia";
import Wrapper from "./Wrapper";

function Book({ match }) {
  const bookid = match.params.id;
  const [bookState, setBookState] = useState([]);

  useEffect(() => {
    loadBook();
  }, []);

  function loadBook() {
    const fetchData = async () => {
      const result = await API.getBook(bookid);

      setBookState([result.data]);
    };

    fetchData();
  }

  return (
    <Wrapper>
      <div>
        <ul>
          {bookState.map((item) => (
            <li className="list-group-item mb-3" key={item._id}>
              <SavedMedia
                title={item.title}
                imgsrc={item.image}
                authors={item.authors}
                description={item.description}
                previewLink={item.link}
              />
            </li>
          ))}
        </ul>
      </div>
    </Wrapper>
  );
}

export default Book;
