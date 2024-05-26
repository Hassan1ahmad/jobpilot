import JobFinder from '@/components/JobFinder'
import React from 'react'

function Findjob() {
  return (
    <div>
      <JobFinder URL={'limit=100'} Text={'Find Jobs'}/>
    </div>
  )
}

export default Findjob
