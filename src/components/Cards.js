import React from "react";
import "../CSS/Card.css";


const Card =(props) =>{
  console.log(props);
   return (
    <>
       {props.data.map((value,index)=>(
       <div className="card" key={index}>
        <img className="card-image" src={value.ImgUrl} alt={value.title} />
        <h2 className="card-title">{value.title}</h2>
        <h4 className="card-price">${value.Price}</h4>
        <p className="description">{value.description}</p>
       </div>
      ))}
    </>
  );
};

export default Card;