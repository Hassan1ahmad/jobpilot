'use client'
import axios from "axios";
import Image from "next/image";
import Joblisting from '@/components/Joblisting'
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Loader from "./Loader";


function Papular() {
    const [jobData, setJobData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setLoading(true)
      const response = await axios.get('https://remotive.com/api/remote-jobs?limit=9',
      );
      // Set the fetched data to the state variable jobData
      setJobData(response.data.jobs);
      setLoading(false)
    } catch (error) {
      setError('Error fetching data');
      console.error('Error fetching data:', error);
      setLoading(false);    }
  };
  

  useEffect(() => {
    fetchData();
  }, []);

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
  return (
    <div className="featured-wrapper px-16  max-sm:px-[2vw] border-y-2 py-10 max-sm:py-[6vw]">
      <div className="justify-between items-center flex pb-5">
        <p className=" text-gray-800 text-[40px] max-sm:text-[7vw] font-medium font-['Inter'] leading-[48px]">
          Featured Jobs
        </p>
        <Link href='/findjobs'>
        <button className="text-blue-700 flex items-center hover:bg-sky-100 text-base font-semibold font-['Inter'] capitalize leading-normal border border-sky-100 px-6 py-3 rounded-[3px] ">
          View All
          <Image
            src="/assets/fi_arrow-right.png" 
            alt="arrow"
            width={18}
            height={18}
          />
        </button>
        </Link>
      </div>
      <div  className="job-listings mt-10 max-sm:mt-5">
        <div className="list grid grid-cols-3 max-sm:grid-cols-1 gap-4">
      {jobData.map((job)=>(
          <Joblisting
          key={job.id}
          jobTitle={job.title}
          jobType={job.job_type}
          salaryRange={job.salary}
          companyName={job.company_name}
          location={job.candidate_required_location}
          imageUrl={job.company_logo_url}
        />
      ))
      }
      
   
        </div>
      </div>
    </div>
  );
}

export default Papular;
