import React from 'react';
import Image from 'next/image';

const Home3 = () => {
  return (
    <div className="flex flex-1 mt-10 items-center flex-col">
      <div>
        <Image src="/Frame2.svg" alt="Fluxo" width={500} height={500} />
        <div className="mt-10 ml-10">
          <Image src="/yt.svg" alt="Fluxo" width={400} height={400} />
        </div>
      </div>
    </div>
  );
};

export default Home3;
