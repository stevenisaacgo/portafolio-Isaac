import React from 'react';
import passionImage from "assets/business-discussion.svg";


const PassionImage = () => {
    return (
        <>
            <img
                src={passionImage}
                alt={"Experience"}
                className="md:w-80 mt-4 mx-auto"
            />
        </>
    )
}
export default PassionImage;