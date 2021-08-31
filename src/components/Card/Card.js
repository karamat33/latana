import React from "react";
import "./Card.css";
import Button from "../Button/Button";

const Card = ({...props}) => {
  
  return (
    <div className="slide-content">
		<div className="slide-img"><img src={`${process.env.PUBLIC_URL}/assets/images/${props.data.img}`}  /></div>
		<div className="slide-title">{props.data.title}</div>
		<div className="slide-details">
		
		<div>{props.data.label1}</div>
		<div>{props.data.label2}</div>
		<div>{props.data.label3}</div>
		
		</div>
		
		<div className="button-container">
		<Button label="Learn More" href="https://latana.com" />
		</div>
		</div>
  );
};

export default Card;
