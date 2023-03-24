import React from 'react';
import { GetStaticProps } from "next";





type PrayerTime = {
  date_for: string;
  fajr: string;
  dhuhr: string;
  asr: string;
  maghrib: string;
  isha: string;
}



type Props = {
  data1: PrayerTime[],
  data2: PrayerTime[],
  data3: PrayerTime[],
  data4: PrayerTime[],  
}

async function fetchPrayerTime(url: string): Promise<PrayerTime[]> {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.items as PrayerTime[];
  } catch (error) {
    console.error(`An error occurred while fetching ${url}`, error);
    return [];
  }
}



function Syria({data1, data2, data3,data4 }: Props) {
  return (
    <div className=' relative -top-[45rem] text-black  flex flex-col justify-center items-center space-y-20 '>
    
       <h1 className='w-auto h.12 bg-black text-white px-5 py-5' > there some think text wale your time </h1>

     <div className=' flex flex-col  justify-center items-cent space-y-5'>
       <button onClick={(e) => e.stopPropagation()}
       
       className='w-24 h-12 bg-black text-white '>first weekl </button>
       <button className='w-24 h-12 bg-black text-white '>first weekl </button>
       <button className='w-24 h-12 bg-black text-white '>first weekl </button>
       <button className='w-24 h-12 bg-black text-white '>first weekl </button>

     </div>










    {/*   {data1.map((item,index) => (
        <div key={index}>
          <h1> {item.date_for} </h1>
        </div>
      ))} */}
     
      </div>
   
  )
}



export const getStaticProps: GetStaticProps<Props> = async () => {
  const prayerDataPromises = [
    fetchPrayerTime("http://muslimsalat.com/syria/weekly/24-03-2023/true.json?key=705ad57b02ad96ff58f3ca25bc911a6b"),
    fetchPrayerTime("https://muslimsalat.com/syria/weekly/01-04-2023/true.json?key=705ad57b02ad96ff58f3ca25bc911a6b"),
    fetchPrayerTime("https://muslimsalat.com/syria/weekly/08-04-2023/true.json?key=705ad57b02ad96ff58f3ca25bc911a6b"),
    fetchPrayerTime("https://muslimsalat.com/syria/weekly/15-04-2023/true.json?key=705ad57b02ad96ff58f3ca25bc911a6b"),
  ]

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







export default Syria;