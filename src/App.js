import React, { useState } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Menu from "./modal/Menu";

import Denis from "./img/BSPP2266.png";
import DenisMobile from "./img/DenisMobile.png";
import Photoshop from "./img/Group.svg";
import Illustrator from "./img/Illustrator.svg";
import AfterEffects from "./img/AfterEffects.svg";
import Figma from "./img/Figma.svg";
import Star from "./img/Star.svg";
import StarFill from "./img/StarFill.svg";
import P1 from "./img/p1.png";
import P2 from "./img/p2.png";
import P3 from "./img/p3.png";


function App() {
  let [modal, setModal] = useState(false);
  return (
    <div>
      <div className='max-w-[1440px] mx-auto sm:pt-4'>
        <div className="px-4">
          <label class = "absolute top-4 right-4 cursor-pointer w-fit sm:hidden z-50">
            <input onClick={()=> setModal(!modal)} type="checkbox" id = "burger" name="menu" className="peer w-0 hidden"/>
            <div className="w-8 h-1 mt-1 bg-black peer-checked:rotate-45 peer-checked:translate-y-2 peer-checked:transition-all duration-300"></div>
            <div className="w-8 h-1 mt-1 bg-black peer-checked:opacity-0 peer-checked:-translate-y-36 transition-all duration-300 ease-in-out"></div>
            <div className="w-8 h-1 mt-1 bg-black peer-checked:-rotate-45 peer-checked:-translate-y-2 peer-checked:transition-all duration-300"></div>
          </label>
          { modal &&
            <div id="menu" className="animate-moveLeft absolute top-0 left-0 px-4 bg-white z-20 h-full w-full">
              <Menu/>
            </div>
          }
        </div>
        {
          <div id="main">
            <div className="xl:px-20 lg:px-14 md:px-10 px-4 relative">
              <div className="sm:block hidden">
                <Header/>
              </div>
              <div className="lg:flex items-end justify-between sm:py-8 py-2">
                <h2 className="text-black">Denis <br/> Novik</h2>
                <p className="text-black">UX | UI designer <br/> 24 years old, Minsk</p>
                <p className="text-black text-base -rotate-90 -translate-y-5 translate-x-7 lg:block hidden"><span className="text-[#828282]"> RU</span> | ENG</p>
              </div>
              <div className="w-full md:pb-20 sm:pb-16 pb-6 max-h-[1/2]">
                <img src={Denis} alt="nothing" className="w-full min-h-[171px] max-h-[500px] sm:block hidden"/>
                <img src={DenisMobile} alt="nothing" className="w-full min-h-[478px] max-h-[540px] sm:hidden block"/>
              </div>
            </div>
            <div className="bg-[#F6F6F6] py-20  w-full">
              <div className="text-center">
                <h2 className="mb-10">About me</h2>
                <p className="mb-6 ">Hi, I'm Denis – UX/UI designer from Minsk. <br/>
                    I'm interested in design and everything connected with it.</p>
                <p className="mb-6 ">
                  I'm studying at courses "Web and mobile design <br/>
                  interfaces" in IT-Academy.
                </p>
                <p className=" ">
                  Ready to implement excellent projects <br/>
                  with wonderful people.
                </p>
              </div>
            </div>  
            <div className="py-20 text-center">
              <h2 className="mb-10">Skills</h2>
              <p className=" my-6">I work in such programs as</p>
              <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-y-14">
                <div className="block mx-auto w-fit">
                  <img src={Photoshop} alt="qweqwe" className="w-fit mx-auto mb-2"/>
                  <span className="text-sm text-[#828282] ">Adobe <br/> Photoshop</span>
                  <div className="flex justify-between gap-x-2 mt-4">
                    <img src={Star} alt="start"/>
                    <img src={Star} alt="start"/>
                    <img src={Star} alt="start"/>
                    <img src={Star} alt="start"/>
                    <img src={StarFill} alt="start"/>
                  </div>
                </div>
                <div className="block mx-auto w-fit">
                  <img src={Illustrator} alt="qweqwe" className="w-fit mx-auto mb-2"/>
                  <span className="text-sm text-[#828282] ">Adobe <br/> Illustrator</span>
                  <div className="flex justify-between gap-x-2 mt-4">
                    <img src={Star} alt="start"/>
                    <img src={Star} alt="start"/>
                    <img src={Star} alt="start"/>
                    <img src={StarFill} alt="start"/>
                    <img src={StarFill} alt="start"/>
                  </div>
                </div>
                <div className="block mx-auto w-fit">
                  <img src={AfterEffects} alt="qweqwe" className="w-fit mx-auto mb-2"/>
                  <span className="text-sm text-[#828282] ">Adobe <br/> After Effects</span>
                  <div className="flex justify-between gap-x-2 mt-4">
                    <img src={Star} alt="start"/>
                    <img src={Star} alt="start"/>
                    <img src={Star} alt="start"/>
                    <img src={Star} alt="start"/>
                    <img src={StarFill} alt="start"/>
                  </div>
                </div>
                <div className="block mx-auto w-fit">
                  <img src={Figma} alt="qweqwe" className="w-fit mx-auto mb-4"/>
                  <span className="text-sm text-[#828282] ">Figma</span>
                  <div className="flex justify-between gap-x-2 mt-8">
                    <img src={Star} alt="start"/>
                    <img src={Star} alt="start"/>
                    <img src={Star} alt="start"/>
                    <img src={Star} alt="start"/>
                    <img src={StarFill} alt="start"/>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#F6F6F6] xl:px-20 lg:px-14 md:px-10 sm:px-4 py-20 text-center">
              <h2 className="mb-10">Portfolio</h2>
              <div>
                <img src={P1} alt="qwe" className="w-full h-auto mb-10"/>
                <p className=" underline underline-offset-4">Online fashion store - Homepage</p>
              </div>
              <div className="py-14">
                <img src={P2} alt="qwe" className="w-full h-auto mb-10"/>
                <p className=" underline underline-offset-4">Reebok Store - Concept</p>
              </div>
              <div>
                <img src={P3} alt="qwe" className="w-full h-auto mb-10"/>
                <p className=" underline underline-offset-4">Braun Landing Page - Concept</p>
              </div>
            </div>
            <Footer/>
          </div>
        }
      </div>
    </div>
  );
}

export default App;
