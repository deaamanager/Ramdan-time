import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { useState } from 'react';

type SalahTime = {
  Fajr: string;
  Dhuhr: string;
  Asr: string;
  Maghrib: string;
  Isha: string;
};

type CalendarData = {
  date: {
    readable: string;
  };
  timings: SalahTime;
};

type CalendarProps = {
  data: CalendarData[];
};

const Maka = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [calendarData, setCalendarData] = useState<CalendarData[]>(data);

 

  return (
    <div className="max-w-7xl mx-auto p-4 absolute top-0 h-[200px]  ">
      <table className="table-auto border-collapse border border-gray-400 h-[100px] w-16">
        <thead>
          <tr>
            <th className="border border-gray-400 px-4 ">Date</th>
            <th className="border border-gray-400 px-4 ">Fajr</th>
            <th className="border border-gray-400 px-4 ">Dhuhr</th>
            <th className="border border-gray-400 px-4 ">Asr</th>
            <th className="border border-gray-400 px-4 ">Maghrib</th>
            <th className="border border-gray-400 px-4 ">Isha</th>
          </tr>
        </thead>
        <tbody>
          {calendarData.map((day) => (
            <tr key={day.date.readable}>
              <td className="border border-gray-400 px-4 text-[7px] ">{day.date.readable}</td>
              <td className="border border-gray-400 px-4 text-[7px] ">{day.timings.Fajr}</td>
              <td className="border border-gray-400 px-4 text-[7px] ">{day.timings.Dhuhr}</td>
              <td className="border border-gray-400 px-4 text-[7px] ">{day.timings.Asr}</td>
              <td className="border border-gray-400 px-4 text-[7px] ">{day.timings.Maghrib}</td>
              <td className="border border-gray-400 px-4 text-[7px] ">{day.timings.Isha}</td>
            </tr>
          ))}
        </tbody>
      </table>
    
    </div>
  );
};

export const getStaticProps: GetStaticProps<CalendarProps> = async () => {
  const res = await fetch(
  'https://api.aladhan.com/v1/calendarByCity?city=Makkah&country=SaudiArabia&method=2&month=3&year=2023'

   
    
  );
 
     
  const data = await res.json();
  return { props: { data: data.data } };
};

export default Maka;
