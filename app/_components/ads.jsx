
// 'use client'

// import React, { useState, useEffect } from 'react';
// import styles from '@/styles/ads.module.css';
// import Button from './btn';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

// const Ads = () => {
//   const [placeholderIndex, setPlaceholderIndex] = useState(0);
//   const placeholders = [
//     "Search destinations...",
//     "Explore local escapes...",
//     "Find your next adventure...",
//     "Discover joy anywhere..."
//   ];

//   // Cycle through placeholders every 3 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setPlaceholderIndex((prevIndex) => (prevIndex + 1) % placeholders.length);
//     }, 2500); // 3000ms = 3 seconds

//     return () => clearInterval(interval); // Cleanup on unmount
//   }, []);

//   return (
//     <div className={styles.container}>
//       <div className={styles.all}>
//         <h1 
//           style={{ 
//             fontWeight: "800", 
//             fontSize: "2.9rem", 
//             fontFamily: "sans-serif", 
//             textAlign: "left", 
//             alignItems: "start", 
//             justifyContent: "left" 
//           }}
// 			 >
//           Your world of joy
//         </h1>
//         <p 
//           style={{ 
//             fontWeight: "600", 
//             fontSize: "1.1rem", 
//             fontFamily: "sans-serif" 
//           }}>
//           From local escapes to far-flung adventures, find what makes you happy
//           anytime, anywhere
//         </p>
//         <div className={styles.inputContainer}>
//           <div className={styles.iconLeft}>
//             <FontAwesomeIcon icon={faMagnifyingGlass} />
//           </div>
//           <input
//             type="text"
//             placeholder={placeholders[placeholderIndex]} // Dynamic placeholder
//             className={styles.input}
//           />
//           <div className={styles.buttonInsideInput}>
//             <Button value="Search" borderRadius="5" fontSize="0.9" />
//           </div>
//         </div>
//       </div>

//     </div>
//   );
// };

// export default Ads;





'use client';

import React, { useState, useEffect } from 'react';
import styles from '@/styles/ads.module.css';
import Button from './btn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Ads = () => {
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const placeholders = [
    "Search destinations...",
    "Explore local escapes...",
    "Find your next adventure...",
    "Discover joy anywhere...",
  ];

  // Cycle through placeholders every 2.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex((prevIndex) => (prevIndex + 1) % placeholders.length);
    }, 2500);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.all}>
        <h1 className={styles.title}>Your world of joy</h1>
        <p className={styles.description}>
          From local escapes to far-flung adventures, find what makes you happy
          anytime, anywhere
        </p>
        <div className={styles.inputContainer}>
			

				<div className={styles.iconLeft}>
					<FontAwesomeIcon icon={faMagnifyingGlass} />
				</div>
				<input
					type="text"
					placeholder={placeholders[placeholderIndex]} // Dynamic placeholder
					className={styles.input}
				/>
			
          <div className={styles.buttonInsideInput}>
            <Button value="Search" borderRadius="5" fontSize="0.9" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ads;
