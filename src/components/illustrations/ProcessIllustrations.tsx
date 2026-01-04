import React from 'react';

export function DiscoverIllustration({ className = "" }: { className?: string }) {
  return (
    <div className={`relative w-[314px] h-[312px] ${className}`}>
      {/* Background Shadow Vector */}
      <img 
        src="/image/mjz0oq6c-50noae8.svg" 
        className="absolute top-[19px] left-0 w-[314px] h-[290px] z-0" 
        alt="" 
      />
      {/* Foreground Illustration */}
      <img 
        src="/image/mjz0ibta-2x33mgb.svg" 
        className="absolute top-0 left-[1px] w-[312px] h-[312px] z-10 object-contain" 
        alt="Discover Illustration" 
      />
    </div>
  );
}

export function BuildIllustration({ className = "" }: { className?: string }) {
  return (
    <div className={`relative w-[339px] h-[326px] ${className}`}>
      {/* Background Shadow Vector */}
      <img 
        src="/image/mjz0p7bi-3c3e3is.svg" 
        className="absolute top-[27px] left-0 w-[339px] h-[280px] z-0" 
        alt="" 
      />
      {/* Foreground Illustration */}
      <img 
        src="/image/mjz0iiox-601ult5.svg" 
        className="absolute top-0 left-[6px] w-[326px] h-[326px] z-10 object-contain" 
        alt="Build Illustration" 
      />
    </div>
  );
}

export function GrowIllustration({ className = "" }: { className?: string }) {
  return (
    <div className={`relative w-[289px] h-[297px] ${className}`}>
      {/* Background Shadow Vector */}
      <img 
        src="/image/mjz0nbd0-dcvs5g6.svg" 
        className="absolute top-[6px] left-[6px] w-[274px] h-[309px] z-0" 
        alt="" 
      />
      {/* Foreground Illustration */}
      <img 
        src="/image/mjz0iq4r-8nvc3sz.svg" 
        className="absolute top-[-1px] left-[1px] w-[289px] h-[289px] z-10 object-contain" 
        alt="Grow Illustration" 
      />
    </div>
  );
}
