import React from 'react';

const HeroSection = () => {
  return (
    <section
      style={{
        backgroundImage: `url('/C.avif')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      className="container mx-auto rounded-md"
    >
    <div className='py-[300px] mt-4'>
        <h1 className='text-center text-4xl font-medium text-white'>Cart Page</h1>
    </div>
    </section>
  );
};

export default HeroSection;
