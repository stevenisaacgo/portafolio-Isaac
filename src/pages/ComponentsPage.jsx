import React,{lazy, Suspense} from "react";
import Loader from "components/atoms/Loader.jsx";
import { navBtnCode } from "components/atoms/NavButton";
import { colourfulBtnCode } from "components/atoms/ColourfulBtn";
import { footerCode } from "components/organisms/Footer";

const footerSections = [
  {
    title: "Example",
    content: ["example", "example", "example"],
    links: ["", "", ""],
  },
];

const ComponentShowcase = lazy(() => import("components/organisms/ComponentShowcase"));
const Footer = lazy(() => import("components/organisms/Footer.jsx"));
const NavButton = lazy(() => import("components/atoms/NavButton"));
const ColourfulBtn = lazy(() => import("components/atoms/ColourfulBtn.jsx"));


const ComponentsPage = () =>  {
  return (
    <section className="bg-slate-900 text-white">
      <Suspense fallback={<Loader/>}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-8">Components Showcase</h1>
        
        <div className="pb-8">
          <h2 className="text-2xl font-semibold mb-4">Navbar Button</h2>
          <div className="flex flex-col gap-8 items-center justify-between">
            <NavButton
              text="Example"
              className="hover:text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500"
            />
            <div className="w-full lg:w-4/5">
              <ComponentShowcase code={navBtnCode} />
            </div>
          </div>
        </div>

        <div className="pb-8">
          <h2 className="text-2xl font-semibold mb-4">Colourful Button</h2>
          <div className="flex flex-col gap-8 items-center justify-between">
            <ColourfulBtn text="Example" />
            <div className="w-full lg:w-4/5">
              <ComponentShowcase code={colourfulBtnCode} />
            </div>
          </div>
        </div>

        <div className="pb-8">
          <h2 className="text-2xl font-semibold mb-4">Footer</h2>
          <div className="flex flex-col gap-8 items-center justify-between">
            <Footer
              sections={footerSections}
              textTitle="Title Example"
              textSubtitle="Subtitle Example"
            />
            <div className="w-full">
              <ComponentShowcase code={footerCode} />
            </div>
          </div>
        </div>
      </div>
      </Suspense>
    </section>
  );
}
export default ComponentsPage;
