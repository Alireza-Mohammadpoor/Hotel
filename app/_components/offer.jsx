// import React from 'react';
// import Rating from '@mui/material/Rating'; // Ensure Rating is imported
// import { faStar } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// const Offer = ({ image, place, country, features, stars, capacity, price, off , participants}) => {
//   return (
//     <div style={{backgroundColor : "inherit", boxShadow : "0 2px 4px hsl(0, 0%, 50%)", width : "250px", borderRadius : "7px", height : "310px", border : "1.5px solid hsl(0, 0%, 50%)",fontFamily: "Poppins, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Arial, sans-serif"}} >
//       <img src={image} alt={place} style={{ width: "100%", height: "45%", borderRadius: "5px" }} />
// 		<div style={{ marginLeft : "5px"}}>
// 			<h6 style={{fontWeight : "600", fontSize : "0.7rem", color : "hsl(0, 0%, 70%)", marginTop : "5px"}}>{country}</h6>
// 			<h1 style={{fontWeight : "600", fontSize : "0.9rem"}}>{place}</h1>
// 			<div style={{display : "flex"}}>

// 				{features.map((f) => 
// 				(
// 					<div >
// 						<p style={{fontSize : "0.65rem", fontWeight : "400", backgroundColor : "hsl(0, 0%, 36%)", margin : "3px 3px", width : "auto",padding : "2px 2px", borderRadius : "5px"}}>{f}</p>
// 					</div>
						
// 				)
// 				)}
// 			</div>
// 			<div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
// 			{/* <Rating name="half-rating-read" defaultValue={1} precision={0.5} readOnly /> */}
// 			<div style={{display : "flex", gap: "3px", color : "#f09b0a"}}>
// 				<FontAwesomeIcon icon={faStar} style={{fontSize : "0.8rem", marginTop : " 3px"}} />
// 				<span style={{fontSize : "0.9rem", fontWeight : "600", fontFamily : "Arvo"}}>{stars}</span>
// 			</div>
// 			<p style={{ fontWeight: "500", color: "hsl(0, 0%, 66%)", fontSize: "0.8rem" }}>
// 				({Number(participants).toLocaleString()})
// 			</p>

// 			<p>•</p>
// 			<p style={{fontWeight : "600", fontSize : "0.8rem"}}>{capacity} +booked</p>
// 			</div>
// 			<h1 style={{fontWeight : "600", fontSize : "0.85rem"}}>US$ {price}</h1>
// 			{/* Conditionally render "off" if it exists */}
// 			{off !== "do not have off" && (
// 			<p style={{ color: "#f44622", fontWeight: "500", fontSize : "0.75rem" }}>{off} off</p>
// 			)}
// 		</div>
//     </div>
//   );
// };

// export default Offer;












import React from 'react';
import Rating from '@mui/material/Rating'; // Ensure Rating is imported
import { faHeadset, faHotel, faMartiniGlassCitrus, faPlaneDeparture, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Offer = ({ image, place, country, features, stars, capacity, price, off, participants }) => {
  return (
    <div
      style={{
        backgroundColor: "inherit",
        boxShadow: "0 2px 4px hsl(0, 0%, 50%)",
        width: "250px",
        borderRadius: "7px",
        height: "310px",
        border: "1.5px solid hsl(0, 0%, 50%)",
        fontFamily: "Poppins, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Arial, sans-serif",
        display: "flex",
        flexDirection: "column", // Stack elements vertically
        justifyContent: "space-between", // Ensure bottom section is at the bottom
        padding: "1px",
      }}
    >
      <img src={image} alt={place} style={{ width: "100%", height: "45%", borderRadius: "5px" }} />
      <div style={{ marginLeft: "5px", flex: "1" }}>
        <h6 style={{ fontWeight: "600", fontSize: "0.7rem", color: "hsl(0, 0%, 70%)", marginTop: "5px" }}>
          {country}
        </h6>
        <h1 style={{ fontWeight: "600", fontSize: "0.8rem" }}>{place}</h1>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {features.map((f) => (
            <div key={f}>
              <p
                style={{
                  fontSize: "0.65rem",
                  fontWeight: "400",
                  backgroundColor: "hsl(0, 0%, 36%)",
                  margin: "3px 3px",
                  width: "auto",
                  padding: "2px 2px",
                  borderRadius: "5px",
                }}
              >
                {f}
              </p>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
          <div style={{ display: "flex", gap: "2px", color: "#f09b0a" }}>
            <FontAwesomeIcon icon={faStar} style={{ fontSize: "0.6rem", marginTop: "3px" }} />
            <span style={{ fontSize: "0.7rem", fontWeight: "600", fontFamily: "Arvo" }}>{stars}</span>
          </div>
          <p
            style={{
              fontWeight: "500",
              color: "hsl(0, 0%, 66%)",
              fontSize: "0.8rem",
            }}
          >
            ({Number(participants).toLocaleString()})
          </p>
          <p>•</p>
          <p style={{ fontWeight: "500", fontSize: "0.7rem" }}>{capacity} +booked</p>
        </div>
			 <div style={{display : "flex", gap : "8px", color : "white", fontSize : "0.75rem", marginTop : "8px"}}>
			<FontAwesomeIcon icon={faPlaneDeparture} />
			<FontAwesomeIcon icon={faHotel} />
			<FontAwesomeIcon icon={faMartiniGlassCitrus} />
			<FontAwesomeIcon icon={faHeadset} />
			</div>
      </div>

      {/* Bottom Section */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "10px",
			 margin : "5px 10px"
        }}
      >
        <h1 style={{ fontWeight: "600", fontSize: "0.8rem" }}>US {price}$</h1>

        {/* Conditionally render "off" if it exists */}
        {off !== "do not have off" && (
          <p style={{ color: "#f44622", fontWeight: "600", fontSize: "0.85rem", textAlign: "right" }}>
            {off} off
          </p>
        )}
      </div>
    </div>
  );
};

export default Offer;
