import React, { lazy, Suspense } from "react";
import Loader from "components/atoms/Loader.jsx";
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  MoveOut,
} from "react-scroll-motion";
import Carousel from "components/atoms/Carousel";

const Hero = lazy(() => import("components/molecules/Hero.jsx"));
const Skills = lazy(() => import("components/organisms/Skills.jsx"));

const Home = () => {
  const FadeAndMoveOut = batch(Fade(), MoveOut(0, -200));

  return (
    <section className="container mx-auto">
      <Suspense fallback={<Loader />}>
        <ScrollContainer>
          <ScrollPage>
            <Animator animation={FadeAndMoveOut}>
              <Hero />
            </Animator>
          </ScrollPage>
          <ScrollPage>
            <Animator animation={FadeAndMoveOut}>
              <Skills />
            </Animator>
          </ScrollPage>
          <ScrollPage>
            <Animator animation={FadeAndMoveOut}>
              <Carousel />
            </Animator>
          </ScrollPage>
        </ScrollContainer>
      </Suspense>
    </section>
  );
};

export default Home;
