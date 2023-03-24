import React from 'react'
import Link from 'next/link'


type Props = {}

function Footer({}: Props) {
  return (
    <footer className='relative flex flex-col bottom-0 '>
        <div className='  absolute -bottom-[46rem] flex space-x-5 items-center justify-center lg:left-[45%] md:left-[40%] sm:left-[35%] left-[28%] '>
            <Link href='/Syria'> <button className='h-6 w-11 bg-black'>Syr</button></Link>
            <Link href='/Turkey'> <button className='h-6 w-11 bg-black'>Tr</button></Link>
            <Link href='/De'> <button className='h-6 w-11 bg-black'>De</button></Link>
        </div>
        <p className='text-white text-[12px] md:text-base lg:text-lg xl:text-xl 2xl:text-lg  absolute  z-50 -bottom-[50rem] right-10 xl:right-[35%] lg:right-[35%] md:right-[30%] sm:right-[30%] flex flex-row '>Copyright © 2023 - All right reserved by Deaa Aldin Alawad</p>
        <div className='overflow-hidden relative -bottom-[52rem]  h-[5.1rem]   boxfooter' />
            
            
        
    </footer>

  )
}

export default Footer