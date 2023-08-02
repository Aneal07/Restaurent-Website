import React from 'react'

const Footer = () => {
  return (
     <div className='max-w-[1640px] m-auto px-4 py-12'>
        <h1 className='text-orange-600 font-bold text-4xl text-center'>Bite Bound</h1>
        <p className='text-orange-600 text-center'>Copyright&copy; 2023 Bite Bound</p>
        <div className='grid grid-cols-3'>
         <div className='grid grid-cols-3 m-auto px-6 py-12'>
        <div>
          <p className='font-bold'>Follow Us</p>
          <div className='flex flex-col justify-start gap-3 cursor-pointer'>
            <p className='hover:text-orange-500'>Facebook</p>
            <p className='hover:text-orange-500'>Instagram</p>
            <p className='hover:text-orange-500'>Twitter</p>
          </div>
        </div>
            
          </div>
         <div className='grid grid-cols-3 m-auto px-6 py-12'>
        <div>
          <p className='font-bold'>Links</p>
          <div className='flex flex-col justify-start gap-3 cursor-pointer'>
                <a href="#" className='hover:text-orange-500'>Home</a>
                <a href="#" className='hover:text-orange-500'>Menu</a>
                <a href="#" className='hover:text-orange-500'>About Us</a>
          </div>
        </div>
            
          </div>
         <div className='grid m-auto px-6 py-12'>
        <div>
          <p className='font-bold'>Venue</p>
          <div className='flex flex-col justify-start gap-3'>
            <p>200 D-Block South Lane, UK</p>
            <p>Bitebound@outlook.com</p>
            <p>+44777777777</p>
          </div>
        </div>
            
          </div>
          </div>
    </div>
  )
}

export default Footer;