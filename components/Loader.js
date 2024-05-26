import React from 'react'

function Loader() {
  return (
    <div>
      <div class="w-full gap-x-2 flex justify-center items-center">
  <div
    class="w-5 bg-[#d991c2]  h-5 rounded-full animate-bounce"
  ></div>
  <div
    class="w-5  h-5 bg-[#9869b8] rounded-full animate-bounce"
  ></div>
  <div
    class="w-5 h-5  bg-[#6756cc] rounded-full animate-bounce"
  ></div>
</div>

    </div>
  )
}

export default Loader
