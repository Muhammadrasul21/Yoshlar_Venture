import React from 'react';

const StageNow = () => (
  <div className="flex flex-col items-start w-[398px] sm:w-[628px]">
    <p className="font-semibold text-xl mb-8 mt-12">
      Startapning Hozirgi Bosqichiga Aloqador Ma'lumotlar
    </p>
    <div className="flex flex-col gap-4 mb-6">
      <p className="font-medium">
        Akseleratsiya yoki inkubatsiya dasturida qatnashganmisiz?
      </p>
      <div className="flex gap-1">
        <button
          className="w-[50px] h-[50px] rounded-full bg-[#F28E46] text-white text-[12px]"
        >Ha</button>
        <button
          className="border dark:border-[#535862] text-[12px] w-[50px] h-[50px] rounded-full text-[#535862] dark:text-[#FFFFFF]"
        >Yo'q</button>
      </div>
    </div>
    <div className="flex flex-col w-full gap-6 text-black dark:text-white">
      <div className="flex flex-col gap-1.5">
        <p className="text-[12px] font-medium">Dastur nomi</p>
        <input
          type="text"
          className="bg-[#F8F8F7] dark:bg-inherit dark:border dark:border-[#535862] dark:text-white rounded-[12px] h-[50px] w-full p-4 outline-none"
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <p className="text-[12px] font-medium">Yili</p>
        <input
          type="date"
          className="bg-[#F8F8F7] dark:bg-inherit dark:border dark:border-[#535862] dark:text-white rounded-[12px] h-[50px] w-[314px] p-4 outline-none"
        />
      </div>
      <div className="flex flex-col gap-4 mt-6">
        <p className="font-medium">Muvofaqqiyatli bitirganmidingiz?</p>
        <div className="flex gap-1">
          <button
            className="w-[50px] h-[50px] rounded-full text-[12px] border dark:border-[#535862] text-[#535862] dark:text-white"
          >Ha</button>
          <button
            className="w-[50px] h-[50px] rounded-full text-[12px] border dark:border-[#535862] text-[#535862] dark:text-white"
          >Yo'q</button>
        </div>
      </div>
      <div className="flex flex-col gap-4 mt-6 mb-12">
        <p className="font-medium">Startap tanlovlarida qatnashganmisiz?</p>
        <div className="flex gap-1">
          <button
            className="w-[50px] h-[50px] rounded-full text-[12px] border dark:border-[#535862] text-[#535862] dark:text-white"
          >Ha</button>
          <button
            className="w-[50px] h-[50px] rounded-full text-[12px] border dark:border-[#535862] text-[#535862] dark:text-white"
          >Yo'q</button>
        </div>
      </div>
    </div>
  </div>
);

export default StageNow; 