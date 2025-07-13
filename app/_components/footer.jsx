




// 'use client';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {
//   faFacebook,
//   faTwitter,
//   faInstagram,
//   faYoutube,
//   faPinterest,
//   faTelegram,
//   faWhatsapp,
// } from '@fortawesome/free-brands-svg-icons';
// import Accordion from '@mui/material/Accordion';
// import AccordionSummary from '@mui/material/AccordionSummary';
// import AccordionDetails from '@mui/material/AccordionDetails';
// import Typography from '@mui/material/Typography';
// import React from 'react';
// import styles from '@/styles/footer.module.css';

// const Footer = () => {
//   return (
//     <div style={{ margin: '30px 90px', fontFamily : " Poppins, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Arial, sans-serif" }} className={styles.container}>
//       <hr style={{marginBottom : "20px"}} />
//       <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//         {/* <div className={styles.icons}>
//           <h1 className={styles.mainh1}>Home</h1>
//           <h1 className={styles.mainh1}>Hotel Bookings</h1>
//           <h1 className={styles.mainh1}>Car Rentals</h1>
//           <h1 className={styles.mainh1}>Offers</h1>
//           <h1 className={styles.mainh1}>Testimonials</h1>
//         </div> */}

		//   <div className={styles.icons}>
		// 	<h1 className={styles.mainh1}>Home</h1>
		// 	<h1 className={styles.mainh1}>Hotel Bookings</h1>
		// 	<h1 className={styles.mainh1}>Car Rentals</h1>
		// 	<h1 className={styles.mainh1}>Offers</h1>
		// 	<h1 className={styles.mainh1}>Testimonials</h1>
		// 	</div>


// 		<div className={styles.hideinmobile}>

// 			<div style={{ display: 'flex', gap: '15px' }} >
// 				<FontAwesomeIcon icon={faFacebook} style={{ color: 'white', fontSize: '15px' }} />
// 				<FontAwesomeIcon icon={faTwitter} style={{ color: 'white', fontSize: '15px' }} />
// 				<FontAwesomeIcon icon={faInstagram} style={{ color: 'white', fontSize: '15px' }} />
// 				<FontAwesomeIcon icon={faYoutube} style={{ color: 'white', fontSize: '15px' }} />
// 				<FontAwesomeIcon icon={faPinterest} style={{ color: 'white', fontSize: '15px' }} />
// 				<FontAwesomeIcon icon={faTelegram} style={{ color: 'white', fontSize: '15px' }} />
// 				<FontAwesomeIcon icon={faWhatsapp} style={{ color: 'white', fontSize: '15px' }} />
// 			</div>

// 		</div>

//       </div>

//       <div
//         style={{
//           display: 'grid',
//           gridTemplateColumns: '200px 200px 200px 200px',
//           marginTop: '50px',
//           gap: '40px',
//           color: 'white',
//           fontFamily:
//             " Poppins, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Arial, sans-serif",
//         }}
// 		//   className={styles.hideinmobile}
//       >
//         {/* Footer Content with updated class names */}
//         <div className={styles.hideinmobile}>
//           <h1 className={styles.title}>About Us</h1>
//           <p className={styles.par}>About Organization</p>
//           <p className={styles.par}>Our Journeys</p>
//           <p className={styles.par}>Our Partners</p>
//         </div>
//         <div className={styles.hideinmobile}>
//           <h1 className={styles.title}>Quick Links</h1>
//           <p className={styles.par}>Introduction</p>
//           <p className={styles.par}>Organisation Team</p>
//           <p className={styles.par}>Press Enquiries</p>
//         </div>
//         <div className={styles.hideinmobile}>
//           <h1 className={styles.title}>Important Links</h1>
//           <p className={styles.par}>Privacy Policy</p>
//           <p className={styles.par}>Cookies Policy</p>
//           <p className={styles.par}>Terms & Conditions</p>
//         </div>
//         <div className={styles.hideinmobile}>
//           <h1 className={styles.title}>Contact Info</h1>
//           <p className={styles.par}>Nunc lobortis mattis aliquam faucibus</p>
//           <p className={styles.par}>purus in massa arcu odio ut sem nulla</p>
//           <p className={styles.par}>pharetra diam amet.</p>
//         </div>
//         <div className={styles.hideinmobile}>
//           <h1 className={styles.title}>Achievements</h1>
//           <p className={styles.par}>Massa sed elementum tempus egestas</p>
//           <p className={styles.par}>sed sed risus at ultrices mi tempus</p>
//           <p className={styles.par}>imperdiet nulla.</p>
//         </div>
//         <div className={styles.hideinmobile}>
//           <h1 className={styles.title}>Useful Information</h1>
//           <p className={styles.par}>Amet commodo nulla facilisi nullam</p>
//           <p className={styles.par}>vehicula ipsum. Faucibus pulvinar</p>
//           <p className={styles.par}>elementum integer enim.</p>
//         </div>
//         <div className={styles.hideinmobile}>
//           <h1 className={styles.title}>Targets & Plans</h1>
//           <p className={styles.par}>Fringilla urna porttitor rhoncus dolor</p>
//           <p className={styles.par}>purus nonulla malesuada pellentesque</p>
//           <p className={styles.par}>elit eget.</p>
//         </div>
//         <div className={styles.hideinmobile}>
// 				<div style={{display : "flex", gap : "10px"}} >
// 					<img src="/placeholder.png" alt="img" style={{ filter: 'invert(1)', width : "18px", height : "18px", marginTop : "10px" }} />
// 					<div>
// 						<h1 className={styles.title}>Address :</h1>
// 						<p className={styles.par}>Street Name, NY 38954</p>
// 					</div>
// 				</div>

// 				<div style={{display : "flex", gap : "10px"}}> 
// 				<img src="/telephone.png" alt="img" style={{ filter: 'invert(1)', width : "18px", height : "18px", marginTop : "10px" }} />
// 					<div>
// 						<h1 className={styles.title}>Phone :</h1>
// 						<p className={styles.par}>578-393-4937</p>
// 					</div>
// 				</div>

// 				<div style={{display : "flex", gap : "10px"}}>
// 				<img src="/smartphone.png" alt="img" style={{ filter: 'invert(1)', width : "18px", height : "18px", marginTop : "10px" }} />
// 					<div>
// 						<h1 className={styles.title}>Mobile :</h1>
// 						<p className={styles.par}>578-393-4937</p>
// 					</div>
// 				</div>
//         </div>
//       </div>

// 		<div className={styles.acc}>
// 		<Accordion
// 			onClick={(event) => {
// 				event.stopPropagation(); // Prevent drawer from closing
// 			}}
// 			sx={{
// 				backgroundColor: 'transparent',
// 				boxShadow: 'none',
// 			}}
// 			>
				
// 			<AccordionSummary
// 				aria-controls="panel1-content"
// 				id="panel1-header"
// 				sx={{
// 					'& .MuiTypography-root': {
// 					fontSize: '0.9rem', // Apply font size specifically to Typography inside AccordionSummary
// 					fontWeight: '600',
// 					color : "white"
// 					},
// 				}}
// 			>
// 				<Typography component="span">
// 					About Us <b style={{ fontSize: '0.7rem' }}>▼</b>
// 				</Typography>
// 			</AccordionSummary>
// 			<AccordionDetails
// 				sx={{
// 					'& .MuiTypography-root': {
// 					fontSize: '0.8rem', // Apply font size specifically to Typography inside AccordionDetails
// 					fontWeight: '500',
// 					color : "white"
// 					},
// 				}}
// 			>
// 				<Typography>
// 					<p>- Our Partners</p>
// 					<p>- About Organization</p>
// 					<p>- Our Journeys</p>
// 				</Typography>
// 			</AccordionDetails>
// 			</Accordion>
// 			<Accordion
// 			onClick={(event) => {
// 				event.stopPropagation(); // Prevent drawer from closing
// 			}}
// 			sx={{
// 				backgroundColor: 'transparent',
// 				boxShadow: 'none',
// 			}}
// 			>
// 			<AccordionSummary
// 				aria-controls="panel1-content"
// 				id="panel1-header"
// 				sx={{
// 					'& .MuiTypography-root': {
// 					fontSize: '0.9rem', // Apply font size specifically to Typography inside AccordionSummary
// 					fontWeight: '600',
// 					color : "white"
// 					},
// 				}}
// 			>
// 				<Typography component="span">
// 				Quick Links <b style={{ fontSize: '0.7rem' }}>▼</b>
// 				</Typography>
// 			</AccordionSummary>
// 			<AccordionDetails
// 				sx={{
// 					'& .MuiTypography-root': {
// 					fontSize: '0.8rem', // Apply font size specifically to Typography inside AccordionDetails
// 					fontWeight: '500',
// 					color : "white"
// 					},
// 				}}
// 			>
// 				<Typography>
// 				  <p>- Introduction</p>
//               <p>- Organization Team</p>
//               <p>- Press Enquiries</p>
// 				</Typography>
// 			</AccordionDetails>
// 			</Accordion>
// 		</div>


//     </div>
//   );
// };

// export default Footer;













'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
  faPinterest,
  faTelegram,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import React from 'react';
import styles from '@/styles/footer.module.css';

const Footer = () => {
  return (
    <div style={{ margin: '30px 90px', fontFamily: 'Poppins, sans-serif' }} className={styles.container}>
      <hr style={{ marginBottom: '20px' }} />
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
        <div className={styles.icons}>
          <span>Home</span>
          <span>Hotel Bookings</span>
          <span>Car Rentals</span>
          <span>Offers</span>
          <span>Testimonials</span>
        </div>

        <div className={styles.hideinmobile}>
          <div style={{ display: 'flex', gap: '15px' }}>
            <FontAwesomeIcon icon={faFacebook} style={{ color: 'white', fontSize: '15px' }} />
            <FontAwesomeIcon icon={faTwitter} style={{ color: 'white', fontSize: '15px' }} />
            <FontAwesomeIcon icon={faInstagram} style={{ color: 'white', fontSize: '15px' }} />
            <FontAwesomeIcon icon={faYoutube} style={{ color: 'white', fontSize: '15px' }} />
            <FontAwesomeIcon icon={faPinterest} style={{ color: 'white', fontSize: '15px' }} />
            <FontAwesomeIcon icon={faTelegram} style={{ color: 'white', fontSize: '15px' }} />
            <FontAwesomeIcon icon={faWhatsapp} style={{ color: 'white', fontSize: '15px' }} />
          </div>
        </div>
      </div>

      {/* ... The rest of your footer remains unchanged ... */}
    </div>
  );
};

export default Footer;
