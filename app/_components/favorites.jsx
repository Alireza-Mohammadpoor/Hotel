// 'use client';

// import React, { useEffect, useState } from 'react';
// import Offer from './offer';
// import Button from './btn';

// const Favorites = () => {
//   const [places, setPlaces] = useState([]);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [visibleCount, setVisibleCount] = useState(4); // State to control how many places are visible

//   const getPlaces = async () => {
//     const Endpoint = '/api/places';
//     setLoading(true); // Set loading to true at the start

//     try {
//       const response = await fetch(Endpoint);
//       if (!response.ok) throw new Error('Failed to fetch data');

//       const data = await response.json();
//       const placeList = data.entertainmentPlaces || [];
//       if (Array.isArray(placeList)) {
//         setPlaces(placeList);
//       } else {
//         throw new Error('Received data is not an array');
//       }
//     } catch (err) {
//       console.error('Error fetching data:', err);
//       setError('Error fetching data. Please try again later.');
//     } finally {
//       setLoading(false); // Ensure loading is set to false at the end
//     }
//   };

//   const showAllPlaces = () => {
//     setVisibleCount(places.length); // Set visibleCount to display all places
//   };

//   useEffect(() => {
//     getPlaces();
//   }, []);

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error}</div>;

//   return (
//     <div style={{ marginTop: "90px", marginLeft: "90px" }}  id="offers-section">
// 		<h1
// 			style={{
// 				marginBottom: "35px",
// 				fontFamily: "Poppins, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Arial, sans-serif",
// 				fontWeight: "700",
// 				fontSize: "1.2rem",
// 				textAlign: "center", // Center the text horizontally
// 				display: "inline-block", // Needed for proper gradient styling
// 			}}
// 			className="mainh1"
// 			>
// 			Travelers' favorite choice
// 		</h1>

//       <div style={{
//         display: "grid",
//         gridTemplateColumns: "250px 250px 250px 250px",
//         gap: "16px"
//       }}>
//         {places.slice(0, visibleCount).map((place, index) => (
// 			<div key={index} >

// 				<Offer
					
					
// 					image={place.image}
// 					place={place.name}
// 					country={place.country}
// 					features={place.features}
// 					stars={place.stars}
// 					capacity={place.capacity}
// 					price={place.price}
// 					off={place.off} // Pass "off" property
// 					participants = {place.participants}
// 				/>
// 			</div>
//         ))}
//       </div>

//       {visibleCount < places.length && ( 
//         <div style={{marginLeft : "44%", marginTop: "30px" }} onClick={showAllPlaces}>

// 			 <Button value="Show all" borderRadius="5" fontSize="0.95" />
//         </div>
//       )}
// 		<style jsx>{`
//         .mainh1 {
//           font-size: 3.9rem;
//           font-weight: 800;
//           font-family: 'Outfit', sans-serif;
//           background: linear-gradient(to right, hsl(216, 72%, 47%), whitesmoke);
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//           text-align: center;
//         }
//       `}</style>

//     </div>


//   );
// };

// export default Favorites;









'use client';

import React, { useEffect, useState } from 'react';
import Offer from './offer';
import Button from './btn';
import styles from '@/styles/favorite.module.css';

const Favorites = () => {
  const [places, setPlaces] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [visibleCount, setVisibleCount] = useState(4);

  const getPlaces = async () => {
    const Endpoint = '/api/places';
    setLoading(true);

    try {
      const response = await fetch(Endpoint);
      if (!response.ok) throw new Error('Failed to fetch data');

      const data = await response.json();
      const placeList = data.entertainmentPlaces || [];
      if (Array.isArray(placeList)) {
        setPlaces(placeList);
      } else {
        throw new Error('Received data is not an array');
      }
    } catch (err) {
      console.error('Error fetching data:', err);
      setError('Error fetching data. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const showAllPlaces = () => {
    setVisibleCount(places.length);
  };

  useEffect(() => {
    getPlaces();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className={styles.container} id="offers-section">
	 	<div>

			<h1 className={styles.mainh1}>Travelers' favorite choice</h1>

			<div className={styles.gridContainer}>
			{places.slice(0, visibleCount).map((place, index) => (
				<div key={index}>
					<Offer
					image={place.image}
					place={place.name}
					country={place.country}
					features={place.features}
					stars={place.stars}
					capacity={place.capacity}
					price={place.price}
					off={place.off}
					participants={place.participants}
					/>
				</div>
			))}
			</div>
		</div>

      {visibleCount < places.length && (
        <div className={styles.showAllButton} onClick={showAllPlaces}>
          <Button value="Show all" borderRadius="5" fontSize="0.95" />
        </div>
      )}
    </div>
  );
};

export default Favorites;
