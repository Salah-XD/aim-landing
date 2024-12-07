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
        Established in 2022, Aim Universse is a versatile and dynamic company offering a comprehensive range of services including BPO Services, Human Resource Solutions, Travel Solutions, and CCTV Solutions. Based on the pillars of innovation, reliability, and customer satisfaction, Aim Universse is committed to providing businesses with tailored solutions to meet their unique operational needs.

Our focus is on empowering businesses to achieve operational excellence, enhance productivity, and streamline processes. From managing customer support to offering advanced security solutions, we aim to be your trusted partner in business success.
        </Typography>
      </div>
    </div>
  );
};

export default AboutUs;
