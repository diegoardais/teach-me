'use client';

import { useCallback, useState } from 'react';
import Header from './Componentes/Header';
import Home1 from './Pages/LandingPage';
import Home2 from './Pages/TrailPage';
import Home3 from './Pages/Home3';
import Home4 from './Pages/Home4';
import Home5 from './Pages/Home5';
import SearchBar from './Componentes/SearchBar';
import Trails from './Componentes/Trails';

export default function Home() {
  const [submited, setSubmited] = useState(false);
  const onSubmit = async () => {
    //todo:call backend
    console.log('asdasdasdasd');
    setSubmited(true);
  };

  const handleClick = async () => {};

  return (
    <div className="flex flex-col justify-center">
      <Header />
      <div className="flex">
        <div>
          <Trails />
        </div>
        {submited ? (
          <Home2 handleClick={handleClick} />
        ) : (
          <Home1 onSubmit={onSubmit} />
        )}
      </div>
    </div>
  );
}
