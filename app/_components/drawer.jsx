


// import * as React from 'react';
// import Box from '@mui/material/Box';
// import SwipeableDrawer from '@mui/material/SwipeableDrawer';
// import Button from '@mui/material/Button';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import CloseIcon from '@mui/icons-material/Close'; // Import CloseIcon
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars, faFeatherPointed, faGraduationCap, faMagnifyingGlass, faPhone, faStar, faUser } from '@fortawesome/free-solid-svg-icons';
// import { faFacebookF, faGithub, faInstagramSquare, faXTwitter } from '@fortawesome/free-brands-svg-icons';
// import Link from 'next/link';
// import styles from '@/styles/nav.module.css'
// import Accordion from '@mui/material/Accordion';
// import AccordionSummary from '@mui/material/AccordionSummary';
// import AccordionDetails from '@mui/material/AccordionDetails';
// import Typography from '@mui/material/Typography';
// import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

// export default function SwipeableTemporaryDrawer() {
//   const [state, setState] = React.useState({
//     right: false,
//   });

//   const toggleDrawer = (open) => (event) => {
//     if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
//       return;
//     }
//     setState({ right: open });
//   };

//   const list = () => (
//     <Box
//       sx={{
//         width: '100%', // Set width to 100% for full screen
//         height: 'auto', // Maintain auto height
//         backdropFilter: 'blur(10px)', // Apply blur effect
//         backgroundColor: 'rgba(255, 255, 255, 0.1)', // Semi-transparent background for glass effect
//         borderRadius: '0px', // No rounded corners for full screen
//         color: "white",
//         position: 'relative', // Set position relative for absolute positioning of CloseIcon
//       }}
//       role="presentation"
//       onClick={toggleDrawer(false)}
//       onKeyDown={toggleDrawer(false)}
//     >
//       {/* Close Icon positioned at the top right */}
//       <CloseIcon 
//         onClick={toggleDrawer(false)} 
//         sx={{ 
//           position: 'absolute', 
//           top: 16, // Adjust as needed
//           right: 16, // Adjust as needed
//           cursor: 'pointer',
//           color: 'white' // Change color if needed
//         }} 
//       />
//       <List>

//         <ListItem disablePadding >
//           <ListItemButton>
// 			 	<FontAwesomeIcon icon={faUser} style={{fontSize : "2.9rem", marginRight : "10px", opacity : "0.8"}}/>
// 				<div style={{display : "flex", flexDirection : "column"}}> 

// 				<Link href='/signup'><h1 style={{fontSize : "1.4rem", fontWeight : "700", fontFamily : "Outfit, sans-serif"}}>Sign Up</h1></Link>
// 				<Link href='/signin'>
// 					<h5 style={{fontSize : "0.9rem", fontWeight : "500", color : "hsl(0, 0%, 70%)"}}>Do you have account?</h5>
// 				</Link>
// 				</div>
//           </ListItemButton>
//         </ListItem>
// 		  <hr />

// 		  	<div className={styles.inputContainer} style={{width : "330px", marginTop : "25px", marginBottom : "30px"}}>
// 				<input
// 					type="text"
// 					placeholder="Search destinations or activity"
// 					className={styles.inp}
// 				/>
// 				<FontAwesomeIcon icon={faMagnifyingGlass} className={styles.icon} />
// 			</div>

			// <ListItem disablePadding>
         //  <ListItemButton>
			// 		<ListItemText primary=" - Tours and Experiences" />
			// 	</ListItemButton>
			// </ListItem>
			// <ListItem disablePadding>
         //  <ListItemButton>
			// 		<ListItemText primary=" - Testimonials" />
			// 	</ListItemButton>
			// </ListItem>
			// <ListItem disablePadding>
         //  <ListItemButton>
			// 		<ListItemText primary=" - Hotels" />
			// 	</ListItemButton>
			// </ListItem>
			// <ListItem disablePadding>
         //  <ListItemButton>
			// 		<ListItemText primary=" - Transportation" />
			// 	</ListItemButton>
			// </ListItem>
			// <ListItem disablePadding>
         //  <ListItemButton>
			// 		<ListItemText primary=" - Offer" />
			// 	</ListItemButton>
			// </ListItem>

// 		  <div style={{fontSize : "0.6rem"}}>


// 			<Accordion>
// 				<AccordionSummary
// 					// expandIcon={<ArrowDropDownIcon />}
// 					aria-controls="panel2-content"
// 					id="panel2-header"
// 				>
// 					<Typography component="span">About Us <b style={{fontSize : "0.8rem"}}>▼</b></Typography>
// 				</AccordionSummary>
// 				<AccordionDetails>
// 					<Typography>
// 						<p>Our Partners</p>
// 						<p>About Organization</p>
// 						<p>Our Journeys</p>
// 					</Typography>
// 				</AccordionDetails>
// 			</Accordion>
// 			<Accordion>
// 				<AccordionSummary
// 					// expandIcon={<ArrowDropDownIcon />}
// 					aria-controls="panel2-content"
// 					id="panel2-header"
// 				>
// 					<Typography component="span">Quick Links <b style={{fontSize : "0.8rem"}}>▼</b></Typography>
// 				</AccordionSummary>
// 				<AccordionDetails>
// 					<Typography>
// 					<p className={styles.par}>Introduction</p>
//           		<p className={styles.par}>Organisation Team</p>
//           		<p className={styles.par}>Press Enquiries</p>
// 					</Typography>
// 				</AccordionDetails>
// 			</Accordion>
// 			<Accordion>
// 				<AccordionSummary
// 					// expandIcon={<ArrowDropDownIcon />}
// 					aria-controls="panel2-content"
// 					id="panel2-header"
// 				>
// 					<Typography component="span">Important Links <b style={{fontSize : "0.8rem"}}>▼</b></Typography>
// 				</AccordionSummary>
// 				<AccordionDetails>
// 					<Typography>
// 					<p className={styles.par}>Privacy Policy</p>
//           		<p className={styles.par}>Cookies Policy</p>
//           		<p className={styles.par}>Terms & Conditions</p>
// 					</Typography>
// 				</AccordionDetails>
// 			</Accordion>
// 			<Accordion>
// 				<AccordionSummary
// 					// expandIcon={<ArrowDropDownIcon />}
// 					aria-controls="panel2-content"
// 					id="panel2-header"
// 				>
// 					<Typography component="span">Contact Info <b style={{fontSize : "0.8rem"}}>▼</b></Typography>
// 				</AccordionSummary>
// 				<AccordionDetails>
// 					<Typography>
// 					<p className={styles.par}>Nunc lobortis mattis aliquam faucibus</p>
//           		<p className={styles.par}>purus in massa arcu odio ut sem nulla</p>
//           		<p className={styles.par}>pharetra diam amet.</p>
// 					</Typography>
// 				</AccordionDetails>
// 			</Accordion>
// 		  </div>

// 			</List>
      
      
//     </Box>
//   );

//   return (
//     <div>
//       {/* <Button onClick={toggleDrawer(true)}><FontAwesomeIcon icon={faBars} style={{color : "white", fontWeight : "900", fontSize : "1.9rem"}}/></Button> */}
// 		<img src="/menu.png" alt="img" onClick={toggleDrawer(true)} style={{filter: 'invert(1)', width : "30px", height : "30px"}}/>
//       <SwipeableDrawer
//         anchor='right'
//         open={state.right}
//         onClose={toggleDrawer(false)}
//         onOpen={toggleDrawer(true)}
//         PaperProps={{
//           sx: {
//             backgroundColor: 'transparent', // Ensure the drawer itself is transparent
//             backdropFilter: 'blur(10px)', // Apply blur to the drawer's background
//             width: '100%', // Set width to 100% for full screen
//             height: '100%', // Set height to 100% for full screen
//             top: 0, // Align to the top of the viewport
//             right: 0, // Align to the right of the viewport
//           },
//         }}
//       >
//         {list()}
//       </SwipeableDrawer>
//     </div>
//   );
// }










import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CloseIcon from '@mui/icons-material/Close'; // Import CloseIcon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faFeatherPointed, faGraduationCap, faMagnifyingGlass, faPencil, faPhone, faStar, faUser } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faGithub, faInstagram, faInstagramSquare, faTelegram, faWhatsapp, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
import styles from '@/styles/nav.module.css'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export default function SwipeableTemporaryDrawer() {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ right: open });
  };

  const list = () => (
    <Box
      sx={{
        width: '100%', // Full screen width
        height: 'auto',
        backdropFilter: 'blur(10px)',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderRadius: '0px',
        color: 'white',
        position: 'relative',
      }}
      role="presentation"
      // Removed onClick from here to prevent automatic closing
      onKeyDown={toggleDrawer(false)}
    >
      {/* Close Icon */}
      <CloseIcon
        onClick={toggleDrawer(false)}
        sx={{
          position: 'absolute',
          top: 16,
          right: 16,
          cursor: 'pointer',
          color: 'white',
        }}
      />
      <div>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
          <FontAwesomeIcon
            icon={faUser}
            style={{ fontSize: '2.9rem', marginRight: '10px', opacity: '0.8' }}
          />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Link href="/signup">
              <h1 style={{ fontSize: '1.4rem', fontWeight: '700', fontFamily: 'Outfit, sans-serif' }}>
                Sign Up
              </h1>
            </Link>
            <Link href="/signin">
              <h5 style={{ fontSize: '0.9rem', fontWeight: '500', color: 'hsl(0, 0%, 70%)' }}>
                Do you have an account?
              </h5>
            </Link>
          </div>
        </div>

        <hr />

        {/* <div className={styles.inputContainer} style={{ width: '330px', margin: '25px 0 30px' }}>
          <input
            type="text"
            placeholder="Search destinations or activity"
            className={styles.inp}
          />
          <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.icon} />
        </div> */}

			<div
			className={styles.inputContainer}
			style={{
				width: '330px',
				margin: '25px auto 30px', // "auto" centers horizontally
				display: 'flex',          // Flexbox for alignment
				alignItems: 'center',     // Center vertically
				justifyContent: 'center', // Center horizontally within the div
			}}
			>
			<input
				type="text"
				placeholder="Search destinations or activity"
				className={styles.inp}
				style={{
					marginRight: '10px', // Space between the input and the icon
				}}
			/>
			<FontAwesomeIcon icon={faMagnifyingGlass} className={styles.icon} />
			</div>

		  
			<ListItem disablePadding>
          <ListItemButton>
					<ListItemText primary=" - Tours and Experiences" />
				</ListItemButton>
			</ListItem>
			<ListItem disablePadding>
          <ListItemButton>
					<ListItemText primary=" - Testimonials" />
				</ListItemButton>
			</ListItem>
			<ListItem disablePadding>
          <ListItemButton>
					<ListItemText primary=" - Hotels" />
				</ListItemButton>
			</ListItem>
			<ListItem disablePadding>
          <ListItemButton>
					<ListItemText primary=" - Transportation" />
				</ListItemButton>
			</ListItem>
			<ListItem disablePadding>
          <ListItemButton>
					<ListItemText primary=" - Offer" />
				</ListItemButton>
			</ListItem>


        {/* Accordions */}
        {/* <Accordion
          onClick={(event) => {
            event.stopPropagation(); // Prevent drawer from closing
          }}
			 sx={{fontSize : "0.7rem", fontWeight : "500"}}
        >
          <AccordionSummary aria-controls="panel1-content" id="panel1-header">
            <Typography component="span">About Us <b style={{ fontSize: '0.8rem' }}>▼</b></Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <p>Our Partners</p>
              <p>About Organization</p>
              <p>Our Journeys</p>
            </Typography>
          </AccordionDetails>
        </Accordion> */}

			<Accordion
			onClick={(event) => {
				event.stopPropagation(); // Prevent drawer from closing
			}}
			sx={{
				backgroundColor: 'transparent',
				boxShadow: 'none',
			}}
			>
			<AccordionSummary
				aria-controls="panel1-content"
				id="panel1-header"
				sx={{
					'& .MuiTypography-root': {
					fontSize: '0.9rem', // Apply font size specifically to Typography inside AccordionSummary
					fontWeight: '600',
					color : "white"
					},
				}}
			>
				<Typography component="span">
					About Us <b style={{ fontSize: '0.7rem' }}>▼</b>
				</Typography>
			</AccordionSummary>
			<AccordionDetails
				sx={{
					'& .MuiTypography-root': {
					fontSize: '0.8rem', // Apply font size specifically to Typography inside AccordionDetails
					fontWeight: '500',
					color : "white"
					},
				}}
			>
				<Typography>
					<p>- Our Partners</p>
					<p>- About Organization</p>
					<p>- Our Journeys</p>
				</Typography>
			</AccordionDetails>
			</Accordion>
			<Accordion
			onClick={(event) => {
				event.stopPropagation(); // Prevent drawer from closing
			}}
			sx={{
				backgroundColor: 'transparent',
				boxShadow: 'none',
			}}
			>
			<AccordionSummary
				aria-controls="panel1-content"
				id="panel1-header"
				sx={{
					'& .MuiTypography-root': {
					fontSize: '0.9rem', // Apply font size specifically to Typography inside AccordionSummary
					fontWeight: '600',
					color : "white"
					},
				}}
			>
				<Typography component="span">
				Quick Links <b style={{ fontSize: '0.7rem' }}>▼</b>
				</Typography>
			</AccordionSummary>
			<AccordionDetails
				sx={{
					'& .MuiTypography-root': {
					fontSize: '0.8rem', // Apply font size specifically to Typography inside AccordionDetails
					fontWeight: '500',
					color : "white"
					},
				}}
			>
				<Typography>
				  <p>- Introduction</p>
              <p>- Organization Team</p>
              <p>- Press Enquiries</p>
				</Typography>
			</AccordionDetails>
			</Accordion>


{/* 
        <Accordion
          onClick={(event) => {
            event.stopPropagation(); // Prevent drawer from closing
          }}
        >
          <AccordionSummary aria-controls="panel2-content" id="panel2-header">
            <Typography component="span">Quick Links <b style={{ fontSize: '0.8rem' }}>▼</b></Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <p>Introduction</p>
              <p>Organization Team</p>
              <p>Press Enquiries</p>
            </Typography>
          </AccordionDetails>
        </Accordion> */}

      </div>
		<div style={{marginLeft : "10px", marginTop : "20px"}}>

			<div style={{fontSize : "0.74rem", fontFamily : "arvo"}}>
				<div style={{display : "flex", gap : "7px"}}>
					<FontAwesomeIcon icon={faPencil} style={{marginTop : "3px"}}/>
					<h1>Phone : 578-393-4937</h1>
				</div>

				<div style={{display : "flex", gap : "7px", marginTop : "5px"}}>
					<FontAwesomeIcon icon={faPencil} style={{marginTop : "3px"}} />
					<h1>Mobile : 578-393-4937</h1>
				</div>
				
				
			</div>
			<div style={{display : "flex", gap : "10px", textAlign : "center", alignItems : "center", justifyContent : "center", marginTop : "15px", marginBottom : "10px"}}>
				<FontAwesomeIcon icon={faInstagram} style={{ color: 'white', fontSize: '20px' }} />
				<FontAwesomeIcon icon={faYoutube} style={{ color: 'white', fontSize: '20px' }} />
				<FontAwesomeIcon icon={faTelegram} style={{ color: 'white', fontSize: '20px' }} />
				<FontAwesomeIcon icon={faWhatsapp} style={{ color: 'white', fontSize: '20px' }} />
			</div>
		</div>
    </Box>
  );

  return (
    <div>
      <img
        src="/menu.png"
        alt="img"
        onClick={toggleDrawer(true)}
        style={{ filter: 'invert(1)', width: '30px', height: '30px' }}
      />
      <SwipeableDrawer
        anchor="right"
        open={state.right}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        PaperProps={{
          sx: {
            backgroundColor: 'transparent',
            backdropFilter: 'blur(10px)',
            width: '100%',
            height: '100%',
            top: 0,
            right: 0,
          },
        }}
      >
        {list()}
      </SwipeableDrawer>
    </div>
  );
}
