import { faArrowRightToBracket, faEnvelope, faLock, faFacebookF, faApple, faGoogle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';
import FacebookIcon from '@mui/icons-material/Facebook';
import React from 'react'
import Button from '../_components/btn';

const Login = () => {
  return (
	 <div>

		<div style={{
			display: "flex", 
			gap: "80px", 
			justifyContent: "center", 
			alignItems: "center", 
			height: "100vh" // This ensures vertical centering within the viewport height
		}}>
			    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        border: "1px solid hsl(0, 0%, 20%)",
        paddingLeft: "50px",
        paddingRight : "50px",
        background: "inherit",
        borderRadius: "6px",
		  
      }}
    >
		<FontAwesomeIcon icon={faArrowRightToBracket} style={{margin : "15px 0",fontSize : "1.7rem"}}/>
		<h1 style={{marginBottom : "30px", fontFamily : "Poppins, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Arial, sans-serif", fontWeight : "700", fontSize : "1.2rem"}}>Sign in With Email</h1>
      <label htmlFor="Email" style={{ alignSelf: "flex-start", marginBottom: "5px", fontFamily : "Poppins, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Arial, sans-serif", fontWeight : "600", fontSize : "0.9rem" }}>Email</label>
      <div style={{ position: "relative", width: "100%", marginBottom: "15px" }}>
        <input
          type="text"
          placeholder="Enter your email"
          style={{
            width: "100%",
            borderRadius: "5px",
            background: "none",
            border: "1px solid white",
            color: "white",
            boxShadow: "0px 2px 7px hsl(0, 0%, 20%)",
            padding: "10px 35px 10px 10px",
            fontFamily: "Arvo",
            fontSize: "1rem"
          }}
        />
        <FontAwesomeIcon
          icon={faEnvelope}
          style={{
            position: "absolute",
            top: "50%",
            right: "10px",
            transform: "translateY(-50%)",
            color: "hsl(0, 0%, 85%)"
          }}
        />
      </div>

      {/* Password Input */}
      <label htmlFor="Password" style={{ alignSelf: "flex-start", marginBottom: "5px", fontFamily : "Poppins, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Arial, sans-serif", fontWeight : "600", fontSize : "0.9rem" }}>Password</label>
      <div style={{ position: "relative", width: "100%", marginBottom: "15px" }}>
        <input
          type="password"
          placeholder="Enter your password"
          style={{
            width: "100%",
            borderRadius: "5px",
            background: "none",
            border: "1px solid white",
            color: "white",
            boxShadow: "0px 2px 7px hsl(0, 0%, 20%)",
            padding: "10px 35px 10px 10px",
            fontFamily: "Arvo",
            fontSize: "1rem"
          }}
        />
        <FontAwesomeIcon
          icon={faLock}
          style={{
            position: "absolute",
            top: "50%",
            right: "10px",
            transform: "translateY(-50%)",
            color: "hsl(0, 0%, 85%)"
          }}
        />
      </div>
		<div style={{margin : "15px 0"}}>
			 <Button value = 'Login' fontSize = '1.1' borderRadius = '5' />
		</div>
			<div style={{ display: 'flex', gap: '20px', marginTop: '15px' ,marginBottom : "20px"}}>
				<GoogleIcon style={{ fontSize: '1.5rem', color: 'white' }} />
				<AppleIcon style={{ fontSize: '1.5rem', color: 'white' }} />
				<FacebookIcon style={{ fontSize: '1.5rem', color: 'white' }} />
			</div>
		</div>

			<div>
				<h1 
						style={{
							display: "flex", 
							fontSize: "2.95rem", 
							fontFamily: "Poppins, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Arial, sans-serif", 
							width: "400px", 
							fontWeight: "800", 
							borderBottom: "1px solid white",
							textAlign: "center" // Optional for better text alignment
						}}
				>
						The Goal Of Life Is Living In Agreement With Nature
				</h1>
			</div>
		</div>

	</div>
  )
}

export default Login














