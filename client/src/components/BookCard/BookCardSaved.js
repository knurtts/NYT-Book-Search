import React from "react";
import "./BookCard.css";


  function BookCard(props) {
      return (<>
        <div className="col s12 m7">
          <h2 className="header">{props.title}</h2>
  
          <div className="card horizontal">
          
            <div className="card-image">
              <img src={props.coverImg} alt={props.title} />
            </div>
          
            <div className="card-stacked">
          
              <div className="card-content">
                <p>{props.description}</p>
              </div>
          
              <div className="card-action">
                <a href="#" onClick={()=>{props.deleteBook(props.id)}}>Remove</a>
                <a href={props.link} target="_blank">Find This Book</a>
              </div>          
            </div>
          
          </div>
        
        </div>
      </>)
  };


export default BookCard;