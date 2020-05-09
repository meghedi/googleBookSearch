import React from "react";


function Wrapper(props){
   return (
       <div className="container">
    <div className="jumbotron text-center">
        <h1 className="display-4">(React) Google Books Search</h1>
        <p className="lead">Search for and Save Books for Interest</p>

     </div>
     <div>
       {props.children}
     </div>
     </div>
   );
}

export default Wrapper;

