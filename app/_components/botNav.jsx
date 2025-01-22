import React from 'react'
import styles from '@/styles/nav.module.css' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGift, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import '@fontsource/arvo';
import '@fontsource/poppins';


const BottomNav = () => {
  return (
	 <div style={{color : "white"}}>
		<div className={styles.hideinmobile}>

			<div className={styles.secondflex}>
				<div style={{display : "flex", gap : '6px'}}>
					<FontAwesomeIcon icon={faLocationDot} style={{marginTop : "4px"}}/>
					<h1>Explore Destinations</h1>
				</div>
				<h1>All categories</h1>
				<a href="#updates-section">
					<h1>Tours and Experiences</h1>
				</a>
				
				<a href="#tst-section">
					<h1>Testimonials</h1>
				</a>
				<a href="#th">
					<h1>Hotels</h1>
				</a>
				<a href="#th">
					<h1>Transport</h1>
				</a>
				<h1 style={{opacity : "0.5"}}>|</h1>
				<div style={{display : "flex", gap : '7px'}}>
					<FontAwesomeIcon icon={faGift} style={{color : "hsl(221, 62%, 41%)", marginTop : "4px"}}/>
					<h1>Gift Cards</h1>
				</div>
			</div>
		</div>
	 </div>
  )
}

export default BottomNav