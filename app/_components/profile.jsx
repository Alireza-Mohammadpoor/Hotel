





// import { faUser, faX } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import Link from 'next/link';
// import React, { useState } from 'react';
// import Button from './btn';

// const Profile = () => {
//   const [isVisible, setIsVisible] = useState(false);

//   const toggleDropdown = () => {
//     setIsVisible((prev) => !prev);
//   };

//   const closeDropdown = () => {
//     setIsVisible(false); // Close the dropdown when the close icon is clicked
//   };

//   return (
//     <div style={{ position: 'relative', display: 'inline-block', fontFamily : "Poppins, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Arial, sans-serif" }}>
//       {/* Profile Icon */}
//       <FontAwesomeIcon
//         icon={faUser}
//         style={{ fontSize: '1.7rem', cursor: 'pointer', color : "white", height : "25px"}}
//         onClick={toggleDropdown}
//       />

//       {/* Dropdown Menu */}
//       {isVisible && (
//         <div
//           style={{
//             width: '130px',
//             height: '90px',
//             boxShadow: 'gray 0 4px 18px',
//             textAlign: 'left',
//             // fontFamily: 'Arvo, sans-serif',
//             fontWeight: '600',
//             fontSize: '1.4rem',
//             border: '1px solid black',
//             borderRadius: '10px',
//             position: 'absolute', // Makes the dropdown relative to the icon
//             top: '40px', // Adjust dropdown position
//             right: '0', // Align dropdown to the right
//             background: 'lightGray',
//             color: 'black',
//             display: 'flex',
//             flexDirection: 'column',
//             justifyContent: 'center',
//             alignItems: 'center',
//             paddingTop: '10px',
//             zIndex: 2, // Make sure the dropdown is above other content
// 				// left : "5px"
//           }}
//         >
//           {/* Close Icon (X) */}
//           <div
            
//             style={{
            //   fontSize: '1.1rem',
            //   position: 'absolute',
            //   top: '0px',
            //   right: '10px',
            //   cursor: 'pointer',
				//   fontWeight :"700",
				// //   fontFamily : "Arvo, sans-serif"
//             }}
//             onClick={closeDropdown}
//           >x </div>
// 			 <Link href='/login'>		 
// 				<Button 
// 					value="Log in" 
// 					borderRadius="20" 
// 					fontSize="0.9"
// 				/>
// 			 </Link>
// 			 <Link href='/signup'>
//           <h1
//             style={{
//               margin: '5px 0',
//               fontSize: '0.9rem',
//               cursor: 'pointer',
// 				//   fontFamily : "Arvo",
// 				  fontWeight : "700"
//             }}
//           >
//             Sign Up
//           </h1>
// 			 </Link>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Profile;






import { faUser, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import {create} from 'zustand';
import Button from './btn';

// Zustand Store
const useUserStore = create((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  clearUser: () => set({ user: null }),
}));

const Profile = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { user, setUser, clearUser } = useUserStore();

  // Load user from localStorage on mount
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
    }
  }, [setUser]);

  const toggleDropdown = () => {
    setIsVisible((prev) => !prev);
  };

  const closeDropdown = () => {
    setIsVisible(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    clearUser();
    setIsVisible(false);
  };

  return (
    <div style={{ position: 'relative', display: 'inline-block', fontFamily: 'Poppins, sans-serif' }}>
      {/* Profile Icon */}
      <FontAwesomeIcon
        icon={faUser}
        style={{ fontSize: '1.7rem', cursor: 'pointer', color: 'white', height: '25px' }}
        onClick={toggleDropdown}
      />

      {/* Dropdown Menu */}
      {isVisible && (
        <div
          style={{
            width: '160px',
            boxShadow: 'gray 0 4px 18px',
            textAlign: 'left',
            fontWeight: '600',
            fontSize: '1rem',
            border: '1px solid black',
            borderRadius: '10px',
            position: 'absolute',
            top: '40px',
            right: '0',
            background: 'lightGray',
            color: 'black',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '10px',
            zIndex: 2,
          }}
        >
          {/* Close Icon */}
          <div
            style={{
					fontSize: '1.1rem',
					position: 'absolute',
					top: '0px',
					right: '10px',
					cursor: 'pointer',
					fontWeight :"700",
				 //   fontFamily : "Arvo, sans-serif"
            }}
            onClick={closeDropdown}
          >
            x
          </div>

          {/* User Info or Login/Signup */}
          {user ? (
            <>
              <p
                style={{
                  marginTop: '20px',
						marginBottom : "10px",
                  fontSize: '0.9rem',
                  fontWeight: '700',
                }}
              >
                {user.email.split('@')[0]}
              </p>
              <Button
                value="Log Out"
                borderRadius="20"
                fontSize="0.9"
                onClick={handleLogout}
              />
            </>
          ) : (
            <>
              <Link href="/login">
                <Button
                  value="Log in"
                  borderRadius="20"
                  fontSize="0.9"
                />
              </Link>
              <Link href="/signup">
                <h1
                  style={{
                    margin: '5px 0',
                    fontSize: '0.9rem',
                    cursor: 'pointer',
                    fontWeight: '700',
                  }}
                >
                  Sign Up
                </h1>
              </Link>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Profile;
