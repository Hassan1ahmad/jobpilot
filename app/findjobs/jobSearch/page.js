'use client'
import JobFinder from '@/components/JobFinder';
import { useSearchParams } from 'next/navigation';
import React, { Suspense, useEffect, useMemo, useState } from 'react'

function JobSearch() {
    const [searchJob, setsearchJob] = useState("");


    const searchParams = useSearchParams();
    // const search = useMemo(() => searchParams.get("searchQuery"), [searchParams]);
    const search = searchParams.get('searchQuery')
    useEffect(() => {
      if (search) {
        setsearchJob(search);
      }
    }, [search]);  
   

  
  return (
    <div>
      <JobFinder URL={`search=${encodeURIComponent(searchJob)}`} Text={`Search jobs for ${searchJob}`} />
    </div>
  )
}

export default function JobSearchWithSuspense() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <JobSearch />
    </Suspense>
  );
}
