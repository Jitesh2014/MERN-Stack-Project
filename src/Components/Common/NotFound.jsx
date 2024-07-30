import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="w-11/12 mx-auto mb-20">
      <div className="flex justify-center flex-col items-center gap-6 ">
        <h1 className="mt-5 " style={{fontSize:"3rem", opacity:"0.9"}}>404 Not Found</h1>
        <p className="mt-1 text-lg">Sorry the page you are looking for does not exist."</p>
        <Link to="/">
          <button
            className="py-2 px-5 bg-blue-500 text-white text-base font-semibold mt-4 mb-5 "
            style={{ margin: "0 auto", }}
          >
           Back To Home
          </button>
        </Link>
      </div>
    </div>
  )
}

export default NotFound
