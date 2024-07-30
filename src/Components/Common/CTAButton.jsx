import React from 'react'

const CTAButton = ({text}) => {
  return (
    <div className='py-[10px] px-8 bg-[#387ED1] font-semibold  text-white rounded-[5px] text-[20px] cursor-pointer hover:bg-black transition-all duration-200'>
        {text}
    </div>
  )
}

export default CTAButton
