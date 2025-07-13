


// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {
//   faBed,
//   faUtensils,
//   faPersonSwimming,
//   faBath,
//   faWifi,
//   faSquareParking,
//   faSun,
//   faPersonSkiing,
//   faPersonHiking,
//   faDumbbell,
//   faStar,
// } from '@fortawesome/free-solid-svg-icons';
// import styles from '@/styles/hotel.module.css';

// // Icon mapping
// const iconMapping = {
//   'fa-bed': faBed,
//   'fa-utensils': faUtensils,
//   'fa-swimming-pool': faPersonSwimming,
//   'fa-spa': faBath,
//   'fa-wifi': faWifi,
//   'fa-parking': faSquareParking,
//   'fa-sun': faSun,
//   'fa-skiing': faPersonSkiing,
//   'fa-hiking': faPersonHiking,
//   'fa-gym': faDumbbell,
// };

// const IconsDisplay = ({ hotels }) => {
//   return (
//     <div className={styles.iconContainer}>
//       {hotels.map((hotel, hotelIndex) => (
//         <div key={hotelIndex} className={styles.hotelWrapper}>
//           {/* Top Rated Label */}
//           {hotel.topRated && <span className={styles.topRatedLabel}>Top Rated</span>}

//           {/* Hotel Image */}
//           <img src={hotel.img} alt={hotel.name} className={styles.img} />

//           {/* Hotel Name */}
//           <h3 className={styles.hotelName}>{hotel.name}</h3>

//           {/* Hotel Location */}
//           <p className={styles.hotelLocation}>
//             {hotel.city}, {hotel.country}
//           </p>

//           {/* Hotel Stars */}
//           <div className={styles.hotelStars}>
//             {Array.from({ length: hotel.stars }, (_, i) => (
//               <FontAwesomeIcon key={i} icon={faStar} className={styles.star} />
//             ))}
//           </div>

//           {/* Hotel Description */}
//           <p className={styles.hotelDescription}>{hotel.description}</p>

//           {/* Hotel Price */}
//           <p className={styles.hotelPrice}>
//             <strong>${hotel.pricePerNight.toFixed(2)}</strong> per night
//           </p>

//           {/* Reviews and Rating */}
//           <p className={styles.hotelReviews}>
//             {hotel.reviews} reviews
//           </p>

//           {/* Accommodations */}
//           <div className={styles.accommodationWrapper}>
//             {hotel.accommodation.map((item, index) => (
//               <div key={index} className={styles.iconWrapper}>
//                 {iconMapping[item.icon] ? (
//                   <FontAwesomeIcon
//                     icon={iconMapping[item.icon]}
//                     title={item.description}
//                     className={styles.icon}
//                   />
//                 ) : (
//                   <span className={styles.iconFallback} title="Icon not found">
//                     ?
//                   </span>
//                 )}
//                 <span className={styles.iconDescription}>{item.description}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default IconsDisplay;









// import React from 'react';
// import Rating from '@mui/material/Rating';
// import {
//   faBed,
//   faUtensils,
//   faPersonSwimming,
//   faBath,
//   faWifi,
//   faSquareParking,
//   faSun,
//   faPersonSkiing,
//   faPersonHiking,
//   faDumbbell,
//   faLocationDot,
// } from '@fortawesome/free-solid-svg-icons';
// import styles from '@/styles/hotel.module.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// // Icon mapping
// const iconMapping = {
//   'fa-bed': faBed,
//   'fa-utensils': faUtensils,
//   'fa-swimming-pool': faPersonSwimming,
//   'fa-spa': faBath,
//   'fa-wifi': faWifi,
//   'fa-parking': faSquareParking,
//   'fa-sun': faSun,
//   'fa-skiing': faPersonSkiing,
//   'fa-hiking': faPersonHiking,
//   'fa-gym': faDumbbell,
// };

// const IconsDisplay = ({ hotels }) => {
//   return (
//     <div className={styles.iconContainer}>
//       {hotels.map((hotel, hotelIndex) => (
//         <div key={hotelIndex} className={styles.hotelWrapper}>
//           {/* Top Rated Label */}
//           {hotel.topRated && <span className={styles.topRatedLabel}>Top Rated</span>}

//           {/* Hotel Image */}
//           <img src={hotel.img} alt={hotel.name} className={styles.img} />

//           {/* Hotel Name */}
//           <h3 className={styles.hotelName}>{hotel.name}</h3>

//           {/* Hotel Location */}
// 			 <div style={{display : "flex", gap : "4px", textAlign : "center", alignItems : "center", justifyContent :"center"}}>
// 			 	<FontAwesomeIcon icon={faLocationDot} style={{fontSize : "0.8rem"}} />
// 				<p className={styles.hotelLocation}>
// 					{hotel.city}, {hotel.country}
// 				</p>
// 			 </div>

//           {/* Hotel Stars using MUI Rating */}
// 			 <div 
// 			 style={{display : "flex", textAlign : "center", alignItems : "center", justifyContent : "center"
// 				, flexDirection : "column"
// 			 }}>

// 				<div className={styles.hotelStars}>
// 					<Rating value={hotel.stars} precision={0.5} readOnly sx={{fontSize : "0.86rem"}}/>
// 				</div>
// 				<p className={styles.hotelReviews}>({hotel.reviews} reviews)</p>
// 			 </div>

//           {/* Hotel Description */}
//           <p className={styles.hotelDescription}>{hotel.description}</p>

//           {/* Hotel Price */}
//           <p 
// 			 style={{
// 				fontSize: '0.68rem',
// 				color: 'hsl(221, 62%, 41%)',
// 				fontWeight: '300',
// 				padding: '6px',
// 				borderRadius: '10px',
// 				background: 'linear-gradient(140deg, #1b5bfd, #6a0dad)',
// 			 //   background: 'linear-gradient(90deg, rgba(0,176,255,1) 0%, rgba(0,117,255,1) 100%)',
// 				color: 'white',
// 				boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.15)',
// 				display: 'inline-block',
// 			 //   transition: 'transform 0.2s',
// 				cursor: 'pointer',
// 			 //   opacity : "0.7"
// 			 }}>
//           {/* <p className={styles.hotelPrice}> */}
//             <strong >{hotel.pricePerNight.toFixed(2)}$</strong> 
//           </p>

//           {/* Reviews and Rating */}
          

//           {/* Accommodations */}
//           <div className={styles.accommodationWrapper}>
//             {hotel.accommodation.map((item, index) => (
//               <div key={index} className={styles.iconWrapper}>
//                 {iconMapping[item.icon] ? (
//                   <FontAwesomeIcon
//                     icon={iconMapping[item.icon]}
//                     title={item.description}
//                     className={styles.icon}
//                   />
//                 ) : (
//                   <span className={styles.iconFallback} title="Icon not found">
//                     ?
//                   </span>
//                 )}
//                 <span className={styles.iconDescription}>{item.description}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default IconsDisplay;











import React from 'react';
import Rating from '@mui/material/Rating';
import {
  faBed,
  faUtensils,
  faPersonSwimming,
  faBath,
  faWifi,
  faSquareParking,
  faSun,
  faPersonSkiing,
  faPersonHiking,
  faDumbbell,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons';
import styles from '@/styles/hotel.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Icon mapping
const iconMapping = {
  'fa-bed': faBed,
  'fa-utensils': faUtensils,
  'fa-swimming-pool': faPersonSwimming,
  'fa-spa': faBath,
  'fa-wifi': faWifi,
  'fa-parking': faSquareParking,
  'fa-sun': faSun,
  'fa-skiing': faPersonSkiing,
  'fa-hiking': faPersonHiking,
  'fa-gym': faDumbbell,
};

const IconsDisplay = ({ hotels }) => {
  return (
    <div className={styles.iconContainer}>
      {hotels.map((hotel, hotelIndex) => (
        <div key={hotelIndex} className={styles.hotelWrapper}>
          {hotel.topRated && <span className={styles.topRatedLabel}>Top Rated</span>}
          <img src={hotel.img} alt={hotel.name} className={styles.img} />
          <h3 className={styles.hotelName}>{hotel.name}</h3>

          <div className={styles.locationRow}>
            <FontAwesomeIcon icon={faLocationDot} className={styles.locationIcon} />
            <p className={styles.hotelLocation}>
              {hotel.city}, {hotel.country}
            </p>
          </div>

          <div className={styles.ratingBlock}>
            <div className={styles.hotelStars}>
              <Rating value={hotel.stars} precision={0.5} readOnly sx={{ fontSize: '0.86rem' }} />
            </div>
            <p className={styles.hotelReviews}>({hotel.reviews} reviews)</p>
          </div>

          <p className={styles.hotelDescription}>{hotel.description}</p>

          <p className={styles.hotelPrice}>
            <strong>{hotel.pricePerNight.toFixed(2)}$</strong>
          </p>

          <div className={styles.accommodationWrapper}>
            {hotel.accommodation.map((item, index) => (
              <div key={index} className={styles.iconWrapper}>
                {iconMapping[item.icon] ? (
                  <FontAwesomeIcon
                    icon={iconMapping[item.icon]}
                    title={item.description}
                    className={styles.icon}
                  />
                ) : (
                  <span className={styles.iconFallback} title="Icon not found">
                    ?
                  </span>
                )}
                <span className={styles.iconDescription}>{item.description}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default IconsDisplay;
