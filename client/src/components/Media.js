import React from "react";

const styles = {
  buttonStyle: {
    position: "absolute",
    top: 5,
    right: 5,
  },
  mediaStyle: {
    position: "relative",
  },
};
function Media({title, authors,imgsrc, description, previewLink, handlesavebook}) {
  return (
    <div className="media">
      <img className="mr-3" src={imgsrc} alt={title} />
      <div className="media-body">
        <h5 className="mt-0"><a href={previewLink} target="_blank">{title}</a></h5>
        {authors.map(author=>(
        <h6 key={author}>written by {author}</h6>
        ))}
       {description}
      </div>
      <button
        type="button"
        id="btnSave"
        style={styles.buttonStyle}
        className="btn btn-default"
        onClick={handlesavebook}
      >
        Save
      </button>
    </div>
  );
}

export default Media;
