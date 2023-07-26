import React from "react";
import Link from "next/link";

function Links() {
  return (
    <div className="absolute -top-[24rem] md:-top-[25.5rem] flex flex-row items-center justify-evenly h-16 my-8 w-full space-x-2 md:space-x-4">
      <Link href="/Syria">
        <button className="btn-countreis">سوريا</button>
      </Link>
      <Link href="/Egypt">
        <button className=" btn-countreis">مصر</button>
      </Link>
      <Link href="/Germany">
        <button className="btn-countreis">المانيا</button>
      </Link>
      <Link href="/Sudi">
        <button className="btn-countreis">السعودية</button>
      </Link>
      <Link href="/Turkey">
        <button className="btn-countreis">تركيا</button>
      </Link>
      <Link href="/Jordan">
        <button className="btn-countreis">الأردن</button>
      </Link>
    </div>
  );
}

export default Links;
