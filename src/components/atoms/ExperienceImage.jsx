import React from 'react';
import experienceImage from "assets/employee-works-remotely.svg";

const ExperienceImage = () => {
    return (
        <>
            <img
                src={experienceImage}
                alt={"Experience"}
                className="md:w-80 mt-4 mx-auto"
            />
        </>
    )
}
export default ExperienceImage;