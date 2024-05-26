import React, { useState } from 'react'

import Image from "next/image";
import Link from 'next/link';

function Joblisting ({
    jobTitle,
    jobType,
    salaryRange,
    companyName,
    location,
    imageUrl,
 })  {

  const [imageSrc, setImageSrc] = useState(imageUrl);


    return (
      <div className="list group cursor-pointer ">
        <div className="flex flex-col p-6 rounded-lg border border-solid shadow-sm border-zinc-200 max-w-[424px] ">
          <Link href={{ pathname: '/findjobs/jobDetail', query: {jobTitle} }} className="text-lg font-medium leading-7 text-zinc-900 group-hover:underline">
            {jobTitle.length > 34 ? jobTitle.substring(0,34)+'....' : jobTitle}
          </Link>
          <div className="flex gap-2 mt-1.5">
            <div className="justify-center px-2 py-1 text-xs font-semibold leading-3 text-green-600 uppercase whitespace-nowrap bg-green-100 rounded">
              {jobType || 'Not-Given'}
            </div>
            <div className="text-sm leading-5 text-gray-500">
              Salary: {salaryRange.length > 25 ? salaryRange.substring(0,25)+'....' : salaryRange || 'Not Specified'}

            </div>
          </div>
          <div className="flex gap-3 justify-center mt-5">
            <div className="flex justify-center items-center p-3 w-12 h-12 bg-gray-100 rounded">
              <Image
                src={imageSrc}
                className="w-6 aspect-square"
                alt=""
                width={18}
                height={18}
                onError={()=>{setImageSrc('/assets/jon-icon.png')}}
              />
            </div>
            <div className="flex flex-col flex-1">
              <div className="text-base font-medium leading-6 text-zinc-900">
                {companyName.length > 27 ? companyName.substring(0,27)+'...' : companyName} 
              </div>
              <div className="flex gap-1 mt-1 text-sm leading-5 text-gray-500">
                <Image
                  src="/assets/MapPin.png" 
                  className="shrink-0 self-start aspect-square w-[18px]"
                  alt=""
                  width={18}
                  height={18}
                  />
                 
                <div className="flex-1">{location && location.split(',')[0]}</div>
              </div>
            </div>
            <Image
              src="/assets/BookmarkSimple.png" 
              className="shrink-0 my-auto w-6 aspect-square"
              alt=""
              width={18}
              height={18}
            />
          </div>
        </div>
      </div>
    );
  };
  

export default Joblisting
