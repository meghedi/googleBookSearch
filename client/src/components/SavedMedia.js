import React from "react";
import { Link } from "react-router-dom";

const styles = {
  buttonStyle: {
    position: "absolute",
    top: 5,
    right: 5,
  },
  mediaStyle: {
    position: "relative",
  },

  buttonStyle2: {
    position: "absolute",
    top: 8,
    right: 90,
    color:"#333"
  },
};
function SavedMedia({id, title, authors,imgsrc, description, previewLink, handleDeleteBook}) {
  return (
    <div className="media">
      <img className="mr-3" src={imgsrc} alt={title} />
      <div className="media-body">
        <h5 className="mt-0"><a href={previewLink} target="_blank">{title}</a></h5>
        {authors.map(author=>(
        <h6>written by {author}</h6>
        ))}
      {description}
      </div>
      {window.location.pathname === "/saved" ? (
            <div>
            <Link to={"/books/"+ id} className="btn btn-default" style={styles.buttonStyle2} >
            View
            </Link>
            <button
            type="button"
            id="btnDelete"
            style={styles.buttonStyle}
            className="btn btn-danger"
            onClick={()=>handleDeleteBook(id)}
            >
            Delete
            </button>
            </div>
      ):(
         <p></p>
      )}
    </div>
  );
}

export default SavedMedia;
