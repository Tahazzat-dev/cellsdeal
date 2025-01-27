import React from 'react'

type SectionHead = {
    topSubTitle: string,
    title: string,
    subtitle: string,
    pClassName?:string,
}


function SectionHead({topSubTitle,title,subtitle,pClassName }:SectionHead) {
  return (
      <div className=' container mx-auto'>
          <p className='fs-md section-top-subtitle'>{topSubTitle}</p>
          <h2 className=' text-[32px] font-bold pt-[15px] capitalize mb-5 lg-[36px]'>{title}</h2>
          <p className={` font-normal text-base  leading-[30px] text-[#777] ${pClassName}`}>{subtitle}</p>
           
      </div>
  )
}

export default SectionHead