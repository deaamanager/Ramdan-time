import React from 'react';
import { GetStaticProps } from 'next';

type Props = {
  prayerTimes: Array<{
    date_for: [],
    fajr: [],
    isha:[],
 }>;
};

export default function Turkey({ prayerTimes }: Props) {
  return (
    <div className='absolute top-0 right-[50%]'>turkey
      {prayerTimes.map((item, index) => (
        <h1 key={index}>{item.date_for}  <p> {item.isha} </p>    </h1>
       
      ))}
    </div>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const [res, res1] = await Promise.all([
    fetch("https://muslimsalat.com/germany/monthly/24-03-2023/true.json?key=705ad57b02ad96ff58f3ca25bc911a6b"),
    fetch("https://muslimsalat.com/germany/monthly/01-04-2023/true.json?key=705ad57b02ad96ff58f3ca25bc911a6b"),
  ]);

  const data = {
    prayerTimes: [...(await res.json()).items, ...(await res1.json()).items],
  };

  return {
    props: data,
    revalidate: 3600, 
  };
}

// create next.js component and fetch  4 apis links with GetStaticProps and use map to show the data in the component i need every api link to be in a different component and i need to use map to show the data in the component