'use client'
import Image from "next/image";
import React, { useEffect, useState } from "react";


function Home() {
  const [isVisible, setIsVisible] = useState(false);

  const useCountUp = (endValue, start) => {
    const [value, setValue] = useState(0);

  
    useEffect(() => {
      if (!start) return;
  
      let startTimestamp;
      const duration = 2000; // animation duration in ms
  
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        setValue(Math.floor(progress * endValue));
  
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
  
      window.requestAnimationFrame(step);
    }, [start, endValue]);
  
     // Format the number with commas
  const formattedValue = new Intl.NumberFormat().format(value);

  return formattedValue;
  };

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  const animatedValues = {
    jobs: useCountUp(175324, isVisible),
    companies: useCountUp(97354, isVisible),
    candidates: useCountUp(3847154, isVisible),
    newJobs: useCountUp(7532, isVisible),
  };
  
  return (
    <div className="home-wrapper w-[98.9vw] h-fit max-sm:h-fit pb-5	 bg-gray-100  max-sm:px-[2vw]">
      <div className="section1   flex  items-center justify-evenly max-sm:inline p-2 ">
        <div className="left ">
          <p className="w-[652px] max-sm:w-[90vw]   text-zinc-900 text-[56px] max-sm:text-[9vw] max-sm:leading-9 font-medium font-['Inter'] leading-[64px]">
            Find a job that suits your interest & skills.
          </p>
          <p className="w-[536px] max-sm:w-[90vw] text-gray-500 text-lg max-sm:text-[4vw] font-normal font-['Inter'] leading-7 pt-5">
            Aliquam vitae turpis in diam convallis finibus in at risus. Nullam
            in scelerisque leo, eget sollicitudin velit bestibulum.
          </p>
        </div>
        <div className="right max-sm:pt-3">
          <Image
            src={"/assets/Illustration.png"}
            width={442}
            height={232}
            alt=""
          />
        </div>
      </div>
      <div className="section2 flex flex-wrap justify-evenly mt-5">
  {/* Jobs */}
  <div className={`jobs shadow-md w-[252px] h-20 p-4 bg-white rounded-lg flex items-center m-2 ${isVisible ? 'animate-fade-in delay-[100ms]' : ''}`}>
    <div className="w-[52px] h-[52px] p-3 bg-sky-100 rounded flex items-center justify-center">
      <Image width={50} height={50} src={'/assets/briefcase-duotone 1.png'} alt="pic"/>
    </div>
    <div className="textinfo px-3">
      <p className="text-zinc-900 text-xl font-medium font-['Inter']">{animatedValues.jobs}</p>
      <p className="text-gray-500 text-sm">Live Jobs</p>
    </div>
  </div>
  {/* Companies */}
  <div className={`companies shadow-md w-[252px] h-20 p-4 bg-white rounded-lg flex items-center m-2 ${isVisible ? 'animate-fade-in delay-[200ms]' : ''}`}>
    <div className="w-[52px] h-[52px] p-3 bg-blue-700 rounded flex items-center justify-center">
      <Image width={50} height={50} src={'/assets/buildings-duotone 1.png'} alt="pic"/>
    </div>
    <div className="textinfo px-3">
      <p className="text-zinc-900 text-xl font-medium font-['Inter']">{animatedValues.companies}</p>
      <p className="text-gray-500 text-sm">Companies</p>
    </div>
  </div>
  {/* Candidates */}
  <div className={`candidates shadow-md w-[252px] h-20 p-4 bg-white rounded-lg flex items-center m-2 ${isVisible ? 'animate-fade-in delay-[300ms]' : ''}`}>
    <div className="w-[52px] h-[52px] p-3 bg-sky-100 rounded flex items-center justify-center">
      <Image width={50} height={50} src={'/assets/users-duotone 1.png'} alt="pic"/>
    </div>
    <div className="textinfo px-3">
      <p className="text-zinc-900 text-xl font-medium font-['Inter']">{animatedValues.candidates}</p>
      <p className="text-gray-500 text-sm">Candidates</p>
    </div>
  </div>
  {/* New Jobs */}
  <div className={`new-jobs shadow-md w-[252px] h-20 p-4 bg-white rounded-lg flex items-center m-2 ${isVisible ? 'animate-fade-in delay-[400ms]' : ''}`}>
    <div className="w-[52px] h-[52px] p-3 bg-sky-100 rounded flex items-center justify-center">
      <Image width={50} height={50} src={'/assets/briefcase-duotone 1.png'} alt="pic"/>
    </div>
    <div className="textinfo px-3">
      <p className="text-zinc-900 text-xl font-medium font-['Inter']">{animatedValues.newJobs}</p>
      <p className="text-gray-500 text-sm">New Jobs</p>
    </div>
  </div>
</div>

    </div>
  );
}

export default Home;
