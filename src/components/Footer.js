import React from 'react';
import LinkedIn from './../img/LinkedIn.svg';
import Insta from './../img/Insta.svg';
import Behance from './../img/behance.svg';
import Ball from './../img/Ball.svg';

function Footer() {
  return (
    <div className='text-center py-10 px-4'>
      <h2 className="md:mb-10 sm:mb-8 mb-6">Contacts</h2>
      <p className=" my-6">Want to know more or just chat? <br/> You are welcome!</p>
      <button className='bg-black rounded-full text-white sm:py-3 py-1 sm:px-8 sm:w-fit w-full text-lg'>Send message</button>
      <div className='py-10 w-fit mx-auto block'>
        <div className='flex items-center justify-between gap-x-10'>
          <img src={LinkedIn} alt="qwe"/>
          <img src={Insta} alt="qwe"/>
          <img src={Behance} alt="qwe"/>
          <img src={Ball} alt="qwe"/>
        </div>
      </div>
      <span className="text-sm text-[#828282] ">Like me on <br/> LinkedIn, Instagram, Behance, Dribble</span>
    </div>
  );
}

export default Footer;