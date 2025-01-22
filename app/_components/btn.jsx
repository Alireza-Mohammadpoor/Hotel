

import React from 'react';
import styles from '@/styles/accommodation.module.css'


const Button = (props) => {
	return (
	  <button 
		 style={{
			backgroundColor: "hsl(221, 62%, 41%)", 
			color: "white", 
			fontFamily: "Pangolin", 
			borderRadius: `${props.borderRadius}px`, // Convert the prop to a pixel value
			fontSize: `${props.fontSize}rem`,
			fontWeight: "400",
			padding: "5px 10px", // Padding inside the button
			border: "none", // Ensure no border disrupts alignment
			outline: "none",
			cursor: "pointer", // Make it more interactive
		 }}
	  >
		 {props.value}
	  </button>
	);
 }
 export default Button;