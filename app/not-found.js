import Image from 'next/image'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className=" flex flex-col justify-center items-center bg-gray-100 p-5">
      <div className="flex flex-col lg:flex-row items-center gap-10 bg-white p-8 rounded-lg shadow-md">
        {/* Text Section */}
        <div className="text-center max-w-80 lg:text-left">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Oops! Page not found</h2>
          <p className="text-gray-600 mb-4">
            Something went wrong. It looks like the link is broken or the page has been removed.
          </p>
          <Link className="text-blue-500 hover:text-blue-700 underline" href="/">
          Return Home
          </Link>
        </div>
        {/* Image Section */}
        <div>
          <Image src="/assets/robot-404-error-errors.svg" width={500} height={500} alt="404 Error" />
        </div>
      </div>
    </div>
  )
}
