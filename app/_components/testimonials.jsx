







// 'use client';


// import React, { useState, useEffect } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import { Navigation } from 'swiper/modules';

// export default function Testimonials() {
//   const [testimonials, setTestimonials] = useState([]);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const getTestimonials = async () => {
//     const endpoint = '/api/testimonials';
//     setLoading(true);

//     try {
//       const response = await fetch(endpoint);
//       if (!response.ok) throw new Error('Failed to fetch data');

//       const data = await response.json();
//       setTestimonials(data.Testimonials || []);
//     } catch (err) {
//       console.error(err);
//       setError('Error fetching data. Please try again later.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     getTestimonials();
//   }, []);

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error}</div>;

//   return (
// 	<div  id="tst-section"
// 		style={{        
// 		marginTop: '90px',
// 		fontFamily: 'Poppins, sans-serif'}}>

// 	   <h1 style={{
//         marginBottom: "15px",
//         fontFamily: "Poppins, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Arial, sans-serif",
//         fontWeight: "700",
//         fontSize: "1.2rem",
// 		  marginLeft : "90px"
//       }} 
// 		className="mainh1" >
//         Recent Customer Reviews 
//       </h1>
//     <div
//       style={{

//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         width: '100%',
//       }}
//     >
//       <Swiper
//         slidesPerView={3}
//         spaceBetween={20}
//         navigation
//         modules={[Navigation]}
//         className="mySwiper"
//         style={{
//           width: '100%',
//         }}
//       >
//         {testimonials.map((testimonial, index) => (
//           <SwiperSlide
//             key={index}
//             style={{
//               display: 'flex',
//               flexDirection: 'column',
//               padding: '20px',
//               boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
//               borderRadius: '10px',
// 				  textAlign : "center",
// 				  alignItems : "center",
// 				  justifyContent : "center"
//             }}
//           >
// 				<div style={{display : "flex", fontWeight : "900"}}>
// 					<div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', color: 'hsl(221, 62%, 41%)' }}>
// 					{Array.from({ length: testimonial.stars }).map((_, i) => (
// 						<span key={i} style={{ fontSize: '1.25rem', marginRight: '3px' }}>★</span>
// 						))}
// 					</div>
// 					<pre style={{marginTop : "2px", color : "hsl(0, 0%, 75%)"}}> {testimonial.stars}.0</pre>
// 				</div>
//             <p style={{ fontSize: '0.95rem', lineHeight: '1.5', width : "240px", fontWeight : "500", color : "hsl(0, 0%, 75%)" }}>{testimonial.description}</p>
// 				<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap : "45px" }}>
// 				<h3 style={{ fontSize: '1rem', fontWeight: '700', margin: '13px 0', color : "hsl(0, 0%, 75%)" }}>{testimonial.author}</h3>
// 				<p style={{ fontSize: '0.8rem', color: 'hsl(221, 62%, 41%)', marginBottom: '0px', fontWeight : "600" }}>{testimonial.date}</p>
// 				</div>

//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
// 	 <style jsx>{`
//         .mainh1 {
//            background: linear-gradient(to right, hsl(216, 72%, 47%), whitesmoke);
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//         }
//       `}</style>
// 	</div>
//   );
// }












'use client';

import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const getTestimonials = async () => {
    const endpoint = '/api/testimonials';
    setLoading(true);

    try {
      const response = await fetch(endpoint);
      if (!response.ok) throw new Error('Failed to fetch data');

      const data = await response.json();
      setTestimonials(data.Testimonials || []);
    } catch (err) {
      console.error(err);
      setError('Error fetching data. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getTestimonials();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div
      id="tst-section"
      style={{
        marginTop: '90px',
        fontFamily: 'Poppins, sans-serif',
      }}
    >
      <h1
        style={{
          marginBottom: '15px',
          fontFamily:
            'Poppins, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Arial, sans-serif',
          fontWeight: '700',
          fontSize: '1.2rem',
          marginLeft: '90px',
        }}
        className="mainh1"
      >
        Recent Customer Reviews
      </h1>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <Swiper
          slidesPerView={1} // Default for small screens
          spaceBetween={20}
          navigation
          modules={[Navigation]}
          breakpoints={{
            1024: {
              slidesPerView: 3, // 3 slides for desktop (width >= 1024px)
            },
          }}
          className="mySwiper"
          style={{
            width: '100%',
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide
              key={index}
              style={{
                display: 'flex',
                flexDirection: 'column',
                padding: '20px',
                boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
                borderRadius: '10px',
                textAlign: 'center',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <div style={{ display: 'flex', fontWeight: '900' }}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '10px',
                    color: 'hsl(221, 62%, 41%)',
                  }}
                >
                  {Array.from({ length: testimonial.stars }).map((_, i) => (
                    <span
                      key={i}
                      style={{ fontSize: '1.25rem', marginRight: '3px' }}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <pre style={{ marginTop: '2px', color: 'hsl(0, 0%, 75%)' }}>
                  {' '}
                  {testimonial.stars}.0
                </pre>
              </div>
              <p
                style={{
                  fontSize: '0.95rem',
                  lineHeight: '1.5',
                  width: '240px',
                  fontWeight: '500',
                  color: 'hsl(0, 0%, 75%)',
                }}
              >
                {testimonial.description}
              </p>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '45px',
                }}
              >
                <h3
                  style={{
                    fontSize: '1rem',
                    fontWeight: '700',
                    margin: '13px 0',
                    color: 'hsl(0, 0%, 75%)',
                  }}
                >
                  {testimonial.author}
                </h3>
                <p
                  style={{
                    fontSize: '0.8rem',
                    color: 'hsl(221, 62%, 41%)',
                    marginBottom: '0px',
                    fontWeight: '600',
                  }}
                >
                  {testimonial.date}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <style jsx>{`
        .mainh1 {
          background: linear-gradient(to right, hsl(216, 72%, 47%), whitesmoke);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>
    </div>
  );
}
