// 'use client'


// import React, { useEffect, useState } from 'react'
// import CarRent from './rent';

// const Rents = () => {
// 	const [cars, setCars] = useState([]);
 
// 	useEffect(() => {
// 	  // Simulating an API call
// 	  const fetchCars = async () => {
// 		 try {
// 			const response = await fetch('/api/cars'); // Replace with your actual API endpoint
// 			const data = await response.json();
// 			setCars(data.cars);
// 		 } catch (error) {
// 			console.error('Error fetching car data:', error);
// 		 }
// 	  };
 
// 	  fetchCars();
// 	}, []);
 
// 	return (
// 	  <div>
// 		 <h1>Available Cars for Rent</h1>
// 		 <div style={{ display: 'flex', flexWrap: 'wrap', gap: '35px', alignItems : "center", justifyContent : "center", flexDirection : "column" }}>
// 			{cars.map((car, index) => (
// 			  <CarRent key={index} car={car} />
// 			))}
// 		 </div>
// 	  </div>
// 	);
//  };
 
//  export default Rents;
 







'use client';

import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import CarRent from './rent';

const Rents = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    // Simulating an API call
    const fetchCars = async () => {
      try {
        const response = await fetch('/api/cars'); // Replace with your actual API endpoint
        const data = await response.json();
        setCars(data.cars);
      } catch (error) {
        console.error('Error fetching car data:', error);
      }
    };

    fetchCars();
  }, []);

  if (!cars.length) return <div>Loading cars...</div>;

  return (
    <div>

      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3000 }}
        loop={true}
        spaceBetween={20}
        slidesPerView={1}
      //   style={{ maxWidth: '600px', padding: '20px' }}
      >
        {cars.map((car, index) => (
          <SwiperSlide key={index}>
            <CarRent car={car} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Rents;
