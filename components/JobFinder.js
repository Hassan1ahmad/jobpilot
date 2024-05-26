'use client'
import Joblisting from '@/components/Joblisting';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
import Loader from './Loader';
import Link from 'next/link';

function JobFinder({URL,Text}) {
    const [jobData, setJobData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [noJob, setNoJob] = useState(false);
    const jobsPerPage = 12; // Number of jobs per page

    
    useEffect(() => {
        const fetchData = async () => {
            if(URL){
                try {
                    setJobData([])
                    setLoading(true)
                    const response = await axios.get(`https://remotive.com/api/remote-jobs?${URL}`); // Adjust limit as necessary
                    setJobData(response.data.jobs);
                    setLoading(false);
                    if(response.data.jobs.length===0){
                        setNoJob(true)
                    }
                } catch (error) {
                    setError('Error fetching data');
                    console.error('Error fetching data:', error);
                    setLoading(false);
                }
            }
    };

        fetchData();
    }, [URL]);

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage * jobsPerPage < jobData.length) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePageClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const totalPages = Math.ceil(jobData.length / jobsPerPage);

    // Generate pagination numbers
    const generatePageNumbers = () => {
        const pageNumbers = [];
        const maxPagesToShow = 5; // Adjust as necessary

        if (totalPages <= maxPagesToShow) {
            // Show all page numbers if total pages are less than or equal to maxPagesToShow
            for (let i = 1; i <= totalPages; i++) {
                pageNumbers.push(i);
            }
        } else {
            const startPage = Math.max(1, currentPage - 2);
            const endPage = Math.min(totalPages, currentPage + 2);

            if (startPage > 1) {
                pageNumbers.push(1);
                if (startPage > 2) {
                    pageNumbers.push('...');
                }
            }

            for (let i = startPage; i <= endPage; i++) {
                pageNumbers.push(i);
            }

            if (endPage < totalPages) {
                if (endPage < totalPages - 1) {
                    pageNumbers.push('...');
                }
                pageNumbers.push(totalPages);
            }
        }

        return pageNumbers;
    };

    // Calculate current jobs to display
    const indexOfLastJob = currentPage * jobsPerPage;
    const indexOfFirstJob = indexOfLastJob - jobsPerPage;
    const currentJobs = jobData.slice(indexOfFirstJob, indexOfLastJob);

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

    if (noJob===true) {
        return (
            <div className="h-[50vh] flex items-center justify-center">
                <div className="bg-gray-100 border border-gray-300 text-gray-700 px-4 py-3 rounded" role="alert">
                    Currently No Job present
                </div>
            </div>
        );
    }
    
    
    

    return (
        <div>
            <div className="BreadCrumb px-16 py-6 bg-gray-100 max-md:px-5">
                <div className="flex gap-5 justify-between w-full max-md:flex-wrap max-md:max-w-full">
                    <div className="text-lg max-sm:text-base font-medium leading-7 text-center text-zinc-900">
                        {Text}
                    </div>
                    <div className="flex gap-2 my-auto text-sm leading-5 text-gray-500">
            <Link className=" cursor-pointer hover:underline" href={'/'}>Home</Link>
            <div>/</div>
            <div className="text-zinc-900">Find Job</div>
          </div>
                   
                </div>
            </div>

            <div className="job-listings p-10 max-sm:p-3 max-sm:mt-5">
                <div className="list grid grid-cols-3 max-sm:grid-cols-1 gap-4">
                    {currentJobs.map((job) => (
                        <Joblisting
                            key={job.id}
                            jobTitle={job.title}
                            jobType={job.job_type}
                            salaryRange={job.salary}
                            companyName={job.company_name}
                            location={job.candidate_required_location}
                            imageUrl={job.company_logo_url}
                        />
                    ))}
                </div>
            </div>

            <div className="pagination flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
                <div className="flex flex-col sm:hidden gap-5">
                    <div className='flex flex-1 justify-between w-[90vw]  '>
                    <button
                        onClick={handlePreviousPage}
                        disabled={currentPage === 1}
                        className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                    >
                        Previous
                    </button>
                    <button
                        onClick={handleNextPage}
                        disabled={currentPage * jobsPerPage >= jobData.length}
                        className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                    >
                        Next
                    </button>
                    </div>

                    <div>
                        <p className="text-sm text-center text-gray-700">
                            Showing <span className="font-medium">{indexOfFirstJob + 1}</span> to <span className="font-medium">{Math.min(indexOfLastJob, jobData.length)}</span> of{' '}
                            <span className="font-medium">{jobData.length}</span> results
                        </p>
                    </div>
                </div>
                <div className="hidden  sm:flex sm:flex-1 sm:items-center sm:justify-between">
                    <div>
                        <p className="text-sm  text-gray-700">
                            Showing <span className="font-medium">{indexOfFirstJob + 1}</span> to <span className="font-medium">{Math.min(indexOfLastJob, jobData.length)}</span> of{' '}
                            <span className="font-medium">{jobData.length}</span> results
                        </p>
                    </div>
                    <div>
                        <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                            <button
                                onClick={handlePreviousPage}
                                disabled={currentPage === 1}
                                className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                            >
                                <span className="sr-only">Previous</span>
                                <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                            </button>
                            {generatePageNumbers().map((pageNumber, index) =>
                                typeof pageNumber === 'number' ? (
                                    <button
                                        key={index}
                                        onClick={() => handlePageClick(pageNumber)}
                                        className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${currentPage === pageNumber ? 'bg-indigo-600 text-white' : 'text-gray-900'} ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0`}
                                    >
                                        {pageNumber}
                                    </button>
                                ) : (
                                    <span
                                        key={index}
                                        className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0"
                                    >
                                        {pageNumber}
                                    </span>
                                )
                            )}
                            <button
                                onClick={handleNextPage}
                                disabled={currentPage * jobsPerPage >= jobData.length}
                                className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                            >
                                <span className="sr-only">Next</span>
                                <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                            </button>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default JobFinder;
