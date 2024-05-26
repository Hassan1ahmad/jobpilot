import Link from "next/link";
import React from "react";

const list = (name, num) => {
  return (
    <div className=" group flex-col justify-start items-start  gap-2 max-sm:gap-1 inline-flex cursor-pointer   hover:text-blue-700	">
      <Link  href={{
        pathname: "/findjobs/jobSearch",
        query: { searchQuery:name },
      }}>
      <p className=" group-hover:underline   text-lg max-sm:text-[4vw] font-medium font-['Inter'] leading-7">
        {name}
      </p>
      </Link>
      <p className=" text-gray-500 text-sm max-sm:text-[3vw] font-normal 	 font-['Inter'] leading-tight">
        {num} Open Positions
      </p>
    </div>
  );
};

function Vacancies() {
  return (
    <div className="vac-wrapper    h-fit w-[97vw] px-9 max-sm:h-fit  max-sm:px-[4vw] py-[20px]    bg-white ">
      <p className=" text-zinc-900 text-[40px] max-sm:text-[7vw] font-medium font-['Inter'] leading-[48px]">
        Most Popular Vacancies
      </p>
      <div className="listing grid grid-cols-4 max-sm:grid-cols-2  gap-10 max-sm:gap-6 mt-10 max-sm:mt-4 ">
        {list("Copywriting & Content", "23,567")}
        {list("Technical Support", "17,432")}
        {list("Data Science", "56,789")}
        {list("Design & Creative", "40,123")}
        {list("Web & App Design", "37,890")}
        {list("DevOps & SysAdmin", "28,901")}
        {list("HR & Recruiting", "33,456")}
        {list("Marketing & Sales", "55,678")}
        {list("Sales", "45,321")}
        {list("SEO", "21,345")}
        {list("Social Media Marketing", "39,012")}
        {list("Programming", "64,567")}
        
      </div>
    </div>
  );
}

export default Vacancies;
