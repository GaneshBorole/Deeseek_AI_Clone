import React from 'react'
import Sidebar from "./sidebar.jsx"
import Promt from './promt.jsx'

function Home() {
  return (
    <div className='flex h-screen bg-[#1e1e1e] text-white overflow-hidden'>
      {/* sidebar */}
        <div className='w-64 bg-[#232327]'><Sidebar /></div>
        {/* promt */}
        <div className='className="flex-1 flex flex-col w-full '>
        <div className='flex-1 flex items-center justify-center px-2 sm:px-6'><Promt /></div>
        </div>
    </div>
  )
}

export default Home