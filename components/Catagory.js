import Image from "next/image";
import Link from "next/link";
import React from "react";

function Catagory() {
    function ListingItem({ title, count, imageURL }) { // Added closing parenthesis
        return (
          <Link href={{
            pathname: "/findjobs/jobSearch",
            query: { searchQuery:title },
          }}>
          <div className=" group flex max-sm:inline gap-4 p-6 max-sm:p-[2vw] cursor-pointer 	 bg-white rounded-xl transform transition duration-300 hover:scale-105 hover:shadow-lg hover:bg-white-100">
            <div className="flex justify-center items-center p-5 bg-sky-100 rounded-lg h-[68px] w-[68px]">
              <Image
                loading="lazy"
                src={imageURL}
                className="w-8 aspect-square group-hover:stroke-white"
                alt="pic"
                width={18}
                height={18}
              />
            </div>
            <div className="flex flex-col my-auto">
              
              <div className="text-base group-hover:text-blue-700	 font-medium leading-7 text-zinc-900">
                {title}
              </div>
              <div className="mt-2 max-sm:mt-0 text-sm  text-gray-500">
                {count} Open positions
              </div>
            </div>
          </div>
              </Link>
        );
      }
      

  return (
    <div className="px-16 max-sm:px-[6vw] border-b-2  py-10 max-sm:py-[2vw]">
      <div className="text-justify text-zinc-900 text-[40px] max-sm:text-[8vw] font-medium font-['Inter'] leading-[48px]">
        Popular category
      </div>

      <div className="cat-listing grid grid-cols-4 max-sm:grid-cols-2 gap-4 max-sm:gap-1 mt-10 max-sm:mt-4">
      <ListingItem title={'Graphic'} count={'223'} imageURL={"/assets/pen-nib-duotone 1.png"} />      
      <ListingItem title={'Code & Programing'} count={'312'} imageURL={"/assets/code-duotone 1.png"} />      
      <ListingItem title={'Digital Marketing'} count={'297'} imageURL={"/assets/megaphone-simple-duotone 1.png"} />      
      <ListingItem title={'Video & Animation'} count={'223'} imageURL={"/assets/monitor-play-duotone 1.png"} />      
      <ListingItem title={'Music & Audio'} count={'193'} imageURL={"/assets/music-notes-duotone 1.png"} />      
      <ListingItem title={'Account & Finance'} count={'148'} imageURL={"/assets/chart-bar-horizontal-duotone 1.png"} />      
      <ListingItem title={'Health & Care'} count={'173'} imageURL={"/assets/first-aid-kit-duotone 1.png"} />      
      <ListingItem title={'Data & Science'} count={'249'} imageURL={"/assets/database-duotone 1.png"} />      
      </div>

    </div>
  );
}

export default Catagory;
