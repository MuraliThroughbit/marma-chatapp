// import React from "react";
// import { Link } from "react-router-dom";
// import Logo from "../assets/Logo.png";
// import backgroundImage from "../assets/HomePage.jpg";

// const ForgotPassword = () => {
//   const containerStyle = {
//     backgroundImage: `url(${backgroundImage})`,
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//     height: "100vh", // You can set the height of the container as per your requirement
//     color: "white", // Adding text color to make it visible
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//   };
//   return (
//     <div style={containerStyle}>
//       <div className="flex h-screen">
//         <div className="hidden lg:flex items-center justify-center flex-1 bg-white text-black">
//           <div className="max-w-md text-center ">
//             <img src={Logo} alt="logo" className="" />
//           </div>
//           <div className="border-l border-solid border-gray-300/90   h-full mx-4"></div>
//         </div>
        
//         <div className="w-full  lg:w-1/2 flex items-center justify-center">
//           <div className="max-w-md w-full p-6">
//             <h1 className="text-3xl font-extrabold mb-6 text-black text-center">
//               Forgot Password
//               <h1 className="text-base text-gray-800 font-serif font-extralight mb-10  text-center">
//               Enter Your email address to reset
//               your password
//               </h1>
//             </h1>

//             <form className="space-y-4">
//             <div>
//                 <label
//                   htmlFor="email"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   Email
//                 </label>
//                 <input
//                   type="text"
//                   id="email"
//                   placeholder='Enter Your Email'
//                   name="email"
//                   className="mt-1  p-2 w-full bg-gray-200 text-black   rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
//                 />
//               </div>
              
             
//               <div>
//                 <button
//                   type="submit"
//                   className="w-full mt-12 bg-gradient-to-r from-gray-900 to-gray-400/90 text-white p-2 rounded-md hover:bg-gray-800 focus:outline-none focus:bg-black focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300"
//                 >
//                   Send
//                 </button>
//               </div>
//             </form>
            
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ForgotPassword;





import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.png';
import backgroundImage from "../assets/HomePage.jpg"

const ForgotPassword = () => {

    const containerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh', 
    color: 'white', 
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };
  return (
      <div style={containerStyle} >
        <h1 className="text-3xl mb-[35%] font-serif    font-semibold  text-black ">
               Create Your Account
               <h1 className="text-sm mb-[45%] font-serif  font-semibold  text-gray-600 ">
               Connect With MarmaFintech
             </h1>
             </h1>
             
     <div className="flex h-screen">
     
     
        <div className="hidden lg:flex items-center justify-center flex-1 bg-white text-black">
          
          <div className="max-w-md text-center">
         
            <img src={Logo} alt="logo" className='ml-[-35%]' />
            
          </div>
          <div className="border-l border-solid border-gray-300/90 ml-10 h-full mx-4"></div>
        </div>

        <div className="w-full  lg:w-1/2 flex items-center justify-center">
          <div className=" w-full p-6">
          <h1 className="text-3xl font-extrabold mb-20 text-black text-center">
              Forgot Password
               <h1 className="text-base text-gray-800 font-serif font-extralight mb-10  text-center">
               Enter Your email address to reset
              your password
              </h1>
            </h1>

             <form className="space-y-4">
               
              <div>
                <label
                  htmlFor="email"
                  className="block text-lg font-extrabold font-mono text-black"
                >
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  placeholder='Enter Your Email'
                  name="email"
                  className="mt-10 p-2 w-full bg-gray-200   rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
                />
              </div>

              

              
              
            </form>
            <div className="mt-2 text-sm text-gray-600 text-center">
              <p className='text-lg'>
                
                <div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r mt-10 from-gray-900 to-gray-400/90 text-white p-2 rounded-md hover:bg-gray-800 focus:outline-none focus:bg-black focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300"
                >
                  Send
                </button>
              </div>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;