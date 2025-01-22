
'use client'



import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Button from './btn'
import styles from '@/styles/nav.module.css'
import Profile from './profile'
import BottomNav from './botNav'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import '@fontsource/arvo';
import '@fontsource/poppins';
import SwipeableTemporaryDrawer from './drawer'





const NavBar = () => {


	const pathname = usePathname();


  return (
    <div className={styles.container}>
		<div style={{display : "flex", gap : "15%", flexWrap : "wrap"}}>
			<div className={styles.flex}>
			{/* Logo Section */}
			<Link href='/'>	
				<div>
					<img src="/images/images 1/Screenshot (168)_prev_ui.png" alt="img" className={styles.logo} />
				</div>
			</Link>
			
			{/* Input Section */}
			<div className={styles.hideinmobile}>

				<div className={styles.inputContainer}>
					<input
						type="text"
						placeholder="Search destinations or activity"
						className={styles.inp}
					/>
					<FontAwesomeIcon icon={faMagnifyingGlass} className={styles.icon} />
				</div>
			</div>
			</div>

			<div className={styles.hideinmobile}>

				<div className={styles.navmember}>
					<h1>Help</h1>
					<h1>Recently viewed</h1>
					<a href="#offers-section">
						<h1>Offers</h1>
					</a>
					<Button 
						value="Discounts" 
						borderRadius="20" 
						fontSize="0.9"
					/>
					
					{!(pathname === '/signup' || pathname === '/login') && <Profile />}

				</div>
			</div>
			<div className = {styles.navv}>

				<SwipeableTemporaryDrawer />
			{/* <Navres /> */}
			</div>
		</div>
		
		{pathname === '/' && <BottomNav />}

    </div>
  )
}

export default NavBar






