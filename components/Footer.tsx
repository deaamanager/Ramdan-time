import React from "react";
import Link from "next/link";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

type Props = {};

function Footer({}: Props) {
  return (
    <footer className="relative flex flex-col  overflow-hidden -top-24 ">
      <div className="space-x-4  flex  items-center justify-center  ">
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
          <SocialIcon
            url="https://api.whatsapp.com/send/?phone=491630299378&text&type=phone_number&app_absent=0"
            fgColor="#075e54"
            bgColor="transparent"
          />
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
          <SocialIcon
            url="https://www.linkedin.com/in/deaa-aldin-alawad/"
            fgColor="#0072b1 "
            bgColor="transparent"
          />
        </motion.div>
      </div>
      <p className="text-white text-[12px] md:text-base lg:text-lg xl:text-xl 2xl:text-lg absolute z-50 -bottom-[50rem] right-10 xl:right-[35%] lg:right-[35%] md:right-[30%] sm:right-[30%] flex flex-row "></p>
      <div className="overflow-hidden relative  top-0  h-[4.8rem] boxfooter z-50">
        <p className="relative text-sm md:text-base z-50 text-center top-8 text-gray-300">
          {" "}
          Copyright © 2023 - All right reserved by{" "}
          <span className="underline hover:text-[#bba14f] ">
            <Link href="https://frontend-react-brown.vercel.app/">
              Deaa Aldin Alawad
            </Link>
          </span>{" "}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
