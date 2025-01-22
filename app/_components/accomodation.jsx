"use client";

import { faCar, faGlobe, faHotel } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import Hotels from './hotels';
import Rents from './rents';
import styles from '@/styles/accommodation.module.css'



const Accommodation = () => {
  // State to track the active component
  const [activeComponent, setActiveComponent] = useState('hotel');

  // Function to handle the icon clicks
  const handleClick = (component) => {
    setActiveComponent(component);
  };

  return (
	  <div style={{marginTop :"90px", background: 'linear-gradient(160deg,  lightgray , hsl(195, 72%, 85%))'}} id='th'>
		<h1 className="mainh1" >Alireza Vacation </h1>
		<div style={{display : "flex", gap : "5px", textAlign : "center", alignItems : "center", justifyContent : "center", marginBottom : "30px"}}>
			<h1 style={{ color : "rgb(52, 47, 65)", fontFamily : "Pangolin", fontSize : "0.95rem", fontWeight : "900"}}>Experience the best with us</h1>
			<img src="/earth.png" alt="img" style={{ width : "17px", height : "17px"}}/>
		</div>

    <div style={{ display: 'flex', gap: '70px', alignItems: 'flex-start'}}>
		<div>
        <img 
          src="/elsewhereDriver.avif" 
          alt="Visual representation of transportation" 
          style={{ maxWidth: '700px', height: '770px', borderRadius: '8px' }} 
        />
      </div>
      {/* Icon and Component Section */}
      <div>
		<div>
			<h1 className="mainh1" style={{textAlign : "center", justifyContent : "center", alignItems : "center", width : "500px", fontSize : "37px"}}>Your dream itinerary, crafted with you</h1>
		</div>
		<div 
		style={{ color : "rgb(52, 47, 65)", fontFamily : "Pangolin", fontSize : "0.85rem", fontWeight : "900", width :"500px", textAlign : "center", alignItems : "center", justifyContent : "center", marginTop : "10px", marginBottom : "5px"}}>
			<h1>Renting a Car and Booking a Hotel: A Complete Travel Experience</h1>
			<p>When planning a trip, two of the most important aspects to consider are renting a car and booking a hotel. These services not only enhance the overall experience but also ensure convenience, flexibility, and comfort throughout your journey.</p>
		</div>

        <div style={{ display: 'flex', gap: '20px', margin : "20px 0" }}>
			<div style={{display : "flex", gap : "5px", cursor: 'pointer', 
			border: activeComponent === 'hotel' ? '2px solid hsl(221, 62%, 41%)' : 'none',
			padding: '5px',color : "black"}}
			onClick={() => handleClick('hotel')}>
			 <h1>Hotels</h1>
          <FontAwesomeIcon 
            icon={faHotel} 
             style={{marginTop : "4px", fontSize : "0.9rem"}}
             
          />
			</div>
			<div 
			style={{display : "flex", gap : "5px", cursor: 'pointer', 
			border: activeComponent === 'car' ? '2px solid hsl(221, 62%, 41%)' : 'none',
			padding: '5px',color : "black"}}
			onClick={() => handleClick('car')} >
			 <h1>Cars</h1>
          <FontAwesomeIcon 
            icon={faCar} 
            // onClick={() => handleClick('car')} 
				style={{marginTop : "4px", fontSize : "0.9rem"}}
           
          />
			</div>
        </div>

        {/* Dynamic Component Rendering */}
        <div style={{width : "350px", backgroundColor : "inherit"}}>
          {activeComponent === 'hotel' && <Hotels />}
          {activeComponent === 'car' && <Rents />}
        </div>
      </div>

      {/* Image Section */}

    </div>
	 <style jsx>{`
         .mainh1 {
            font-family: "Edu Australia VIC WA NT Hand", cursive;
            font-size: 48px;
            font-weight: bold;
            background: linear-gradient(140deg, #1b5bfd, #6a0dad); /* Gradient from blue to purple */
            -webkit-background-clip: text; /* Applies the gradient to the text */
            color: transparent; /* Hides the default text color, making the gradient visible */
            text-align: center;
        }
      `}</style>
	</div>
  );
};

export default Accommodation;

