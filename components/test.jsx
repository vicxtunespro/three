export default function Navbar() {
  return (
    <div className="relative bg-gray-900 text-white h-16 flex items-center justify-around rounded-t-xl">
      {/* Curve SVG */}
      <svg
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-10"
        xmlns="http://www.w3.org/2000/svg"
        width="80"
        height="40"
        viewBox="0 0 100 50"
        fill="currentColor"
      >
        <path d="M0 50 Q50 -20 100 50 Z" />
      </svg>
      {/* Navbar Items */}
      <div className="flex justify-around w-full z-20">
        <div className="flex flex-col items-center">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7m-7 7h18m-5 5h5m-9 0v10m0-10h-5" />
          </svg>
          <span className="text-sm mt-1">Home</span>
        </div>
        <div className="flex flex-col items-center">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h18v6H3z" />
          </svg>
          <span className="text-sm mt-1">Search</span>
        </div>
        <div className="flex flex-col items-center">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 20H4l1-1h14l1 1zM7 9h10M8 12h8M10 15h4" />
          </svg>
          <span className="text-sm mt-1">Cart</span>
        </div>
        <div className="flex flex-col items-center">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z" />
          </svg>
          <span className="text-sm mt-1">Profile</span>
        </div>
      </div>
    </div>
  );
}
