import React, { useState, useEffect } from "react";
import './Welcome.css';

const Welcome = () => {
  const [opacity, setOpacity] = useState(1);  // For main div opacity
  const [navbarOpacity, setNavbarOpacity] = useState(0);  // For navbar opacity

  const handleScroll = () => {
    const scrollTop = window.scrollY; // Current vertical scroll position
    const windowHeight = window.innerHeight; // Height of the viewport

    // Calculate the opacity for the main div (1 at the top, 0.5 at the bottom of the first viewport)
    const newOpacity = Math.max(1 - scrollTop / windowHeight, 0.5);
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
          className="w-11/12 md:w-9/12 lg:w-1/3 h-max text-4xl"
          style={{ fontFamily: "'Emilys Candy', serif", color: "white", fontWeight: 400 }}
        >
          <p>Hey, welcome!...</p>
          <br />
          <p className="text-2xl" style={{ fontFamily: "'Mukta', serif" }}>
            Our winter project is to kick off a hackathon renaissance, together. We'll begin soon, and we ask for you to join us!
          </p>
          <br />
          <p className="text-2xl" style={{ fontFamily: "'Mukta', serif" }}>
            This is your invitation to meet and make mischief...
          </p>
          <center>
            <img src="downarrrow.svg" alt="" style={{ height: "5vh", animation: 'example 2s linear infinite' }} />
          </center>
        </div>
      </div>


      {/* Additional content to create scrolling */}
      <div style={{ height: "100vh",background: "linear-gradient(90deg, rgb(5, 11, 20,0.5) 0%, rgb(5, 11, 20,0.5) 100%)", }}>

        {/* Sticky Navbar with opacity controlled by scroll */}
      <div
        className="w-full h-10 "
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

        <div className="flex w-3/5 sm:w-2/3 text-white ">
            <img src="coe.jpg" alt="" className="ml-2" />
            <a href="#" className="flex items-center text-xl"><p style={{fontFamily: "'Roboto Condensed', serif",fontWeight:500}} >CENTER OF EXCELLENCE</p> </a>
        </div>
        <div className="w-2/5 flex" >
            <a href="" className="w-1/3 hidden lg:flex items-center text-white justify-center"><p style={{fontFamily: "'Roboto Condensed', serif",fontWeight:500}}>The Hackathon</p></a>
            <a href="" className="w-1/3 hidden lg:flex items-center text-white justify-center"><p style={{fontFamily: "'Roboto Condensed', serif",fontWeight:500}}>The Rundown</p></a>
            <a href="" className="w-full lg:w-1/3 flex items-center text-white bg-green-700 justify-center m-1 rounded"><p style={{fontFamily: "'Roboto Condensed', serif",fontWeight:500}}>Join the Waitlist</p></a>
        </div>
      </div>

      {/* navbar ends */}

      {/* main code */}

      </div>

    </div>
  );
};

export default Welcome;
