import React from 'react';
import Image from 'next/image';

const Answers = () => {
  return (
    <div className="flex flex-col">
      <div className="mt-10 w-80">
        <div className="px-4 py-2 bg-[#C7E4DD] rounded-md mb-2 hover:bg-[#A5D9CC]">
          A
        </div>
        <div className="px-4 py-2 bg-[#C7E4DD] rounded-md mb-2 hover:bg-[#A5D9CC]">
          B
        </div>
        <div className="px-4 py-2 bg-[#C7E4DD] rounded-md mb-2 hover:bg-[#A5D9CC]">
          C
        </div>
        <div className="px-4 py-2 bg-[#C7E4DD] rounded-md mb-2 hover:bg-[#A5D9CC]">
          D
        </div>
        <div className="px-4 py-2 bg-[#C7E4DD] rounded-md mb-2 hover:bg-[#A5D9CC]">
          E
        </div>
      </div>
    </div>
  );
};

export default Answers;
