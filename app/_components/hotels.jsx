




'use client';

import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay'; // Import Swiper autoplay styles
import { Autoplay } from 'swiper/modules';
import IconsDisplay from './hotel';

const Hotels = () => {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const response = await fetch('/api/hotels'); // Replace with actual API endpoint
        if (!response.ok) {
          throw new Error('Failed to fetch hotel data');
        }
        const data = await response.json();
        setHotels(data.hotels);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchHotels();
  }, []);

  if (loading) return <div>Loading hotels...</div>;
  if (error) return <div>Error: {error}</div>;

  return (


    <Swiper
      modules={[Autoplay]}
      autoplay={{ delay: 3000 }}
      loop={true}
      spaceBetween={1} // Set spaceBetween to 0 to remove gaps between slides
      slidesPerView={1}
      // style={{ width: '100%', maxWidth: '600px'}}
    >
      {hotels.map((hotel, index) => (
        <SwiperSlide key={index}>
          <div style={{
            // border: '1px solid #ccc',
            borderRadius: '8px',
            padding: '1px',
            textAlign: 'center',
            // background: 'white'
          }}>
            <IconsDisplay hotels={[hotel]} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>


  );
};

export default Hotels;








