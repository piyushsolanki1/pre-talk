import React from 'react'

const footer = () => {
  return (
    <div>
        <footer className="bg-gray-200 text-white py-4 border-t">
            <div className="container mx-auto px-4 text-center">
            <p className="text-sm text-gray-600 font-semibold">
                &copy; {new Date().getFullYear()} Your Company. All rights reserved.
            </p>
            </div>
        </footer>
    </div>
  )
}

export default footer