import React from 'react';
import Image from 'next/image';

const Header = () => {
  return (
    <div className="bg-[#C7E4DD] text-black h-24 flex items-center">
      {/* <div className="ml-20 text-3xl">TEACH.ME</div> */}
      <div className="ml-20">
        <Image src="/Logo_sem_fundo.svg" alt="logo" width={250} height={250} />
      </div>
      <div className="flex ml-auto mr-20 space-x-4">
        <div className="hover:underline">Trilhas</div>
        <div className="hover:underline">Contato</div>
        <div className="hover:underline">Sobre</div>
      </div>
    </div>
  );
};

export default Header;
