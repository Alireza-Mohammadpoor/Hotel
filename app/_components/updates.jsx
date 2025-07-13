







// 'use client'

// import React from 'react';

// const Updates = () => {
//   return (
//     <div style={{ marginTop: "90px", marginLeft: "90px" }}  id="updates-section">
//       <h1
//         style={{
//           marginBottom: "35px",
//           fontFamily: "Poppins, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Arial, sans-serif",
//           fontWeight: "700",
//           fontSize: "1.2rem",
// 			//  textAlign : "center",
// 			//  alignItems : "center",
// 			//  justifyContent : "center"
//         }}
// 		  className="mainh1" 
//       >
//         Our Latest Updates
//       </h1>

//       <div style={{ display: "flex", gap: "40px" }}>
//         {/* Update Card 1 */}
//         <div style={{ position: "relative", width: "470px", height: "230px" }}>
//           <img
//             src="/img/610x305_10.jpg"
//             alt="img"
//             style={{ width: "100%", height: "100%", objectFit: "cover" }}
//           />
//           {/* Dark Overlay */}
//           <div
//             style={{
//               position: "absolute",
//               top: 0,
//               left: 0,
//               width: "100%",
//               height: "100%",
//               backgroundColor: "rgba(0, 0, 0, 0.4)" // Dark overlay
//             }}
//           ></div>
//           {/* Text */}
//           <h1
//             style={{
//               position: "absolute",
//               top: "10px",
//               left: "20px",
//               margin: 0,
//               color: "#fff",

//               width: "330px",
// 				  display:  "flex",
// 				  flexDirection : "column"
//             }}
//           >
//             <h1 style={{
// 					fontSize: "1.3rem",
// 					fontWeight: "600",
// 				}}>Best staycation deals </h1>
// 				<p style={{fontSize : "0.7rem", fontWeight:  "600"}}>Enjoy these cool staycation promotions in Singapore</p>
//           </h1>
//           {/* Button */}
//           <button
//             style={{
//               position: "absolute",
//               bottom: "10px",
//               right: "10px",
//               padding: "4px 8px",
//               fontSize: "0.8rem",
//               color: "#fff",
//               fontWeight: "600",
//               border: "none",
//               borderRadius: "4px",
//               cursor: "pointer",
//               border: "1px solid white"
//             }}
//           >
//             Learn More
//           </button>
//         </div>

//         {/* Update Card 2 */}
//         <div style={{ position: "relative", width: "470px", height: "230px" }}>
//           <img
//             src="/img/610x305_WhatsNewFor2025.jpg"
//             alt="img"
//             style={{ width: "100%", height: "100%", objectFit: "cover" }}
//           />
//           {/* Dark Overlay */}
//           <div
//             style={{
//               position: "absolute",
//               top: 0,
//               left: 0,
//               width: "100%",
//               height: "100%",
//               backgroundColor: "rgba(0, 0, 0, 0.4)" // Dark overlay
//             }}
//           ></div>
//           {/* Text */}
// 			 <h1
//             style={{
//               position: "absolute",
//               top: "10px",
//               left: "20px",
//               margin: 0,
//               color: "#fff",
//               width: "330px",
// 				  display:  "flex",
// 				  flexDirection : "column"
//             }}
//           >
//             <h1 style={{
// 					fontSize: "1.3rem",
// 					fontWeight: "600",
// 				}}>All Time Favourite Activities in Dubai </h1>
// 				<p style={{fontSize : "0.7rem", fontWeight:  "600"}}>Do not forget to check out these activities while you're here</p>
//           </h1>
//           {/* Button */}
//           <button
//             style={{
//               position: "absolute",
//               bottom: "10px",
//               right: "10px",
//               padding: "4px 8px",
//               fontSize: "0.8rem",
//               color: "#fff",
//               fontWeight: "600",
//               border: "none",
//               borderRadius: "4px",
//               cursor: "pointer",
//               border: "1px solid white"
//             }}
//           >
//             Learn More
//           </button>
//         </div>
//       </div>
// 		<style jsx>{`
//         .mainh1 {
//           font-size: 3.9rem;
//           font-weight: 800;
//           font-family: 'Outfit', sans-serif;
//           background: linear-gradient(to right, hsl(216, 72%, 47%), whitesmoke);
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//          //  text-align: center;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Updates;





'use client';

import React from 'react';
import styles from '@/styles/update.module.css'

const Updates = () => {
  return (
    <div className={styles['updatesection']} id="updatesection" style={{ marginTop : "90px"}}>
      <h1         
		   style={{
			marginBottom: "35px",
			fontFamily: "Poppins, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Arial, sans-serif",
			fontWeight: "700",
			fontSize: "1.2rem",
			marginLeft : "90px",
		  //  textAlign : "center",
		  //  alignItems : "center",
		  //  justifyContent : "center"
		 }} className="mainh1">Our Latest Updates</h1>

      <div className={styles['updatescontainer']}>
        {/* Update Card 1 */}
        <div className={styles['updatecard']}>
          <img src="/img/610x305_10.jpg" alt="img" />
          <div className={styles['updatecardoverlay']}></div>
          <div className={styles['updatecardtext']}>
            <h1>Best staycation deals</h1>
            <p>Enjoy these cool staycation promotions in Singapore</p>
          </div>
          <button className={styles['updatecardbutton']}>Learn More</button>
        </div>

        {/* Update Card 2 */}
        <div className={styles['updatecard']}>
          <img src="/img/610x305_WhatsNewFor2025.jpg" alt="img" />
          <div className={styles['updatecardoverlay']}></div>
          <div className={styles['updatecardtext']}>
            <h1>All Time Favourite Activities in Dubai</h1>
            <p>Do not forget to check out these activities while you are here</p>
          </div>
          <button className={styles['updatecardbutton']}>Learn More</button>
        </div>
      </div>
		<style jsx>{`
        .mainh1 {
          font-size: 22.4px;
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

export default Updates;
