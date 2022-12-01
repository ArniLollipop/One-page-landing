import React from 'react';

function Header() {
  return (
    <div>
      <div className='flex justify-between items-center pb-8 pt-3 border-b border-black'>
        <button className=' col-span-2'>
          <p className=' text-lg'>Home</p>
        </button>
        <button className=' col-span-2'>
          <p className=' text-lg hover:text-black text-[#828282]'>About me</p>
        </button>
        <button className=' col-span-2'>
          <p className=' text-lg hover:text-black text-[#828282]'>Skills</p>
        </button>
        <button className=' col-span-2'>
          <p className=' text-lg hover:text-black text-[#828282]'>Portfolio</p>
        </button>
        <button className=' col-span-1'>
          <p className=' text-lg hover:text-black text-[#828282]'>Contacts</p>
        </button>
      </div>  
    </div>
  );
}

export default Header;