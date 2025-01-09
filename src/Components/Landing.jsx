import React from 'react';
import Welcome from './Welcome';

const Landing = () => {
    return(
        <>
        {/* body */}
            <div className="w-full h-max bg-[url('/vivek.jpg')] bg-no-repeat bg-cover bg-center bg-fixed" >
                <Welcome/>
            </div>
        </>
    )
}

export default Landing;