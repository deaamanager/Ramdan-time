import React from 'react'
import Link from 'next/link';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';



type Props = {}

function Footer({}: Props) {
  return (
    <footer className='relative flex flex-col bottom-8 md:-bottom-[2rem] '>
        <div className='  absolute -bottom-[46rem] flex space-x-5 items-center justify-center lg:left-[45%] md:left-[40%] sm:left-[35%] left-[35%] '>
            <motion.div
            initial={{
              x: 500,
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              x: 0,
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1.5,
            }}
            >
            <SocialIcon  url="https://www.facebook.com/profile.php?id=100078049085080"fgColor="	#4267B2"
            bgColor="transparent"  />
            </motion.div>
           
           <motion.div
            initial={{
              x: -500,
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              x: 0,
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1.5,
            }}
           >
           <SocialIcon  url="https://www.linkedin.com/in/deaa-aldin-8a706a257/" fgColor="#0072b1 "
            bgColor="transparent" />
           </motion.div>
            

        </div>
        <p className='text-white text-[12px] md:text-base lg:text-lg xl:text-xl 2xl:text-lg  absolute  z-50 -bottom-[50rem] right-10 xl:right-[35%] lg:right-[35%] md:right-[30%] sm:right-[30%] flex flex-row '>Copyright © 2023 - All right reserved by Deaa Aldin Alawad</p>
        <div className='overflow-hidden relative -bottom-[52rem]  h-[5.1rem]   boxfooter' />
            
            
        
    </footer>

  )
}

export default Footer