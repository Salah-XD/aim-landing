"use client";

import React from "react";
import Image from "next/image";
import { Typography } from "@material-tailwind/react";

const AboutUs = () => {
  return (
    <div className="container mx-auto text-center px-5 mt-[18rem] mb-24">
      <div className="text-5xl font-bold my-12">About Us</div>
      <div className="flex gap-7 flex-wrap justify-center items-center">

        <Image
          src="https://placehold.co/1000x1000"
          width={300}
          height={300}
          alt="logo"
        />
        <Typography variant="lead" className="leading-[1.5] sm:text-2xl text-xl  mt-4 lg:mt-0 lg:w-3/5  text-justify">
        Anbarasan is a business magnate and investor. He is the founder,
         CEO and chief engineer of Aim universse, CEO and Co-founder of Eminent technology, 
         Co-founder of AVTECHTWO and Business development manager of the Inouora technology.
        </Typography>
      </div>
    </div>
  );
};

export default AboutUs;
