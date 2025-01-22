// import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEnvelope, faLock, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
// import Button from './btn';



// const FormComponent = () => {


// 	const [formData, setFormData] = useState({
// 		email: '',
// 		phone: '',
// 		password: '',
// 	 });
  
// 	 const handleChange = (e) => {
// 		const { name, value } = e.target;
// 		setFormData({ ...formData, [name]: value });
// 	 };
  
// 	 const handleSignUp = (e) => {
// 		e.preventDefault();
  
// 		// Save data to localStorage
// 		localStorage.setItem('user', JSON.stringify(formData));
  
// 		// Log the first section of the email
// 		const username = formData.email.split('@')[0];
// 		console.log('User Name:', username);
// 		alert(`Welcome, ${username}! Your account has been created.`);
// 	 };

//   return (
//     <div
//       style={{
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         justifyContent: "center",
//         border: "1px solid hsl(0, 0%, 20%)",
//         paddingLeft: "50px",
//         paddingRight : "50px",
//         background: "inherit",
//         borderRadius: "6px"
//       }}
//     >
// 		<h1 style={{margin : "30px 0", fontFamily : "Poppins, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Arial, sans-serif", fontWeight : "700", fontSize : "1.2rem"}}>Welcome To <b style={{ fontFamily: '"Edu Australia VIC WA NT Hand", cursive' , fontSize : "1.4rem", fontWeight : "800"}}>
// 		Alireza Vacation
// 		</b>
// 		</h1>
//       {/* Email Input */}
//       <label htmlFor="Email" style={{ alignSelf: "flex-start", marginBottom: "5px", fontFamily : "Poppins, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Arial, sans-serif", fontWeight : "600", fontSize : "0.9rem" }}>Email</label>
//       <div style={{ position: "relative", width: "100%", marginBottom: "15px" }}>
//         <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             placeholder="Enter your email"
//             required
//           style={{
//             width: "100%",
//             borderRadius: "5px",
//             background: "none",
//             border: "1px solid white",
//             color: "white",
//             boxShadow: "0px 2px 7px hsl(0, 0%, 20%)",
//             padding: "10px 35px 10px 10px",
//             fontFamily: "Arvo",
//             fontSize: "1rem"
//           }}
//         />
//         <FontAwesomeIcon
//           icon={faEnvelope}
//           style={{
//             position: "absolute",
//             top: "50%",
//             right: "10px",
//             transform: "translateY(-50%)",
//             color: "hsl(0, 0%, 85%)"
//           }}
//         />
//       </div>

//       {/* Password Input */}
//       <label htmlFor="Password" style={{ alignSelf: "flex-start", marginBottom: "5px", fontFamily : "Poppins, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Arial, sans-serif", fontWeight : "600", fontSize : "0.9rem" }}>Password</label>
//       <div style={{ position: "relative", width: "100%", marginBottom: "15px" }}>
//         <input
// 			type="password"
// 			name="password"
// 			value={formData.password}
// 			onChange={handleChange}
// 			placeholder="Enter your password"
// 			required
//           style={{
//             width: "100%",
//             borderRadius: "5px",
//             background: "none",
//             border: "1px solid white",
//             color: "white",
//             boxShadow: "0px 2px 7px hsl(0, 0%, 20%)",
//             padding: "10px 35px 10px 10px",
//             fontFamily: "Arvo",
//             fontSize: "1rem"
//           }}
//         />
//         <FontAwesomeIcon
//           icon={faLock}
//           style={{
//             position: "absolute",
//             top: "50%",
//             right: "10px",
//             transform: "translateY(-50%)",
//             color: "hsl(0, 0%, 85%)"
//           }}
//         />
//       </div>

//       {/* Phone Number Input */}
//       <label htmlFor="PhoneNumber" style={{ alignSelf: "flex-start", marginBottom: "5px", fontFamily : "Poppins, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Arial, sans-serif", fontWeight : "600", fontSize : "0.9rem" }}>Phone Number</label>
//       <div style={{ position: "relative", width: "100%", marginBottom: "15px" }}>
//         <input

// 				type="tel"
//             name="phone"
//             value={formData.phone}
//             onChange={handleChange}
//             placeholder="Enter your phone number"
//             required
//           style={{
//             width: "100%",
//             borderRadius: "5px",
//             background: "none",
//             border: "1px solid white",
//             color: "white",
//             boxShadow: "0px 2px 7px hsl(0, 0%, 20%)",
//             padding: "10px 35px 10px 10px",
//             fontFamily: "Arvo",
//             fontSize: "1rem"
//           }}
//         />
//         <FontAwesomeIcon
//           icon={faPhoneAlt}
//           style={{
//             position: "absolute",
//             top: "50%",
//             right: "10px",
//             transform: "translateY(-50%)",
//             color: "hsl(0, 0%, 85%)"
//           }}
//         />
//       </div>

//       {/* Remember Me */}
//       <div style={{ alignSelf: "flex-start", marginTop: "10px" }}>
//         <input type="checkbox" id="rm" name="rm" value="rm" />
//         <label htmlFor="rm" style={{ marginLeft: "5px", fontFamily : "Poppins, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Arial, sans-serif", fontSize : "0.8rem", justifyContent : "center", textAlign : "center", alignItems : "center", marginBottom : "3px"}}>Remember me</label>
//       </div>
		// <div style={{margin : "15px 0"}}>
		// 	 <Button value = 'Submit' fontSize = '1.1' borderRadius = '5' />
		// </div>
			
//     </div>
//   );
// };

// export default FormComponent;













import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import Button from './btn';

const FormComponent = () => {
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignUp = (e) => {
    e.preventDefault();

    // Save data to localStorage
    localStorage.setItem('user', JSON.stringify(formData));

    // Log the first section of the email
    const username = formData.email.split('@')[0];
    console.log('User Name:', username);
    alert(`Welcome, ${username}! Your account has been created.`);
  };

  return (
    <form
      onSubmit={handleSignUp}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px solid hsl(0, 0%, 20%)',
        paddingLeft: '50px',
        paddingRight: '50px',
        background: 'inherit',
        borderRadius: '6px',
      }}
    >
      <h1
        style={{
          margin: '30px 0',
          fontFamily: 'Poppins, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Arial, sans-serif',
          fontWeight: '700',
          fontSize: '1.2rem',
        }}
      >
        Welcome To{' '}
        <b
          style={{
            fontFamily: '"Edu Australia VIC WA NT Hand", cursive',
            fontSize: '1.4rem',
            fontWeight: '800',
          }}
        >
          Alireza Vacation
        </b>
      </h1>

      {/* Email Input */}
      <label
        htmlFor="Email"
        style={{
          alignSelf: 'flex-start',
          marginBottom: '5px',
          fontFamily: 'Poppins, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Arial, sans-serif',
          fontWeight: '600',
          fontSize: '0.9rem',
        }}
      >
        Email
      </label>
      <div style={{ position: 'relative', width: '100%', marginBottom: '15px' }}>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          required
          style={{
            width: '100%',
            borderRadius: '5px',
            background: 'none',
            border: '1px solid white',
            color: 'white',
            boxShadow: '0px 2px 7px hsl(0, 0%, 20%)',
            padding: '10px 35px 10px 10px',
            fontFamily: 'Arvo',
            fontSize: '1rem',
          }}
        />
        <FontAwesomeIcon
          icon={faEnvelope}
          style={{
            position: 'absolute',
            top: '50%',
            right: '10px',
            transform: 'translateY(-50%)',
            color: 'hsl(0, 0%, 85%)',
          }}
        />
      </div>

      {/* Password Input */}
      <label
        htmlFor="Password"
        style={{
          alignSelf: 'flex-start',
          marginBottom: '5px',
          fontFamily: 'Poppins, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Arial, sans-serif',
          fontWeight: '600',
          fontSize: '0.9rem',
        }}
      >
        Password
      </label>
      <div style={{ position: 'relative', width: '100%', marginBottom: '15px' }}>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter your password"
          required
          style={{
            width: '100%',
            borderRadius: '5px',
            background: 'none',
            border: '1px solid white',
            color: 'white',
            boxShadow: '0px 2px 7px hsl(0, 0%, 20%)',
            padding: '10px 35px 10px 10px',
            fontFamily: 'Arvo',
            fontSize: '1rem',
          }}
        />
        <FontAwesomeIcon
          icon={faLock}
          style={{
            position: 'absolute',
            top: '50%',
            right: '10px',
            transform: 'translateY(-50%)',
            color: 'hsl(0, 0%, 85%)',
          }}
        />
      </div>

      {/* Phone Number Input */}
      <label
        htmlFor="PhoneNumber"
        style={{
          alignSelf: 'flex-start',
          marginBottom: '5px',
          fontFamily: 'Poppins, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Arial, sans-serif',
          fontWeight: '600',
          fontSize: '0.9rem',
        }}
      >
        Phone Number
      </label>
      <div style={{ position: 'relative', width: '100%', marginBottom: '15px' }}>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Enter your phone number"
          required
          style={{
            width: '100%',
            borderRadius: '5px',
            background: 'none',
            border: '1px solid white',
            color: 'white',
            boxShadow: '0px 2px 7px hsl(0, 0%, 20%)',
            padding: '10px 35px 10px 10px',
            fontFamily: 'Arvo',
            fontSize: '1rem',
          }}
        />
        <FontAwesomeIcon
          icon={faPhoneAlt}
          style={{
            position: 'absolute',
            top: '50%',
            right: '10px',
            transform: 'translateY(-50%)',
            color: 'hsl(0, 0%, 85%)',
          }}
        />
      </div>

      {/* Remember Me */}
      <div style={{ alignSelf: 'flex-start', marginTop: '10px' }}>
        <input type="checkbox" id="rm" name="rm" value="rm" />
        <label
          htmlFor="rm"
          style={{
            marginLeft: '5px',
            fontFamily: 'Poppins, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Arial, sans-serif',
            fontSize: '0.8rem',
            justifyContent: 'center',
            textAlign: 'center',
            alignItems: 'center',
            marginBottom: '3px',
          }}
        >
          Remember me
        </label>
      </div>

      
		<div style={{margin : "15px 0"}}>
			 <Button value = 'Submit' fontSize = '1.1' borderRadius = '5' />
		</div>
        
      
    </form>
  );
};

export default FormComponent;
