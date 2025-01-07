"use client";

import React from "react";
import { Button, Typography, Card, CardBody } from "@material-tailwind/react";
import { TypographyProps } from "@material-tailwind/react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

import {
  GlobeEuropeAfricaIcon,
  MicrophoneIcon,
  PuzzlePieceIcon,
  HeartIcon,
} from "@heroicons/react/24/solid";

import CategoryCard from "@/components/category-card";

// Define types for categories
// Updated Category interface

interface Category {
  img: string;
  icon: ForwardRefExoticComponent<
    React.SVGProps<SVGSVGElement> & RefAttributes<SVGSVGElement>
  >;
  title: string;
  desc: string;
}

// Categories with icons
const CATEGORIES: Category[] = [
  {
    img: "/image/blogs/blog-3.png",
    icon: HeartIcon, // No cast needed if interface is updated
    title: "BPO Services",
    desc: "Our Business Process Outsourcing (BPO) services help businesses optimize operations, reduce costs, and focus on their core competencies. We offer a range of BPO services, including customer support, data processing, back-office management, and more. By outsourcing to us, businesses can improve efficiency and ensure high-quality outcomes.",
  },
  {
    img: "/image/blogs/blog-12.png",
    icon: PuzzlePieceIcon,
    title: "Human Resource Solutions",
    desc: "Our Human Resource (HR) services are designed to support organizations in managing their workforce more effectively. From recruitment and onboarding to payroll management and employee benefits, we provide end-to-end HR solutions that help you attract, retain, and develop top talent. Let us handle the complexities of HR while you focus on growing your business.",
  },
  {
    img: "/image/blogs/blog-10.jpg",
    icon: GlobeEuropeAfricaIcon,
    title: "Travel Solutions",
    desc: "Whether you're a corporate client or an individual traveler, our Travel solutions simplify your travel experience. We offer a range of services, including bus ticket booking, corporate travel management, and customized travel plans to suit your unique requirements. Our platform ensures a seamless and hassle-free booking process.",
  },
  {
    img: "/image/blogs/blog-17.png",
    icon: MicrophoneIcon,
    title: "CCTV Solutions",
    desc: "Security is a top priority for every business, and our CCTV solutions provide the peace of mind you need. We offer high-quality CCTV systems tailored to your specific security needs, including installation, maintenance, and monitoring services. Whether you're securing a small office or a large enterprise, our solutions ensure your safety 24/7",
  },
];

export function CoursesCategories() {
  return (
    <section className="container mx-auto px-8 py-36">
      <div className="mb-20 grid place-items-center text-center">
        {/* Explicitly specifying TypographyProps if needed */}
        <Typography variant="h2" color="blue-gray" className="my-3">
          What We Do
        </Typography>
        {/* Optional Subtitle (uncomment if needed) */}
        {/* <Typography variant="lead" className="!text-gray-500 lg:w-6/12">
          A comprehensive selection of courses designed to empower you with the
          skills you need to thrive in the dynamic world of web development.
        </Typography> */}
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <Card
          color="gray"
          className="relative grid h-full w-full place-items-center overflow-hidden text-center"
        >
          <div className="absolute inset-0 h-full w-full bg-gray-900/75" />
          <CardBody className="relative w-full">
            {/* <Typography color="white" className="text-xs font-bold opacity-50">
              HTML, CSS & Javascript
            </Typography> */}
            <Typography variant="h4" className="mt-9" color="white">
              Got a New Project ?
            </Typography>
            <Typography
              color="white"
              className="mt-4 mb-14 font-normal opacity-50"
            >
              Contact us for the seamless services
            </Typography>
            <a href="#contact">
            <Button size="sm" color="white">
              Contact Now
            </Button>
            </a>
            
          </CardBody>
        </Card>

        {/* Category Cards Section */}
        <div className="col-span-1 flex flex-col gap-6 lg:col-span-2">
          {CATEGORIES.map((category, index) => (
            <CategoryCard key={index} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CoursesCategories;
