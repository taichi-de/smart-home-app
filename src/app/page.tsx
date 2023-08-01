'use client';

import RoomsBox from '@/components/RoomsBox';
import BottomSheet from '@/components/BottomSheet';
import { AppContext } from '@/stores/Provider';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Key, useState, useContext } from 'react';
import pic1 from '../../public//001.png';

export default function Home() {
  const { store, setStore } = useContext(AppContext);
  const boxVariants = {
    checked: { rotateY: 360 }
  };
  const [add, setAdd] = useState<boolean>(false);
  const data = [
    {
      id: 1,
      title: 'Living Room',
      devices: 7,
      active: false,
      srcPic: 'livingroom.png',
      color: 'bg-red-500'
    },
    {
      id: 2,
      title: 'Bed Room',
      devices: 3,
      active: false,
      srcPic: 'bedroom.png',
      color: 'bg-blue-500'
    },
    {
      id: 3,
      title: 'Bath Room',
      devices: 2,
      active: false,
      srcPic: 'bathroom.png',
      color: 'bg-yellow-500'
    }
  ];

  const HandleAdd = (num: number) => {
    const x = data.find(item => {
      return item.id === num;
    });
    if (x) {
      setStore('showData', [...store.showData, x]);
    }
    setAdd(false);
  };

  //FIXME:
  // const getInfo = async () => {
  //   const today = new Date();
  //   const date = `${today.getDate()} ${today.toLocaleString('default', {
  //     month: 'long'
  //   })} ${today.getFullYear()}`;

  //   try {
  //     const apiKey = process.env.WEATHER_API_KEY;
  //     const url = `https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=${apiKey}`;
  //     const response = await fetch(url);
  //     const data = await response.json();
  //     const temperature = `${Math.round(data.main.temp)}°C`;

  //     const weatherDiv = document.getElementById('weather');
  //     weatherDiv.innerHTML = `
  //       <div class="flex flex-col space-y-6 whitespace-nowrap text-white">
  //         <span class="font-semibold">${date}</span>
  //         <span class="text-7xl font-bold">${temperature}</span>
  //       </div>
  //     `;
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  // getInfo();

  return (
    <div className="px-6">
      <div className="flex items-center justify-between pt-12">
        <div className="grid grid-cols-2 gap-[7px]">
          <div className="h-[6px] w-[6px] rounded-full bg-black" />
          <div className="h-[6px] w-[6px] rounded-full bg-black" />
          <div className="h-[6px] w-[6px] rounded-full bg-black" />
          <div className="h-[6px] w-[6px] rounded-full bg-black" />
        </div>
        <div
          onClick={() => setStore('notif', !store.notif)}
          className="rounded-full bg-white p-3 shadow-[0px_0px_25px_rgba(0,0,0,0.25)]"
        >
          <motion.svg
            initial={false}
            animate={store.notif ? 'checked' : 'unchecked'}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            {!store.notif ? (
              <motion.path
                transition={{ duration: 1, ease: [0.04, 0.62, 0.23, 0.98] }}
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                variants={boxVariants}
              />
            ) : (
              <motion.path
                transition={{ duration: 1, ease: [0.04, 0.62, 0.23, 0.98] }}
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.143 17.082a24.248 24.248 0 003.844.148m-3.844-.148a23.856 23.856 0 01-5.455-1.31 8.964 8.964 0 002.3-5.542m3.155 6.852a3 3 0 005.667 1.97m1.965-2.277L21 21m-4.225-4.225a23.81 23.81 0 003.536-1.003A8.967 8.967 0 0118 9.75V9A6 6 0 006.53 6.53m10.245 10.245L6.53 6.53M3 3l3.53 3.53"
                variants={boxVariants}
              />
            )}
          </motion.svg>
        </div>
      </div>
      <div className="flex flex-col py-7">
        <span className="text-3xl font-bold">Hello, Roomy!</span>
        <span className="font-medium">Welcome back to your home</span>
      </div>
      <div className="flex h-auto w-full justify-between rounded-2xl border bg-gradient-to-r from-blue-500 to-blue-400 p-6 shadow-[0px_10px_30px_rgba(3,138,255,0.4)]">
        <div className="flex flex-col items-center space-y-3">
          <Image
            className="h-20 w-24 object-contain"
            loading="lazy"
            src={pic1}
            alt={''}
            width="0"
            height="0"
            sizes="100vw"
          />
          <span className="text-xl font-semibold text-white">Cloudy</span>
        </div>
        <div className="border" />
        {/* <div id="weather"></div> */}
        <div className="flex flex-col space-y-6 whitespace-nowrap text-white">
          <span className="font-semibold">27 July 2023</span>
          <span className="text-7xl font-bold">17°</span>
        </div>
      </div>
      <div className="flex justify-between py-6">
        <span className="text-3xl font-bold">Your Rooms</span>
        <div
          className="flex items-center rounded-xl bg-green-100 px-2"
          onClick={() => setAdd(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-5 w-5 stroke-green-700"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v12m6-6H6"
            />
          </svg>
          <span className="mr-1 text-sm font-bold text-green-700">Add</span>
        </div>
        <BottomSheet
          isOpen={add}
          onClose={() => setAdd(false)}
          title={'Add Rooms'}
        >
          <div className="mt-5 flex flex-col space-y-6">
            <span onClick={() => HandleAdd(1)}>Living Room</span>
            <span onClick={() => HandleAdd(2)}>Bed Room</span>
            <span onClick={() => HandleAdd(3)}>Bath Room</span>
          </div>
        </BottomSheet>
      </div>
      <div className="flex flex-col space-y-4">
        {store.showData?.map((item: any, i: Key | null | undefined) => (
          <RoomsBox item={item} key={i} />
        ))}
      </div>
    </div>
  );
}
