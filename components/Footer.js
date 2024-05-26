import Image from "next/image";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div>
      <div className="footer-wrapper bg-zinc-900 px-16 max-sm:px-[2vw] max-sm:py-[2vw] py-10 flex max-sm:flex-col max-sm: gap-10 max-sm:gap-5 border-b-2 border-gray-500">
        {/* first div */}
        <div className="first">
          <div className=" h-36 flex-col justify-start items-start gap-6 inline-flex">
            <div className="justify-start items-center gap-2 inline-flex">
              <div className="w-10 h-10 relative">
                <Image
                  width={40}
                  height={40}
                  src="/assets/briefcase 1.png"
                  alt=""
                />
              </div>
              <div className="text-white text-2xl font-semibold font-['Inter'] leading-10">
                Jobpilot
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-3 flex">
              <div className="justify-start items-start inline-flex">
                <div className="text-gray-500 text-lg font-normal font-['Inter'] leading-7">
                  Call now:
                </div>
                <div className="text-white text-lg font-medium font-['Inter'] leading-7">
                  {" "}
                  (319) 555-0115
                </div>
              </div>
              <div className=" text-gray-500 max-w-[16.5rem] text-sm font-normal font-['Inter'] leading-tight">
                6391 Elgin St. Celina, Delaware 10299, New York, United States
                of America
              </div>
            </div>
          </div>
        </div>
        <div className="links grid grid-cols-4 max-sm:grid-cols-2 max-sm:gap-3 ">
        {/* 2nd div */}
        <div className="second">
          <div className="flex flex-col justify-start items-start gap-4">
            <div className=" text-white text-xl font-medium font-['Inter'] leading-loose">
              Quick Link
            </div>
            <ul className="flex flex-col justify-start items-start gap-1">
            <Link href="/about">
              <li className="list-item">About</li>
            </Link>
            <Link href="/comingSoon">
              <li className="list-item">Contact</li>
            </Link>
            <Link href="/comingSoon">
              <li className="list-item">Pricing</li>
            </Link>
            <Link href="/comingSoon">
              <li className="list-item">Blog</li>
            </Link>
            </ul>
          </div>
        </div>
        {/* 3rd div */}
        <div className="third">
          <div className="flex flex-col justify-start items-start gap-4 ">
            <div className=" text-white text-xl font-medium font-['Inter'] leading-loose">
              Candidate
            </div>
            <ul className="flex flex-col justify-start items-start gap-1 ">
            <Link href="/findjobs">
              <li className="list-item">Browse Jobs</li>
            </Link>
            <Link href="/comingSoon">
              <li className="list-item">Browse Employers</li>
            </Link>
            <Link href="/comingSoon">
              <li className="list-item">Candidate Dashboard</li>
            </Link>
            <Link href="/comingSoon">
              <li className="list-item">Saved Jobs</li>
            </Link>
            </ul>
          </div>
        </div>
        {/* 4th div */}
        <div className="fourth">
          <div className="flex flex-col justify-start items-start gap-4 ">
            <div className="w-[200px] text-white text-xl font-medium font-['Inter'] leading-loose">
              Employers
            </div>
            <ul className="flex-col justify-start items-start gap-1 flex">
            <Link href="/comingSoon">
              <li className="list-item">Post a Job</li>
            </Link>
            <Link href="/comingSoon">
              <li className="list-item">Browse Candidates</li>
            </Link>
            <Link href="/comingSoon">
              <li className="list-item">Employers Dashboard</li>
            </Link>
            <Link href="/comingSoon">
              <li className="list-item">Applications</li>
            </Link>
            </ul>
          </div>
        </div>
        {/* 5th div */}
        <div className="fifth">
          <div className="flex flex-col justify-start items-start gap-4 ">
            <div className=" text-white text-xl font-medium font-['Inter'] leading-loose">
              Support
            </div>
            <ul className="flex-col justify-start items-start gap-1 flex">
            <Link href="/comingSoon">
              <li className="list-item">Faqs</li>
            </Link>
            <Link href="/comingSoon">
              <li className="list-item">Privacy Policy</li>
            </Link>
            <Link href="/comingSoon">
              <li className="list-item">Terms & Conditions</li>
            </Link>
            </ul>
          </div>
        </div>
        </div>
      </div>
      <div className="text-center bg-zinc-900 ">
        <div className=" h-[68px] py-6 ">
          <div className="text-gray-500 text-sm text-[2.5vw] font-normal font-['Inter'] leading-tight">
            @ 2021 Jobpilot - Job Portal. All rights Rserved
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Footer;
