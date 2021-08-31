import React from "react";
import "./Button.css";



const Button = ({ children,style, ...props }) => {
  
  return (
   
		<a  href={props.href}>
		<button className="button">
		{children || props.label}
		</button>
		</a>
		
  );
};

export default Button;
