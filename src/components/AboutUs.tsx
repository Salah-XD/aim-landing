"use client";

import React from "react";
import Image from "next/image";
import { Typography } from "@material-tailwind/react";

const AboutUs = () => {
  return (
    <div className="container mx-auto text-center px-4 mt-[18rem] mb-24">
      <div className="text-5xl font-bold my-12">About Us</div>
      <div className="flex gap-7 flex-wrap justify-center">

        <Image
          src="https://placehold.co/1000x1000"
          width={300}
          height={300}
          alt="logo"
        />
        <span className="leading-[1.5] text-gray-600 mt-4 lg:mt-0 lg:w-3/5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
          temporibus sit est quia vero praesentium dolor saepe doloribus
          suscipit, dolores deserunt illo iste nemo! Deleniti minima dolor sint
          sit aspernatur voluptatem dignissimos in. Quod alias harum
          perspiciatis sequi cumque cupiditate consequuntur aut voluptate. Esse
          repellat enim ab consequuntur id vitae?
        </span>
      </div>
    </div>
  );
};

export default AboutUs;
