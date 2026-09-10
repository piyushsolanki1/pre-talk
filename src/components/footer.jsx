import React from 'react'

const footer = () => {
  return (
    <div>
        <footer className="bg-[#0B0B0F] border-[#1D1D26] text-white py-8 border-t">
            <div className="container mx-auto px-4 text-center">
            <p className="text-sm text-[#b6b3cd]">
                &copy; {new Date().getFullYear()} Your Company. All rights reserved.
            </p>
            </div>
        </footer>
    </div>
  )
}

export default footer