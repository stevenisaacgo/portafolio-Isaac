import React from 'react';

const WhyChooseMe = () => {
    // Sample reasons or key points
    const reasons = [
        {
            title: 'Experience',
            description: 'Experience in web development and UI/UX design.'
        },
        {
            title: 'Skills',
            description: 'Proficient in React, Node.js, HTML/CSS, and responsive design.'
        },
        {
            title: 'Passion',
            description: 'Passionate about creating intuitive and user-friendly interfaces.'
        },
        {
            title: 'Creativity',
            description: 'Bringing innovative solutions to complex problems.'
        }
    ];

    return (
        <section className="bg-gray-100 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        Why Choose Me?
                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
                        Highlighting key reasons to choose you.
                    </p>
                </div>
                <div className="mt-20 grid grid-cols-1 gap-16 lg:grid-cols-2">
                    {reasons.map((reason, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center justify-center bg-white rounded-lg shadow-lg p-6"
                        >
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                {reason.title}
                            </h3>
                            <p className="text-lg text-gray-700 text-center">
                                {reason.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseMe;
