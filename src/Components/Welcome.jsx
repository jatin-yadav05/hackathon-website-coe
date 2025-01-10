import React, { useState, useEffect } from "react";
import './Welcome.css';
import Glimpse from "./Glimpse";

const Welcome = () => {
  const [opacity, setOpacity] = useState(1);  // For main div opacity
  const [navbarOpacity, setNavbarOpacity] = useState(0);  // For navbar opacity

  const handleScroll = () => {
    const scrollTop = window.scrollY; // Current vertical scroll position
    const windowHeight = window.innerHeight; // Height of the viewport

    // Calculate the opacity for the main div (1 at the top, 0.5 at the bottom of the first viewport)
    const newOpacity = Math.max(1 - scrollTop / windowHeight, 0.8);
    setOpacity(newOpacity);

    // Calculate the navbar opacity based on scroll position of the main content
    // The navbar will appear as user scrolls past 50% of the first viewport
    let newNavbarOpacity = scrollTop/windowHeight;
    if(scrollTop/windowHeight>0.99){
        setNavbarOpacity(1);
    }
    else{
        setNavbarOpacity(0);
    }
    // setNavbarOpacity(newNavbarOpacity);
  };

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {/* Div with opacity controlled by scrolling */}
      <div
        style={{
          height: "100vh",
          width: "100%",
          background: "linear-gradient(90deg, rgb(5, 11, 20) 0%, rgb(5, 11, 20) 100%)",
          opacity: opacity,
          transition: "opacity 0.3s ease-out", // Smooth transition
          display: "flex",
          justifyContent: "center",
          paddingTop: "10vh",
        }}
      >
        <div
          className="w-11/12 md:w-9/12 lg:w-1/3 h-max text-4xl sm:text-6xl"
          style={{ fontFamily: "'Emilys Candy', serif", color: "white", fontWeight: 400 }}
        >
          <p>Hey, welcome!...</p>
          <br />
          <p className="text-2xl sm:text-3xl" style={{ fontFamily: "'Mukta', serif", fontWeight: 100 }}>
            Our winter project is to kick off a hackathon renaissance, together. We'll begin soon, and we ask for you to join us!
          </p>
          <br />
          <p className="text-2xl sm:text-3xl" style={{ fontFamily: "'Mukta', serif", fontWeight: 100  }}>
            This is your <span style={{fontWeight:400}} >invitation</span> to meet and make mischief...
          </p>
          <br />
          <center>
            <img src="downarrrow.svg" alt="" style={{ height: "5vh", animation: 'example 2s linear infinite' }} />
          </center>
        </div>
      </div>


      {/* Additional content to create scrolling */}
      <div style={{ height: "max-content",background: "linear-gradient(90deg, rgb(5, 11, 20,0.7) 0%, rgb(5, 11, 20,0.75) 100%)", }}>

        {/* Sticky Navbar with opacity controlled by scroll */}
      <div
        className="w-full h-16 "
        style={{
          position: "sticky",
          top: 0,  // Keeps the navbar at the top
          opacity: navbarOpacity,
          transition: "opacity 0.3s linear", // Smooth transition for navbar opacity
          zIndex: 10, // Ensure it's above other content
          background: "linear-gradient(90deg, rgb(5, 11, 20) 0%, rgb(5, 11, 20) 100%)",
          padding: "0px",
          display: "flex",
        }}>

        <div className="flex w-2/3 text-white ">
            <img src="coe.jpg" alt="" className="ml-2" />
            <a href="#" className="flex items-center text-xl"><p style={{fontFamily: "'Roboto Condensed', serif",fontWeight:500}} >CENTER OF EXCELLENCE</p> </a>
        </div>
        <div className="w-1/3 flex" >
            <a href="" className="w-1/3 hidden lg:flex items-center text-white justify-center"><p style={{fontFamily: "'Roboto Condensed', serif",fontWeight:500}}>The Hackathon</p></a>
            <a href="" className="w-1/3 hidden lg:flex items-center text-white justify-center"><p style={{fontFamily: "'Roboto Condensed', serif",fontWeight:500}}>The Rundown</p></a>
            <a href="" className="w-full lg:w-1/3 flex items-center text-white bg-green-700 hover:bg-green-800 justify-center m-1 rounded"><p style={{fontFamily: "'Roboto Condensed', serif",fontWeight:500}}>Join the Waitlist</p></a>
        </div>
      </div>

      {/* navbar ends */}

      {/* main code */}
        <div className="w-full h-screen  flex items-center justify-center m-0 p-0 md:pl-4 lg:pl-36 overflow-hidden " >
          <div className="w-4/5 h-fit mt-30  ">
              <p className="text-white pt-10 text-3xl " style={{fontFamily: "Nunito', serif" ,fontWeight: 800,letterSpacing: "0.009em" }} >PRESENTING, </p>
              <p className="text-white pt-2 text-5xl md:text-7xl  " style={{fontFamily: "Nunito', serif" ,fontWeight: 800,letterSpacing: "0.009em" ,color: "#fa4639",textDecoration: "underline" }} >TECH NOVA! </p>
            <div className="block md:flex w-11/12 h-max  mt-4 ">
              <div className="h-36 w-32 bg-orange-800 rounded-xl border-white border-2 relative overflow-hidden" style={{backgroundColor: "transparent"}}  >
                <div className="w-full h-12 p-1 flex justify-center items-center" style={{backgroundColor: "#0b1a2e"}}>
                    <p className="text-white text-2xl"  style={{textAlign: "center",fontFamily: "Nunito', serif" ,fontWeight: 800,letterSpacing: "0.009em" }} >JAN</p>
                </div>
                <div className="flex justify-center items-center w-full h-24 text-5xl pb-2 border-t-2" style={{backgroundColor: "#FFF8F299"}} >
                  <p style={{textAlign: "center",fontFamily: "Nunito', serif" ,fontWeight: 800,letterSpacing: "0.009em" }} >10</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 "  >
              <div className="w-full md:w-64 lg:w-72 h-12 m-2 flex justify-center items-center text-white " style={{backgroundColor: "#ba7c2b",fontFamily: "Nunito', serif" ,fontWeight: 500,letterSpacing: "0.009em" }} >
                <p>SINGLE THEME HACKAHTON</p>
              </div>
              <div className="w-full md:w-64 lg:w-72  h-12 m-2 flex justify-center items-center text-white" style={{backgroundColor: "#c23371",fontFamily: "Nunito', serif" ,fontWeight: 500,letterSpacing: "0.009em" }} >
                <p>FUN ACTIVITIES</p>
              </div>
              <div className="w-full md:w-64 lg:w-72 bg-blue-500 h-12 m-2 flex justify-center items-center text-white" style={{backgroundColor: "",fontFamily: "Nunito', serif" ,fontWeight: 500,letterSpacing: "0.009em" }} >
                <p>24HR+ COMPETITION</p>
              </div>
              <div className="w-full md:w-64 lg:w-72 h-12 m-2 flex justify-center items-center text-white" style={{backgroundColor: "brown",fontFamily: "Nunito', serif" ,fontWeight: 500,letterSpacing: "0.009em" }} >
                <p >WEB DEVELOPMENT  </p>
              </div>
              
              </div>
              
            </div>
            <a href=""  className="w-full lg:w-1/4 h-20 flex items-center text-white bg-green-700 hover:bg-green-800 justify-center mt-2 lg:mt-5 rounded-lg text-3xl  "><p style={{fontFamily: "'Roboto Condensed', serif",fontWeight:500,display:"flex"}}>Join the Waitlist <img src="arrow.svg" alt="" className="ml-2" style={{height: "35px"}} /> </p></a>
          </div>
          
        </div>

        <Glimpse/>

      </div>

    </div>
  );
};

export default Welcome;
