import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function page() {

  return (
    <div>
      {/* BreadCrumb */}
      <div className="BreadCrumb px-16 py-6 bg-gray-100 max-md:px-5">
        <div className="flex gap-5 justify-between w-full  max-md:flex-wrap max-md:max-w-full">
          <div className="text-lg font-medium leading-7 text-center text-zinc-900">
            About us
          </div>
          <div className="flex gap-2 my-auto text-sm leading-5 text-gray-500">
            <Link className=" cursor-pointer hover:underline" href={'/'}>Home</Link>
            <div>/</div>
            <div className="text-zinc-900">About us</div>
          </div>
        </div>
      </div>
      {/* Content */}
<div className='flex flex-col md:flex-row md:space-x-8 px-20 max-sm:px-5 py-10 justify-between items-center'>
  {/* left side */}
  <div className="left md:w-1/2 mb-6 md:mb-0">
    <h2 className="text-sm text-sky-500  mb-4">Who we are?</h2>
    <p className="text-5xl max-sm:text-2xl font-[inter] font-bold mb-2">We&apos;re a highly skilled and professional team.</p>
    <p className="text-gray-700">
      Praesent non sem facilisis, hendrerit nisi vitae, volutpat quam. Aliquam metus mauris, semper eu eros vitae, blandit tristique metus. Vestibulum maximus nec justo sed maximus.
    </p>
  </div>
  {/* right side */}
  <div className="right flex flex-col space-y-4">
    {/* Jobs */}
    <div className="jobs shadow-lg w-full md:w-[252px] h-24 p-4 bg-white rounded-lg flex items-center">
      <div className="w-[52px] h-[52px] p-3 bg-sky-100 rounded-full flex items-center justify-center">
        <Image width={50} height={50} src={'/assets/briefcase-duotone 1.png'} alt="Jobs Icon"/>
      </div>
      <div className="textinfo px-3">
        <p className="text-zinc-900 text-xl font-medium">175,324</p>
        <p className="text-gray-500 text-sm">Live Jobs</p>
      </div>
    </div>
    {/* Companies */}
    <div className="companies shadow-lg w-full md:w-[252px] h-24 p-4 bg-white rounded-lg flex items-center">
      <div className="w-[52px] h-[52px] p-3 bg-blue-700 rounded-full flex items-center justify-center">
        <Image width={50} height={50} src={'/assets/buildings-duotone 1.png'} alt="Companies Icon"/>
      </div>
      <div className="textinfo px-3">
        <p className="text-zinc-900 text-xl font-medium">97,354</p>
        <p className="text-gray-500 text-sm">Companies</p>
      </div>
    </div>
    {/* Candidates */}
    <div className="candidates shadow-lg w-full md:w-[252px] h-24 p-4 bg-white rounded-lg flex items-center">
      <div className="w-[52px] h-[52px] p-3 bg-sky-100 rounded-full flex items-center justify-center">
        <Image width={50} height={50} src={'/assets/users-duotone 1.png'} alt="Candidates Icon"/>
      </div>
      <div className="textinfo px-3">
        <p className="text-zinc-900 text-xl font-medium">3,847,154</p>
        <p className="text-gray-500 text-sm">Candidates</p>
      </div>
    </div>
  </div>
</div>


      



    </div>
  )
}

export default page
