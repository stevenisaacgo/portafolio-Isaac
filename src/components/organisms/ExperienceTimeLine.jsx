import React from 'react';
import {Card} from "../atoms/Card";
import {Animator, batch, Fade, MoveOut, ScrollContainer, ScrollPage} from "react-scroll-motion";

const ExperienceTimeline = () => {
    const experiences = [
        {
            id: 1,
            companyName: 'Salesians Sarria',
            position: 'Multiplatform Applications Developer Bachelor',
            duration: '2 years (2021-2023)',
            description: 'Studying the bases of the creation of Applications with Java, JavaScript, .NET, C# and Databases/APIs with SQL and MongoDB.',
            icon: 'school', // icon name for school
        },
        {
            id: 2,
            companyName: 'EnglobaTech',
            position: 'Applications Developer',
            duration: '7 months (2022-2023)',
            description: 'Creating main components with React, React Native.',
            icon: 'work', // icon name for job
        },
        {
            id: 3,
            companyName: 'CodeOP',
            position: 'FrontEnd Bootcamp',
            duration: '4 months (2023)',
            description: 'Intensive training in frontend technologies.',
            icon: 'school', // icon name for school
        },
    ];

    const FadeIn = batch(Fade(), MoveOut(0, -200));

    return (

        <div className="container mx-auto px-4 py-8">
            <div className="relative wrap overflow-hidden">
                <div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border left-1/2"></div>
                <ScrollContainer>
                    {experiences.map((experience, index) => (
                        <ScrollPage>
                            <Animator animation={FadeIn}>
                                <Card index={index} cardId={experience.id} description={experience.description}
                                      icon={experience.icon} position={experience.position}
                                      duration={experience.duration} companyName={experience.companyName}
                                />
                            </Animator>
                        </ScrollPage>
                    ))}
                </ScrollContainer>
            </div>
        </div>
    );

};
export default ExperienceTimeline;
