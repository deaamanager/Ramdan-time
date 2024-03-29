import React, { useState } from "react";
import { GetStaticProps } from "next";
import Dragdrop from "@/components/Dragdrop";
import { motion, AnimatePresence } from "framer-motion";
import Head from "next/head";

type PrayerTime = {
  date_for: string;
  fajr: string;
  dhuhr: string;
  asr: string;
  maghrib: string;
  isha: string;
};

type Props = {
  data1: PrayerTime[];
  data2: PrayerTime[];
  data3: PrayerTime[];
  data4: PrayerTime[];
};

async function fetchPrayerTime(url: string): Promise<PrayerTime[]> {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.items as PrayerTime[];
  } catch (error) {
    // log error
    return [];
  }
}

function Germany({ ...Props }: Props) {
  const [Firstweek, setFirstweek] = useState<boolean>(false);
  const [Thrweek, setThrweek] = useState<boolean>(false);
  const [Scdweek, setScdweek] = useState<boolean>(false);
  const [Fortweek, setFortweek] = useState<boolean>(false);

  const close = () => (
    setFirstweek(false),
    setThrweek(false),
    setScdweek(false),
    setFortweek(false)
  );

  const handelClose = () => {
    close();
  };

  // the first week
  function Firstwek({ data1 }: Props) {
    const dropIn = {
      hidden: {
        y: "-100vh",
        opacity: 0,
      },
      visible: {
        y: "0",
        opacity: 1,
        transition: {
          duration: 0.1,
          type: "spring",
          damping: 25,
          stiffness: 500,
        },
      },
      exit: {
        y: "100vh",
        opacity: 0,
      },
    };
    return (
      <Dragdrop onClick={handelClose}>
        <motion.div
          variants={dropIn}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={(e) => e.stopPropagation()}
          className="absolute -top-[1rem] -right-[12.5rem] bg-[#111] text-gray-300 flex flex-col w-[24rem] h-[370px] m-auto rounded-xl  space-y-10 "
        >
          <div>
            <table className="table-auto border-collapse border border-gray-400 h-[100px] my-5 mx-5  w-16">
              <thead>
                <tr>
                  <th className="border border-gray-400 px-3 ">Data</th>
                  <th className="border border-gray-400 px-3 ">Fajr</th>
                  <th className="border border-gray-400 px-1 ">Dhuhr</th>
                  <th className="border border-gray-400 px-3 ">Asr</th>
                  <th className="border border-gray-400 px-1 ">Maghrib</th>
                  <th className="border border-gray-400 px-2 ">Isha</th>
                </tr>
              </thead>
              <tbody>
                {data1.map((item, index) => (
                  <tr key={index}>
                    <td className="border border-gray-400 px-2 text-[9px] ">
                      {item.date_for}
                    </td>
                    <td className="border border-gray-400 px-2 text-[9px] ">
                      {item.fajr}
                    </td>
                    <td className="border border-gray-400 px-2 text-[9px] ">
                      {item.dhuhr}
                    </td>
                    <td className="border border-gray-400 px-2 text-[9px] ">
                      {item.asr}
                    </td>
                    <td className="border border-gray-400 px-2 text-[9px] ">
                      {item.maghrib}
                    </td>
                    <td className="border border-gray-400 px-2 text-[9px] ">
                      {item.isha}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <button
            onClick={handelClose}
            className=" animate-pulse text-[#bba14f] "
          >
            close
          </button>
        </motion.div>
      </Dragdrop>
    );
  }

  // the second week
  function Secondweek({ data2 }: Props) {
    const dropIn = {
      hidden: {
        y: "-100vh",
        opacity: 0,
      },
      visible: {
        y: "0",
        opacity: 1,
        transition: {
          duration: 0.1,
          type: "spring",
          damping: 25,
          stiffness: 500,
        },
      },
      exit: {
        y: "100vh",
        opacity: 0,
      },
    };
    return (
      <Dragdrop onClick={handelClose}>
        <motion.div
          variants={dropIn}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={(e) => e.stopPropagation()}
          className=" absolute -top-[5rem] -right-[12.5rem] bg-[#111] text-gray-300 flex flex-col w-[24rem] h-[370px] m-auto rounded-xl  space-y-10"
        >
          <div>
            <table className="table-auto border-collapse border border-gray-400 h-[100px] my-5 mx-5  w-16">
              <thead>
                <tr>
                  <th className="border border-gray-400 px-3 ">Data</th>
                  <th className="border border-gray-400 px-3 ">Fajr</th>
                  <th className="border border-gray-400 px-1 ">Dhuhr</th>
                  <th className="border border-gray-400 px-3 ">Asr</th>
                  <th className="border border-gray-400 px-1 ">Maghrib</th>
                  <th className="border border-gray-400 px-2 ">Isha</th>
                </tr>
              </thead>
              <tbody>
                {data2.map((item, index) => (
                  <tr key={index}>
                    <td className="border border-gray-400 px-2 text-[9px] ">
                      {item.date_for}
                    </td>
                    <td className="border border-gray-400 px-2 text-[9px] ">
                      {item.fajr}
                    </td>
                    <td className="border border-gray-400 px-2 text-[9px] ">
                      {item.dhuhr}
                    </td>
                    <td className="border border-gray-400 px-2 text-[9px] ">
                      {item.asr}
                    </td>
                    <td className="border border-gray-400 px-2 text-[9px] ">
                      {item.maghrib}
                    </td>
                    <td className="border border-gray-400 px-2 text-[9px] ">
                      {item.isha}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <button
            onClick={handelClose}
            className="animate-pulse text-[#bba14f] "
          >
            close
          </button>
        </motion.div>
      </Dragdrop>
    );
  }

  // the third week
  function Thirdweek({ data3 }: Props) {
    const dropIn = {
      hidden: {
        y: "-100vh",
        opacity: 0,
      },
      visible: {
        y: "0",
        opacity: 1,
        transition: {
          duration: 0.1,
          type: "spring",
          damping: 25,
          stiffness: 500,
        },
      },
      exit: {
        y: "100vh",
        opacity: 0,
      },
    };
    return (
      <Dragdrop onClick={handelClose}>
        <motion.div
          variants={dropIn}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={(e) => e.stopPropagation()}
          className="absolute -top-[9.5rem] -right-[12.5rem] bg-[#111] text-gray-300 flex flex-col w-[24rem] h-[370px] m-auto rounded-xl  space-y-10"
        >
          <div>
            <table className="table-auto border-collapse border border-gray-400 h-[100px] my-5 mx-5  w-16">
              <thead>
                <tr>
                  <th className="border border-gray-400 px-3 ">Data</th>
                  <th className="border border-gray-400 px-3 ">Fajr</th>
                  <th className="border border-gray-400 px-1 ">Dhuhr</th>
                  <th className="border border-gray-400 px-3 ">Asr</th>
                  <th className="border border-gray-400 px-1 ">Maghrib</th>
                  <th className="border border-gray-400 px-2 ">Isha</th>
                </tr>
              </thead>
              <tbody>
                {data3.map((item, index) => (
                  <tr key={index}>
                    <td className="border border-gray-400 px-2 text-[9px] ">
                      {item.date_for}
                    </td>
                    <td className="border border-gray-400 px-2 text-[9px] ">
                      {item.fajr}
                    </td>
                    <td className="border border-gray-400 px-2 text-[9px] ">
                      {item.dhuhr}
                    </td>
                    <td className="border border-gray-400 px-2 text-[9px] ">
                      {item.asr}
                    </td>
                    <td className="border border-gray-400 px-2 text-[9px] ">
                      {item.maghrib}
                    </td>
                    <td className="border border-gray-400 px-2 text-[9px] ">
                      {item.isha}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <button
            onClick={handelClose}
            className="animate-pulse text-[#bba14f] "
          >
            close
          </button>
        </motion.div>
      </Dragdrop>
    );
  }

  // the fourth week
  function Fourthweek({ data4 }: Props) {
    const dropIn = {
      hidden: {
        y: "-100vh",
        opacity: 0,
      },
      visible: {
        y: "0",
        opacity: 1,
        transition: {
          duration: 0.1,
          type: "spring",
          damping: 25,
          stiffness: 500,
        },
      },
      exit: {
        y: "100vh",
        opacity: 0,
      },
    };
    return (
      <Dragdrop onClick={handelClose}>
        <motion.div
          variants={dropIn}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={(e) => e.stopPropagation()}
          className="absolute -top-[14rem] -right-[12.5rem] bg-[#111] text-gray-300 flex flex-col w-[24rem] h-[370px] m-auto rounded-xl space-y-10 "
        >
          <div>
            <table className="table-auto border-collapse border border-gray-400 h-[100px] my-5 mx-5  w-16">
              <thead>
                <tr>
                  <th className="border border-gray-400 px-3 ">Data</th>
                  <th className="border border-gray-400 px-3 ">Fajr</th>
                  <th className="border border-gray-400 px-1 ">Dhuhr</th>
                  <th className="border border-gray-400 px-3 ">Asr</th>
                  <th className="border border-gray-400 px-1 ">Maghrib</th>
                  <th className="border border-gray-400 px-2 ">Isha</th>
                </tr>
              </thead>
              <tbody>
                {data4.map((item, index) => (
                  <tr key={index}>
                    <td className="border border-gray-400 px-2 text-[9px] ">
                      {item.date_for}
                    </td>
                    <td className="border border-gray-400 px-2 text-[9px] ">
                      {item.fajr}
                    </td>
                    <td className="border border-gray-400 px-2 text-[9px] ">
                      {item.dhuhr}
                    </td>
                    <td className="border border-gray-400 px-2 text-[9px] ">
                      {item.asr}
                    </td>
                    <td className="border border-gray-400 px-2 text-[9px] ">
                      {item.maghrib}
                    </td>
                    <td className="border border-gray-400 px-2 text-[9px] ">
                      {item.isha}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <button
            onClick={handelClose}
            className="animate-pulse text-[#bba14f] "
          >
            close
          </button>
        </motion.div>
      </Dragdrop>
    );
  }

  return (
    <div className=" relative -top-[40rem] text-black  flex flex-col justify-center items-center space-y-20 ">
      <Head>
        <title>Ramadan Karym</title>
        <meta name="description" content="Generated by Deaa Aldin Alawad" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/male.ico" />
      </Head>

      <h1 className="city-text">اختر الأسبوع من الأسفل</h1>

      <div className=" flex flex-col  justify-center items-center space-y-5">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setFirstweek(!Firstweek)}
          className="week-btn "
        >
          الأسبوع الأول
        </motion.button>
        <AnimatePresence initial={false} onExitComplete={close}>
          {Firstweek && <Firstwek {...Props} />}
        </AnimatePresence>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setScdweek(!Scdweek)}
          className="week-btn"
        >
          الأسبوع الثاني
        </motion.button>
        <AnimatePresence initial={false} onExitComplete={close}>
          {Scdweek && <Secondweek {...Props} />}
        </AnimatePresence>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setThrweek(!Thrweek)}
          className="week-btn"
        >
          الأسبوع الثالث
        </motion.button>
        <AnimatePresence initial={false} onExitComplete={close}>
          {Thrweek && <Thirdweek {...Props} />}
        </AnimatePresence>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setFortweek(!Fortweek)}
          className="week-btn"
        >
          الأسبوع الرابع
        </motion.button>

        <AnimatePresence initial={false} onExitComplete={close}>
          {Fortweek && <Fourthweek {...Props} />}
        </AnimatePresence>
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const prayerDataPromises = [
    fetchPrayerTime(
      "http://muslimsalat.com/germany/weekly/23-03-2023/true.json?key=705ad57b02ad96ff58f3ca25bc911a6b"
    ),
    fetchPrayerTime(
      "https://muslimsalat.com/germany/weekly/30-03-2023/true.json?key=705ad57b02ad96ff58f3ca25bc911a6b"
    ),
    fetchPrayerTime(
      "https://muslimsalat.com/germany/weekly/06-04-2023/true.json?key=705ad57b02ad96ff58f3ca25bc911a6b"
    ),
    fetchPrayerTime(
      "https://muslimsalat.com/germany/weekly/13-04-2023/true.json?key=705ad57b02ad96ff58f3ca25bc911a6b"
    ),
  ];

  const [data1, data2, data3, data4] = await Promise.all(prayerDataPromises);
  return {
    props: {
      data1,
      data2,
      data3,
      data4,
    },
  };
};

export default Germany;
