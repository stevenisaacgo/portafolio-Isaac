import React from "react";

export const Card = ({companyName, position,duration, description, cardId, icon, index}) => {
    return (
        <div
            key={cardId}
            className={`mb-8 flex justify-between items-center w-full ${index % 2 === 0 ? 'right-timeline' : 'flex-row-reverse left-timeline'}`}
        >
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-12 h-12 rounded-full">
                {icon === 'school' && (
                    <svg className="h-6 w-6 text-white mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                         xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M12 5v13m0 0l-3-3m3 3l3-3m0 0H8m8 0h-4"></path>
                    </svg>
                )}
                {icon === 'work' && (
                    <svg className="h-6 w-6 text-white mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                         xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M12 5v13m0 0l-3-3m3 3l3-3m0 0H8m8 0h-4"></path>
                    </svg>
                )}
            </div>
            <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                <h3 className="mb-3 font-bold text-gray-800 text-xl">{companyName}</h3>
                <p className="text-gray-700 leading-tight">{position}</p>
                <p className="text-gray-700 leading-tight">{duration}</p>
                <div className="mt-2 text-sm text-gray-700 hover:text-gray-900 transition duration-300">
                    {description}
                </div>
            </div>
        </div>
    )
}