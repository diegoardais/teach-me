import React from 'react';
import Image from 'next/image';
import Questions from '../Componentes/Questions';

const Home4 = () => {
  return (
    <div className="flex flex-1 mt-10 items-center flex-col">
      <Image src="/Frame3.svg" alt="Fluxo" width={500} height={500} />
      <div className="mt-10 text-center text-2xl font-bold mb-20">
        Pergunta 10 de 10:
        <p className="mt-5 font-medium">Quanto é 1 + 1?</p>
        <Questions />
      </div>
    </div>
  );
};

export default Home4;
