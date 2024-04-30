import Image from 'next/image';
import React from 'react';

const Hero = () => {
  return (
    <div className="w-full h-full ">
      <div className="h-full border-2">
        <Image
          alt="Purwanchal Campus"
          width={10}
          height={10}
          className="w-full md:h-full object-contain md:object-cover object-center"
          src="/images/Hero/1.jpg"
          unoptimized
        />
      </div>
    </div>
  );
};

export default Hero;
