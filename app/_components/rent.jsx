





// import React from 'react';
// import Rating from '@mui/material/Rating';
// import Button from './btn';

// const CarRent = ({ car }) => {
//   return (
//     <div
//       style={{
//         padding: '10px',
//         fontFamily: 'Poppins, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Arial, sans-serif',
//         fontWeight: '600',
//         fontSize: '0.9rem',
//         color: 'black',
//         backgroundColor: 'whitesmoke',
//         borderRadius: '8px',
//         overflow: 'hidden',
//         boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
//         width: '350px',
//       }}
//     >
//       <div
//         style={{
//           height: '160px',
//           borderRadius: '8px',
//           overflow: 'hidden',
//         }}
//       >
//         <img
//           src={car.image}
//           alt={car.name}
//           style={{
//             width: '390px',
//             height: '100%',
//             objectFit: 'cover',
//             background: 'transparent',
//           }}
//         />
//       </div>

//       <div style={{ marginTop: '10px' }}>
//         <h2 style={{ fontSize: '0.99rem', fontWeight: '600', margin: '5px 0' }}>
//           {car.name}{' '}
//           <b
//             style={{
//               fontWeight: '400',
//               color: 'hsl(0, 0%, 70%)',
//               fontSize: '0.74rem',
//             }}
//           >
//             or similar | Automatic
//           </b>
//         </h2>

//         <div>
//           <h4 style={{ fontSize: '0.7rem', color: 'rgb(52, 47, 65)', fontWeight: '700' }}>
//             <b style={{ fontWeight: '700' }}>Price per Day:</b> (${car.pricePerDay.toFixed(2)})
//           </h4>
//           <h6 style={{ fontSize: '0.7rem', color: 'rgb(52, 47, 65)', fontWeight: '700' }}>
//             ({car.city})
//           </h6>
//         </div>

//         {/* Stars Rating Section */}
//         <div style={{ marginTop: '5px', display: 'flex', alignItems: 'center', gap: '5px' }}>
//           {/* Format stars as a number with 1 decimal place */}
//           <span style={{ fontSize: '0.72rem' }}>{car.stars.toFixed(1)}</span>
//           <Rating value={car.stars} precision={0.5} readOnly sx={{ fontSize: '0.88rem', color: 'gold' }} />
//         </div>

//         <div style={{ display: 'flex', gap: '10px', margin: '10px 0', fontFamily: 'Outfit' }}>
//           <div
//             style={{
//               display: 'flex',
//               gap: '3px',
//               border: '2px solid hsl(221, 62%, 41%)',
//               width: 'auto',
//               padding: '2px',
//               borderRadius: '5px',
//             }}
//           >
//             <h4 style={{ fontWeight: '400', fontSize: '0.85rem' }}>{car.doors}</h4>
//             <img
//               src="/car-door.png"
//               alt="Doors"
//               title="Doors"
//               style={{
//                 width: '12px',
//                 height: '12px',
//                 marginTop: '4px',
//               }}
//             />
//           </div>
//           <div
//             style={{
//               display: 'flex',
//               gap: '3px',
//               border: '2px solid hsl(221, 62%, 41%)',
//               width: 'auto',
//               padding: '2px',
//               borderRadius: '5px',
//             }}
//           >
//             <h4 style={{ fontWeight: '400', fontSize: '0.85rem' }}>{car.seats}</h4>
//             <img
//               src="/seat.png"
//               alt="Seats"
//               title="Seats"
//               style={{
//                 width: '11px',
//                 height: '13px',
//                 marginTop: '3px',
//               }}
//             />
//           </div>
//           <p
//             style={{
//               display: 'flex',
//               gap: '5px',
//               border: '2px solid hsl(221, 62%, 41%)',
//               width: 'auto',
//               padding: '2px',
//               borderRadius: '5px',
//               fontWeight: '500',
//               fontSize: '0.68rem',
//               textAlign: 'center',
//               alignItems: 'center',
//               justifyContent: 'center',
//             }}
//           >
//             {car.type}
//           </p>
//         </div>

//         <div style={{ marginTop: '10px' }}>
//           {car.fuelPolicy && (
//             <div
//               style={{
//                 display: 'flex',
//                 gap: '7px',
//                 fontSize: '0.8rem',
//                 alignItems: 'center',
//                 color: 'rgb(52, 47, 65)',
//               }}
//             >
//               <b style={{ color: 'green' }}>✔</b>
//               <span>Fuel Policy: Like For Like</span>
//               <img
//                 src="/gas-station.png"
//                 alt="Fuel Policy"
//                 style={{
//                   width: '15px',
//                   height: '17px',
//                 }}
//               />
//             </div>
//           )}
//           {car.unlimitedMileage && (
//             <div
//               style={{
//                 display: 'flex',
//                 gap: '7px',
//                 fontSize: '0.8rem',
//                 alignItems: 'center',
//                 color: 'rgb(52, 47, 65)',
//               }}
//             >
//               <b style={{ color: 'green' }}>✔</b>
//               <span>Unlimited Mileage</span>
//               <img
//                 src="/speedometer.png"
//                 alt="Unlimited Mileage"
//                 style={{
//                   width: '14px',
//                   height: '15px',
//                 }}
//               />
//             </div>
//           )}
//         </div>

//         <div style={{ textAlign: 'center', marginTop: '10px' }}>
//           <Button value="View More" borderRadius="8" fontSize="0.8" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CarRent;






import React from 'react';
import Rating from '@mui/material/Rating';
import Button from './btn';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CarRent = ({ car }) => {
  return (
    <div
      style={{
        padding: '1px',
        fontFamily: 'Poppins, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Arial, sans-serif',
        fontWeight: '600',
        fontSize: '0.9rem',
        color: 'black',
        backgroundColor: 'whitesmoke',
        borderRadius: '8px',
        overflow: 'hidden',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        width: '350px',
      }}
    >
      <div
        style={{
          height: '160px',
          borderRadius: '8px',
          overflow: 'hidden',
        }}
      >
        <img
          src={car.image}
          alt={car.name}
          style={{
            width: '390px',
            height: '100%',
            objectFit: 'cover',
            background: 'transparent',
          }}
        />
      </div>

      <div style={{ marginTop: '10px', padding : "10px" }}>
        <h2 style={{ fontSize: '0.99rem', fontWeight: '600', margin: '5px 0' }}>
          {car.name}{' '}
          <b
            style={{
              fontWeight: '400',
              color: 'hsl(0, 0%, 70%)',
              fontSize: '0.74rem',
            }}
          >
            or similar | Automatic
          </b>
        </h2>

        {/* Highlight City */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginTop: '5px' }}>
		  	<FontAwesomeIcon icon={faLocationDot} />
          <h6
            style={{
              fontSize: '0.75rem',
              color: 'hsl(221, 62%, 41%)',
              fontWeight: '500',
              padding: '4px',
              borderRadius: '10px',
              background: 'linear-gradient(140deg, #1b5bfd, #6a0dad)',
            //   background: 'linear-gradient(90deg, rgba(0,176,255,1) 0%, rgba(0,117,255,1) 100%)',
              color: 'white',
              boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.15)',
              display: 'inline-block',
            //   transition: 'transform 0.2s',
              cursor: 'pointer',
				//   opacity : "0.7"
            }}

          >
            {car.city}
          </h6>
        </div>

        {/* Stars Rating Section */}
        <div style={{ marginTop: '5px', display: 'flex', alignItems: 'center', gap: '5px' }}>
          <span style={{ fontSize: '0.72rem' }}>{car.stars.toFixed(1)}</span>
          <Rating value={car.stars} precision={0.5} readOnly sx={{ fontSize: '0.88rem', color: 'gold' }} />
        </div>

        <div style={{ display: 'flex', gap: '10px', margin: '10px 0', fontFamily: 'Outfit' }}>
          <div
            style={{
              display: 'flex',
              gap: '3px',
              border: '1px solid hsl(0, 0%, 70%)',
              width: 'auto',
              padding: '2px',
              borderRadius: '5px',
            }}
          >
            <h4 style={{ fontWeight: '400', fontSize: '0.85rem' }}>{car.doors}</h4>
            <img
              src="/car-door.png"
              alt="Doors"
              title="Doors"
              style={{
                width: '12px',
                height: '12px',
                marginTop: '4px',
              }}
            />
          </div>
          <div
            style={{
              display: 'flex',
              gap: '3px',
              border: '1px solid hsl(0, 0%, 70%)',
              width: 'auto',
              padding: '2px',
              borderRadius: '5px',
            }}
          >
            <h4 style={{ fontWeight: '400', fontSize: '0.85rem' }}>{car.seats}</h4>
            <img
              src="/seat.png"
              alt="Seats"
              title="Seats"
              style={{
                width: '11px',
                height: '13px',
                marginTop: '3px',
              }}
            />
          </div>
          <p
            style={{
              display: 'flex',
              gap: '5px',
              border: '1px solid hsl(0, 0%, 70%)',
              width: 'auto',
              padding: '2px',
              borderRadius: '5px',
              fontWeight: '500',
              fontSize: '0.68rem',
              textAlign: 'center',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {car.type}
          </p>
        </div>

        <div style={{ marginTop: '10px' }}>
          {car.fuelPolicy && (
            <div
              style={{
                display: 'flex',
                gap: '7px',
                fontSize: '0.8rem',
                alignItems: 'center',
                color: 'rgb(52, 47, 65)',
              }}
            >
              <b style={{ color: 'green' }}>✔</b>
              <span>Fuel Policy: Like For Like</span>
              <img
                src="/gas-station.png"
                alt="Fuel Policy"
                style={{
                  width: '15px',
                  height: '17px',
                }}
              />
            </div>
          )}
          {car.unlimitedMileage && (
            <div
              style={{
                display: 'flex',
                gap: '7px',
                fontSize: '0.8rem',
                alignItems: 'center',
                color: 'rgb(52, 47, 65)',
              }}
            >
              <b style={{ color: 'green' }}>✔</b>
              <span>Unlimited Mileage</span>
              <img
                src="/speedometer.png"
                alt="Unlimited Mileage"
                style={{
                  width: '14px',
                  height: '15px',
                }}
              />
            </div>
          )}
        </div>

		  <pre style={{color : "rgb(52, 47, 65)"}}><b style={{ color: 'green' }}>✔</b> {car.pricePerDay}$ | daily</pre>


			<div
			style={{
				display: 'flex',
				justifyContent: 'flex-end',
				alignItems: 'flex-end',
				height: '100%',
				position: 'relative',
				padding: '10px',
			}}
			>
			<button
				style={{
					background: 'linear-gradient(140deg, #1b5bfd, #6a0dad)',
					fontSize: '0.75rem',
					fontWeight: '600',
					fontFamily: 'Lora',
					color: 'white',
					padding: '5px',
					borderRadius: '6px',
				}}
			>
				View More
			</button>
			</div>



      </div>
		<style>
		@import url('https://fonts.googleapis.com/css2?family=Arvo:ital,wght@0,400;0,700;1,400;1,700&family=Edu+AU+VIC+WA+NT+Hand:wght@400..700&family=Edu+AU+VIC+WA+NT+Pre:wght@400..700&family=Exo+2:ital,wght@0,100..900;1,100..900&family=Lora:ital,wght@0,400..700;1,400..700&family=Outfit:wght@100..900&family=Pangolin&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Playwrite+GB+S:ital,wght@0,100..400;1,100..400&family=Vesper+Libre:wght@400;500;700;900&display=swap');
		</style>
    </div>
  );
};

export default CarRent;
