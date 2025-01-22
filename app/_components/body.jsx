

// import React from 'react'
// import Ads from './ads'
// import WhyChooseUs from './choosing'
// import Favorites from './favorites'
// import Updates from './updates'
// import Testimonials from './testimonials'
// import Accomodation from './accomodation'
// import USMap from './map'






// const Body = () => {
//   return (
// 	 <div>
// 		<Ads />
// 		<WhyChooseUs />
// 		<Favorites />
// 		<Updates />
// 		<Accomodation />
// 		<Testimonials />
// 		<USMap />
// 	 </div>
//   )
// }

// export default Body




"use client"; // Ensure client-side rendering for this component

import React from 'react';
import Ads from './ads';
import WhyChooseUs from './choosing';
import Favorites from './favorites';
import Updates from './updates';
import Testimonials from './testimonials';
import Accomodation from './accomodation';


const Body = () => {
  return (
    <div>
      <Ads />
      <WhyChooseUs />
      <Favorites />
      <Updates />
      <Accomodation />
      <Testimonials />
      
    </div>
  );
};

export default Body;
