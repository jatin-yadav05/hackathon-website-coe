import React from 'react';
import Welcome from './Welcome';

const Landing = () => {
    return(
        <>
            <div className="w-full h-max  bg-no-repeat bg-cover bg-center bg-fixed" style={{ backgroundImage: `url('footer-bg.jpg')`}}  >
                <Welcome/>
            </div>
        </>
    )
}

export default Landing;