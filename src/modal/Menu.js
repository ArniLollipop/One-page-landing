import React from 'react';

function Menu(props) {
  return (
    <div className='w-full pt-3 h-full bg-white'>
      <div className='grid grid-cols-1 gap-y-10'>
        <button className='text-start'><h2>Home</h2></button>
        <button className='text-[#828282] text-start'><h2>About me</h2></button>
        <button className='text-[#828282] text-start'><h2>Skills</h2></button>
        <button className='text-[#828282] text-start'><h2>Portfolio</h2></button>
        <button className='text-[#828282] text-start'><h2>Contacts</h2></button>
      </div>
    </div>
  );
}

export default Menu;