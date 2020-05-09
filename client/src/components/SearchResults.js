import React from "react";
import Media from "./Media";

function SearchResults(props) {
  return(
    <>
    {props.results.length ? (
    <ul className="list-group">
      {props.results.map(result => (
        <li className="list-group-item mb-3" key={result.id}>
          <Media 
          title={result.volumeInfo.title} 
          imgsrc={result.volumeInfo.imageLinks.thumbnail} 
          authors={result.volumeInfo.authors}
          description = {result.volumeInfo.description}
          previewLink = {result.volumeInfo.previewLink}
          handlesavebook={()=>props.handleSaveBook({title: result.volumeInfo.title, authors:result.volumeInfo.authors, image:result.volumeInfo.imageLinks.thumbnail, description: result.volumeInfo.description, link:result.volumeInfo.previewLink})}/>
        </li>
      ))}
    </ul>
    ):(
      <h3>No Results to Display</h3>
    )}
    </>
  );
}


export default SearchResults;
