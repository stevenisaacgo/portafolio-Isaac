import React, { Suspense, lazy } from "react";
import Loader from "components/atoms/Loader.jsx";

const PrivacyImg = lazy(() => import("components/atoms/PrivacyImg"));

const PrivacyRequestPage = () => {
    return (
        <div className="text-white flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 lg:p-10">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4">Privacy Request</h1>
            <p className="text-center text-sm sm:text-base md:text-lg lg:text-xl mb-4">
                This information is available under request. Please contact me to request the data.
            </p>
            <div className="flex items-center h-48 sm:h-64 md:h-80 lg:h-96">
                <Suspense fallback={<Loader />}>
                    <PrivacyImg />
                </Suspense>
            </div>
        </div>
    );
};

export default PrivacyRequestPage;
