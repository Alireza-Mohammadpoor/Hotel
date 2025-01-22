'use client'


import React from 'react';
import Button from '../_components/btn';
import FormComponent from '../_components/form';
import Link from 'next/link';

const SignUp = () => {
  return (
    <div>
      <div
        style={{
          position: 'absolute',
          top: '90px',
          right: '30px',
          display: 'flex',
          alignItems: 'center',
          gap: '10px'
        }}
      >
        <h1 style={{ fontSize: '0.8rem', fontWeight: '600' }}>
          Already have an account?
        </h1>
		  <Link href='/login'>
		  		<h1 style={{color : 'hsl(221, 62%, 41%)', fontFamily : "arvo", fontWeight : "800", fontSize : "0.9rem"}}>Login</h1>
		  </Link>
        
      </div>


		<div style={{
			display: "flex", 
			gap: "80px", 
			justifyContent: "center", 
			alignItems: "center", 
			height: "100vh" // This ensures vertical centering within the viewport height
		}}>
			<FormComponent />

			<div>
				<h1 
						style={{
							display: "flex", 
							fontSize: "2.95rem", 
							fontFamily: "Poppins, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Arial, sans-serif", 
							width: "400px", 
							fontWeight: "800", 
							borderBottom: "1px solid white",
							textAlign: "center" // Optional for better text alignment
						}}
				>
						The Goal Of Life Is Living In Agreement With Nature
				</h1>
			</div>
		</div>

    </div>
  );
};

export default SignUp;





