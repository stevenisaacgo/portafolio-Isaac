import React from 'react';
import Lottie from 'react-lottie';
import animationData from 'lotties/hacker-using-laptop.json';

const PrivacyImg = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    return (
        <div className="min-w-full h-48 sm:h-64 md:h-80 lg:h-96 flex items-center justify-center">
            <div className="w-48 sm:w-64 md:w-80 lg:w-96 h-48 sm:h-64 md:h-80 lg:h-96">
            <Lottie
                options={defaultOptions}
                height="100%"
                width="100%"
                style={{ maxHeight: '100%', maxWidth: '100%' }}
            />
            </div>
        </div>
    );
}

export default PrivacyImg;
