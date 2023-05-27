import React from 'react';
import Image from 'next/image';

const Home2 = (props: { handleClick: () => Promise<void> }) => {
  const handleClick = () => {
    console.log('Botão clicado!');
  };

  return (
    <div className="flex flex-1 mt-10 items-center flex-col">
      <Image src="/Frame1.svg" alt="Fluxo" width={500} height={500} />
      <div className="mt-20 ml-20 mr-20 w-600 h-400 border border-black bg-[#C7E4DD] rounded-md overflow-auto">
        <div className=" whitespace-pre-wrap break-all">
          TEXTOooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooTEXTOooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooTEXTOooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooTEXTOooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooTEXTOooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooTEXTOoooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo
        </div>
      </div>
      <button
        className="btn btn-primary mt-10 bg-[#C7E4DD] text-white w-32 h-16  rounded-md"
        onClick={handleClick}
      >
        Avançar
      </button>
    </div>
  );
};

export default Home2;
