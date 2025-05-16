
import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <div className={className}>
      <div className="flex flex-col items-center">
        {/* <div className="w-10 h-10 rounded-full bg-gold-gradient flex items-center justify-center text-white font-playfair font-bold">
          <span className="text-xs -mt-1">S</span>
          <span className="text-xs mt-1">J</span>
        </div> */}
        <img src="/siyajewels-logo.png" alt="" className='h-14' />
        <div className="text-sm font-playfair font-semibold -mt-2">Siya Jewels</div>
      </div>
    </div>
  );
};

export default Logo;
