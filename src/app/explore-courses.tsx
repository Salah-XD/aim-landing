"use client";

import { Typography } from "@material-tailwind/react";
import CourseCard from "@/components/course-card";

const COURSES = [
  {
    img: "/image/blogs/blog4.jpg",
    tag: "Beginner • 25 Classes • 200 Students",
    title: "BPO",
    label: "from $99",
    desc: "Dive into HTML to structure your content and CSS to style it. By the end, you'll be crafting beautiful web pages from scratch.",
  },
];

export function ExploreCourses() {
  return (
    <section className="px-8">
      <div className="container mx-auto mb-24 text-center">
        <Typography variant="h2" color="blue-gray">
          Portfolio
        </Typography>
      </div>
      <div className="flex justify-center items-center">
        <div className="flex flex-wrap justify-center gap-10">
          {COURSES.map((props, idx) => (
            <div key={idx} className="flex justify-center items-center">
              <CourseCard {...props} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExploreCourses;
