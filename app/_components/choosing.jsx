// 'use client'

// import React from 'react'
// import Chose from './chose'



// const WhyChooseUs = () => {
//   return (
// 	 <div style={{marginLeft : "90px", marginTop : "90px"}}>
		// <h1 style={{marginBottom : "35px", fontFamily : "Poppins, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Arial, sans-serif", fontWeight : "700", fontSize : "1.2rem"}} className="mainh1" >Why Choose  <b style={{ fontFamily: '"Edu Australia VIC WA NT Hand", cursive' , fontSize : "1.4rem", fontWeight : "800"}}>
		// 	Alireza Vacation
		// </b>
		// </h1>


// 		<div style={{ display : "flex", gap : "55px"}}>
// 			<Chose 
// 			ImageSrc = '/images/istockphoto-1276634862-612x612.jpg' 
// 			header = 'Quality Of Work'
// 			paragraph = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam blanditiis autem incidunt temporibus facilis quos fugit, amet nulla quis ipsam vel, sapiente aut omnis id sint nisi iure explicabo deleniti.' />
// 			<Chose 
// 			ImageSrc = '/images/educational-guidance.jpg' 
// 			header = 'Our Experts'
// 			paragraph = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam blanditiis autem incidunt temporibus facilis quos fugit, amet nulla quis ipsam vel, sapiente aut omnis id sint nisi iure explicabo deleniti.' />
// 			<Chose 
// 			ImageSrc = '/images/no-peace-of-mind-16x9-1.webp' 
// 			header = 'No Peace Of Mind'
// 			paragraph = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam blanditiis autem incidunt temporibus facilis quos fugit, amet nulla quis ipsam vel, sapiente aut omnis id sint nisi iure explicabo deleniti.' />
			
// 		</div>

		// <style jsx>{`
      //   .mainh1 {
      //     font-size: 3.9rem;
      //     font-weight: 800;
      //     font-family: 'Outfit', sans-serif;
      //     background: linear-gradient(to right, hsl(216, 72%, 47%), whitesmoke);
      //     -webkit-background-clip: text;
      //     -webkit-text-fill-color: transparent;
      //    //  text-align: center;
      //   }
      // `}</style>

// 	 </div>
//   )
// }

// export default WhyChooseUs






'use client';

import React from 'react';
import Chose from './chose';
import styles from '@/styles/choosing.module.css';

const WhyChooseUs = () => {
  return (
    <div className={styles.whyChooseContainer}>
		<h1 style={{marginBottom : "35px", fontFamily : "Poppins, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Arial, sans-serif", fontWeight : "700", fontSize : "1.2rem"}} className="mainh1" >Why Choose{' '}<b style={{ fontFamily: '"Edu Australia VIC WA NT Hand", cursive' , fontSize : "1.4rem", fontWeight : "800"}}>
			Alireza Vacation
		</b>
		</h1>

      <div className={styles.chooseItems}>
        <Chose
          ImageSrc="/images/istockphoto-1276634862-612x612.jpg"
          header="Quality Of Work"
          paragraph="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam blanditiis autem incidunt temporibus facilis quos fugit, amet nulla quis ipsam vel, sapiente aut omnis id sint nisi iure explicabo deleniti."
        />
        <Chose
          ImageSrc="/images/educational-guidance.jpg"
          header="Our Experts"
          paragraph="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam blanditiis autem incidunt temporibus facilis quos fugit, amet nulla quis ipsam vel, sapiente aut omnis id sint nisi iure explicabo deleniti."
        />
        <Chose
          ImageSrc="/images/no-peace-of-mind-16x9-1.webp"
          header="No Peace Of Mind"
          paragraph="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam blanditiis autem incidunt temporibus facilis quos fugit, amet nulla quis ipsam vel, sapiente aut omnis id sint nisi iure explicabo deleniti."
        />
      </div>

		<style jsx>{`
        .mainh1 {
          font-size: 3.9rem;
          font-weight: 800;
          font-family: 'Outfit', sans-serif;
          background: linear-gradient(to right, hsl(216, 72%, 47%), whitesmoke);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
         //  text-align: center;
        }
      `}</style>
    </div>
  );
};

export default WhyChooseUs;
