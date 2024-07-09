import React, {lazy, Suspense} from "react";
import Loader from "components/atoms/Loader.jsx";
import {Animator, batch, Fade, MoveOut, ScrollContainer, ScrollPage,} from "react-scroll-motion";

const Hero = lazy(() => import("components/organisms/Hero.jsx"));
const WhyChooseMe = lazy(() => import("components/organisms/WhyChooseMe.jsx"));
const Skills = lazy(() => import("components/organisms/Skills.jsx"));

const Home = () => {
    const FadeAndMoveOut = batch(Fade(), MoveOut(0, -200));
    return (
        <section className="container mx-auto min-h-svh">
            <Suspense fallback={<Loader/>}>
                <ScrollContainer>
                    <ScrollPage className={"flex flex-col justify-center"}>
                        <Animator animation={FadeAndMoveOut}>
                            <Hero/>
                        </Animator>
                    </ScrollPage>
                    <ScrollPage className={"flex flex-col justify-center"}>
                        <Animator animation={FadeAndMoveOut}>
                            <Skills/>
                        </Animator>
                    </ScrollPage>
                    <ScrollPage className={"flex flex-col justify-center"}>
                        <Animator animation={FadeAndMoveOut}>
                            <WhyChooseMe/>
                        </Animator>
                    </ScrollPage>
                </ScrollContainer>
            </Suspense>
        </section>
    )
        ;
};

export default Home;
