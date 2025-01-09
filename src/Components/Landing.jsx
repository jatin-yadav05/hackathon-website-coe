import React from 'react';
import Welcome from './Welcome';

const Landing = () => {
    return(
        <>
        {/* body */}
            <div className="w-full h-max  bg-no-repeat bg-cover bg-center bg-fixed" style={{ backgroundImage: `url('vivek.jpg')`}}  >
                <Welcome/>
            </div>
        </>
    )
}

export default Landing;