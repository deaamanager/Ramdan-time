import Head from "next/head";
import Image from "next/image";

type props = {
  prayerTimes: {
    [prayer: string]: string;
  };
};

export default function index({}: props) {
  return (
    <div className="absolute top-0 h-screen w-full max-w-full flex flex-col items-center overflow-hidden ">
      <Head>
        <title>Ramadan Karym</title>
        <meta name="description" content="Generated by Deaa Aldin Alawad" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/male.ico" />
      </Head>

      <div className="h-8 my-4 w-full" />

      <div className="w-[20rem] h-[27rem] rounded-2xl backdrop-brightness-50 flex flex-col justify-center items-center my-[4.5rem]  ">
        <div className="">
          <Image
            src="/quran.png"
            alt="quran-deaa"
            width={250}
            height={250}
            className=" object-cover mix-blend-screen"
            placeholder={"empty"}
          />
        </div>

        <div className="flex justify-center items-center flex-col text-gray-300 pb-5">
          <h1 className="text-right">بسم الله الرحمن الرحيم</h1>
          <p className="text-right mx-3">
            اهلا وسهلا بكم أخواني و أخواتي في الأمساكية الألكتروني ، اختر البلد
            الذي تقيم به من الآعلى لعرض لك الأمساكية الخاصة بالبلد المقيم به
          </p>
        </div>
      </div>
    </div>
  );
}
