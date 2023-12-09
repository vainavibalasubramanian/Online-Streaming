import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Login.css';
import { useNavigate } from 'react-router-dom';


export default function App() {

  const [user, setUser] = useState({ email: '', password: '' });
  const [isValidEmail, setIsValidEmail] = useState(true);
  const navigate = useNavigate();
  
const APIKEY="http://localhost:3000/posts";


//   useEffect(() => {
//     axios.get(APIKEY)
//       .then(response => {
//         setRegistrationData(response.data);

//         // Optional: Log the fetched registration data
//         console.log('Registration Data:', response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching registration data:', error);
//       });
//   }, []);

  const updateemail = (e) => {
    setUser({ ...user, email: e.target.value });
    setIsValidEmail(validateEmail(e.target.value));
  };

  const updatepassword = (e) => {
    setUser({ ...user, password: e.target.value });
  };

//   const handleSubmit = () => {
//     setLoginAttempted(true);

//     if (!isValidEmail) {
//       alert('Invalid email address.');
//       return;
//     }

//     // Check for matching user after data has been fetched
//     const matchingUser = registrationData.find(regUser => regUser.email === user.email && regUser.password === user.password);

//     console.log('Matching User:', matchingUser);

//     if (matchingUser) {
//       handlemeow();
//       alert('Login successful!');
//       // Proceed with your login logic here or redirect to the next page
//       // history.push('/Firstpage');
//     } else {
//       alert('Invalid email or password.');
//     }
//   };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const checkUser = async (email , password) => {
     const response = await axios.get(APIKEY);

     console.log(response);

     return response.data.some(
       (user) => user.email === email && user.pass === password
     )

  }

  const handleLogin = async () => {
      const userExist = await checkUser(user.email , user.password);

      if(userExist)
      {
         alert("login succesfull");
         navigate('/Motion');
      }

      else
      {
         alert("user does not exits")
      }
  }

  return (
    <>
      <div className="login">
      <center>

        <div>
          <table>
            <h1>Sign In!</h1>
            <br></br>
            <label><i>Email Address: </i></label>
            <br />
            
            <input 
            type='text'
              value={user.email}
              onChange={updateemail}
              className="email"
            />
            
            <br />
            <br />
            <label><i>Password:</i> </label>
            <br />
            
            <input
              type="password"
              value={user.password}
              onChange={updatepassword}
              className="email"
            />
            <br />
            <br />
            <Link to="/Login">
              <input
                className="button1"
                type="button"
                value="Sign In"
                style={{backgroundColor:'brown'}}
                onClick={handleLogin}
              />
            </Link>
            {!isValidEmail && (
              <p style={{ color: 'brown' }}>Invalid email or password.</p>
            )}
            <p className="p1">
              Don't have an account? 
            </p>
            <Link to="/">
              <p>Sign Up</p>
            </Link>
          </table>
        </div>
        </center>
      </div>
    </>
  );
}