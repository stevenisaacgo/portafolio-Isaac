import React from "react";
import ComponentShowcase from "components/ComponentShowcase";
import NavButton, { navBtnCode } from "components/atoms/NavButton";
import ColourfullBtn, {
  colourfullBtnCode,
} from "../components/atoms/ColourfullBtn";
import Footer,{footerCode} from "../components/organisms/Footer";

const footerSections = [
  {
    title: 'Example',
    content: ['example', 'example', 'example'],
    links: ['', '', ''],
  }
];


export default function Projects() {
  return (
    <div className="bg-slate-900 text-white">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">
          Components Showcase
        </h1>
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Navbar Button</h2>
          <div className="flex flex-col lg:flex-row gap-8 items-center justify-between">
            <NavButton
              text="Example"
              className="hover:text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500"
            />
            <div className=" w-4/5">
            <ComponentShowcase code={navBtnCode} />
            </div>
          </div>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Colourfull Button</h2>
          <div className="flex flex-col lg:flex-row gap-8 items-center justify-between">
              <ColourfullBtn text="Example" />
              <div className=" w-4/5">
              <ComponentShowcase code={colourfullBtnCode} />
              </div>
          </div>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Footer</h2>
          <div className="flex flex-col lg:flex-col gap-8 items-start">
              <Footer sections={footerSections} textTitle="Title Example" textSubtitle="Subtitle Example"/>
              <ComponentShowcase code={footerCode} />
          </div>
        </div>
      </div>
    </div>
  );
}
