import React from 'react';

const Cards = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>

      {/* card*/}
      <div className='rounded-xl relative'>
        {/*overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
            <p className='font-bold text-2xl px-2 pt-4'>Finest Cuisine</p>
            <p className='px-2'>Within The Hour</p>
            <button className='border-white bg-white text-black mx-2 absolute bottom-4  hover:bg-orange-600 hover:text-white'>Order Now</button>
        </div>
        <img 
         className='max-h-[160px] md:max-h[200px] w-full object-cover rounded-xl'
        src="https://images.unsplash.com/photo-1432139555190-58524dae6a55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=876&q=80" alt="/" />
      </div>

      {/* card*/}
      <div className='rounded-xl relative'>
        {/*overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
            <p className='font-bold text-2xl px-2 pt-4'>Exquisite Dishes</p>
            <p className='px-2'>Within The Hour</p>
            <button className='border-white bg-white text-black mx-2 absolute bottom-4  hover:bg-orange-600 hover:text-white'>Order Now</button>
        </div>
        <img 
         className='max-h-[160px] md:max-h[200px] w-full object-cover rounded-xl'
        src="https://images.unsplash.com/photo-1624726175512-19b9baf9fbd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="/" />
      </div>

      {/* card*/}
      <div className='rounded-xl relative'>
        {/*overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white '>
            <p className='font-bold text-2xl px-2 pt-4'>Gourmet Delights</p>
            <p className='px-2'>Within The Hour</p>
            <button className='border-white bg-white text-black mx-2 absolute bottom-4  hover:bg-orange-600 hover:text-white'>Order Now</button>
        </div>
        <img 
         className='max-h-[160px] md:max-h[200px] w-full object-cover rounded-xl'
        src="https://images.unsplash.com/photo-1626804475297-41608ea09aeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="/" />
      </div>
    </div>
  );
}

export default Cards;
