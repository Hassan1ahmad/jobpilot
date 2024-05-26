"use client";
import axios from "axios";
import Image from "next/image";
import React, { Suspense, useEffect, useMemo, useState } from "react";
import DOMPurify from "dompurify";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Loader from "@/components/Loader";
import { useRouter } from 'next/navigation'


function JobDetail() {
  const [detail, setDetail] = useState([]);
  const [searchJob, setsearchJob] = useState("");
  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const router = useRouter()
  const searchParams = useSearchParams();
  const search = useMemo(() => searchParams.get("jobTitle"), [searchParams]);
  useEffect(() => {
    if (search) {
      setsearchJob(search);
    }
  }, [search]);


  useEffect(() => {
    const fetchData = async () => {
      if (!searchJob) return setLoading(false);

      try {
        setLoading(true)
        setDetail([]);
        const response = await axios.get(
          `https://remotive.com/api/remote-jobs?search=${encodeURIComponent(searchJob)}`
        );
        setDetail(response.data.jobs);
        setLoading(false)
      } catch (error) {
        setError('Error fetching data');
            console.error('Error fetching data:', error);
            setLoading(false);
      }
    };

    fetchData();
  }, [searchJob]);

  const sanitizedDescription = DOMPurify.sanitize(detail[0]?.description);

  
  if (loading) {
    return <div className='h-[50vh] flex items-center justify-center'>
        <Loader/>
    </div>;
}

if (error) {
    return (
        <div className="h-[50vh] flex items-center justify-center">
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                <strong className="font-bold">Error: </strong>
                <span className="block sm:inline">{error}.  Please Try Again later</span>
            </div>
        </div>
    );
}

if(!searchJob){
  return router.push('/')
}

  

  return (
    <div className="">  
      {/* BreadCrumb */}
      <div className="BreadCrumb px-16 py-6 bg-gray-100 max-md:px-5">
        <div className="flex gap-5 justify-between w-full  max-md:flex-wrap max-md:max-w-full">
          <div className="text-lg font-medium leading-7 text-center text-zinc-900">
            Job Details
          </div>
          <div className="flex gap-2 my-auto text-sm leading-5 text-gray-500">
            <Link className=" cursor-pointer hover:underline" href={'/'}>Home</Link>
            <div>/</div>
            <Link className=" cursor-pointer hover:underline" href={'/findjobs'}>Find Job</Link>
            <div>/</div>
            <div className="cursor-pointer">{detail[0]?.category}</div>
            <div>/</div>
            <div className="text-zinc-900">Job Details</div>
          </div>
        </div>
      </div>
      {/* job details */}
      <div className="jobDetails  px-12 py-6 max-sm:px-6 max-sm:py-3 ">
        {/* job title + company name + type */}
        <div className="intro flex justify-between max-md:flex-wrap max-sm: max-md:gap-[5vw]">
          {/* Title */}
          <div className="title flex gap-2 items-center">
            <Image
              className="w-17 h-17 rounded-full"
              src="/assets/jon-icon.png"
              width={76}
              height={76}
              alt="job logo"
            />
            <div>
              {/* title */}
              <p className="text-zinc-900 text-xl max-sm:text-lg font-medium leading-loose max-sm:leading-tight">
                {detail[0]?.title}
              </p>
              <div className="flex gap-3 items-center">
                <p className="text-neutral-600 text-base">
                  at {detail[0]?.company_name}
                </p>
                <div className="bg-green-600 rounded px-3 py-1">
                  <span className="text-white text-sm font-semibold">
                    {detail[0]?.job_type}
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* apply */}
          <div className="apply">
            <button class="w-[248px] max-sm:w-[85vw] h-14 px-8 py-4 bg-blue-700 rounded justify-center items-center gap-3 flex">
              <a href={detail[0]?.url} target="blank" referrerPolicy="no-referrer" class="text-white text-base font-semibold font-['Inter'] capitalize leading-normal">
                Apply now
              </a>
              <a href=""></a>
              <div class=" text-white">
                <Image
                  src="/assets/fi_arrow-right.svg"
                  alt=""
                  width={18}
                  height={18}
                />
              </div>
            </button>
          </div>
        </div>
        <div className="details flex  gap-[45px] max-sm:gap-5 mt-10 max-md:flex-col-reverse	">
          {/* left content == description */}
          <div className="left w-[760px] max-sm:w-[90vw]">
            <div className="description font-['Inter']">
              <div class="  text-3xl p-5 max-sm:px-0 text-sky-400 font-mediumfont-['Inter'] leading-7">
                Job Description:
              </div>
              <div
                className="text-xl max-sm:text-base 	"
                dangerouslySetInnerHTML={{ __html: sanitizedDescription }}
              />
            </div>
          </div>
          {/* right content */}
          <div className="right ">
            {/* salery + location */}
            <div className="salery mb-10 w-[460px] max-sm:flex-col max-sm:w-[90vw] h-fit p-6 max-sm:p-2 bg-white rounded-lg border-2 border-sky-100 flex items-center gap-0 max-sm:gap-5">
              <div className=" flex  flex-col  gap-3 ">
                <p className="text-center text-zinc-900 text-base  font-medium">
                  Salary
                </p>
                <div className=" items-center gap-1">
                  <p className="text-center text-green-600 min-w-[205px] text-xl max-sm:text-base font-medium">
                    {detail[0]?.salary || 'Not specified'}
                  </p>
                </div>
              </div>
              <div class="w-24 h-[0px]  rotate-90 max-sm:rotate-180 border-2 border-sky-100"></div>
              <div className="flex flex-col justify-center items-center gap-0.5">
                <Image
                  src="/assets/MapTrifold.svg"
                  alt="map"
                  width={38}
                  height={38}
                />
                <p className="text-center text-zinc-900 text-base font-medium">
                  Job Location
                </p>
                <p className="text-center min-w-[150px] text-gray-500 text-base">
                  {detail[0]?.candidate_required_location}
                </p>
              </div>
            </div>
            {/* job date + tags + catagory */}
            <div className="date w-[460px] max-sm:w-[90vw] max-sm:gap-32 flex flex-col gap-20 h-fit p-10 bg-white rounded-lg border-2 border-sky-100 ">
              <div className="flex gap-10">
                {/* date */}
                <div class="self-stretch h-[42px] flex-col justify-start items-start gap-1 flex">
                  <Image
                    src="/assets/CalendarBlank.svg"
                    alt="map"
                    width={38}
                    height={38}
                  />
                  <div class="self-stretch text-gray-500 text-xs font-normal font-['Inter'] uppercase leading-[18px]">
                    Job Posted:
                  </div>
                  <div class="self-stretch text-zinc-900 text-base  font-medium font-['Inter'] leading-tight">
                    {detail[0]?.publication_date}
                  </div>
                </div>
                {/* catagory */}
                <div class="self-stretch h-[42px] flex-col justify-start items-start gap-1 flex">
                  <Image
                    src="/assets/Wallet.svg"
                    alt="map"
                    width={38}
                    height={38}
                  />
                  <div class="self-stretch text-gray-500 text-xs font-normal font-['Inter'] uppercase leading-[18px]">
                    Job category:
                  </div>
                  <div class="self-stretch text-zinc-900 text-base  font-medium font-['Inter'] leading-tight">
                    {detail[0]?.category}
                  </div>
                </div>
              </div>
              <div>
                {/* line */}
                <div class="w-[377px] max-sm:w-[70vw] h-[0px] border-2 border-sky-100"></div>
                <div>
                  {/* tags */}
                  <p className=" p-5 text-zinc-900 text-2xl font-medium leading-7">
                    Tags:
                  </p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {detail[0]?.tags?.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-sky-100 text-zinc-900 text-sm font-medium px-3 py-1 rounded-lg"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default function JobDetailWithSuspense() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <JobDetail />
    </Suspense>
  );
}
