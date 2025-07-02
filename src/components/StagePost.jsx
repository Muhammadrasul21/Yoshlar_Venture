import React from 'react';

const StagePost = () => (
  <div className="flex flex-col items-start w-[398px] sm:w-[628px] text-black dark:text-white">
    <div className="mt-12 mb-[262px]">
      <p className="font-semibold text-[20px] mb-8">
        Startupingiz hozir qaysi bosqichda?
      </p>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4 items-center">
          <button
            className="text-white dark:text-black w-8 h-8 rounded-[8px] border border-[#F28E46] transition duration-300 active:bg-[#F28E46]"
          >&#10003;</button>
          <p>Gʼoya ( Idea )</p>
        </div>
        <div className="flex gap-4 items-center">
          <button
            className="text-white dark:text-black w-8 h-8 rounded-[8px] border border-[#F28E46] transition duration-300 active:bg-[#F28E46]"
          >&#10003;</button>
          <p>MVP ishlab chiqilmoqda</p>
        </div>
        <div className="flex gap-4 items-center">
          <button
            className="text-white w-8 h-8 rounded-[8px] border border-[#F28E46] bg-[#F28E46] transition duration-300"
          >&#10003;</button>
          <p>Post MVP ( MVP ishlab chiqilgan )</p>
        </div>
      </div>
    </div>
  </div>
);

export default StagePost; 