import Image from 'next/image'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className=" flex flex-col justify-center items-center bg-gray-100 p-5">
      <div className="flex flex-col lg:flex-row items-center gap-10 bg-white p-8 rounded-lg shadow-md">
        {/* Text Section */}
        <div className="text-center max-w-80 lg:text-left">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Our website is under construction</h2>
          <p className="text-gray-600 mb-4">
          The section is coming soon. Nulla cursus gravida interdum. Curabitur luctus sapien
          </p>
          <Link className="text-blue-500 hover:text-blue-700 underline" href="/">
          Return Home
          </Link>
        </div>
        {/* Image Section */}
        <div>
          <Image src="/assets/underContruction.svg" width={500} height={500} alt="404 Error" />
        </div>
      </div>
    </div>
  )
}
