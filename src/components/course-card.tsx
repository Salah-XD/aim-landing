import { Typography, Card, CardBody, CardHeader, Button } from "@material-tailwind/react";
import Image from "next/image";

interface CourseCardProps {
  img: string;
  tag: string;
  title: string;
  desc: string;
  label: string;
}

export function CourseCard({ img, tag, title, desc, label }: CourseCardProps) {
  return (
    <Card className="border max-w-sm mx-auto">
      {/* CardHeader - Centering the image */}
      <CardHeader className="h-64 relative flex justify-center items-center">
        <Image
          width={768}
          height={768}
          src={img}
          alt={title}
          className="h-full w-full object-cover scale-[1.1] rounded-lg"
        />
      </CardHeader>
      
      {/* CardBody - Centering the text */}
      <CardBody className="text-center flex flex-col justify-center items-center p-6">
        <a
          href="#"
          className="text-blue-gray-900 transition-colors hover:text-gray-900"
        >
          <Typography variant="h5" className="mb-2 normal-case">
            {title}
          </Typography>
        </a>
        {/* Optional description and button */}
        {/* <Typography className="mb-6 font-normal text-gray-500">
          {desc}
        </Typography> */}
        {/* <Button variant="outlined">{label}</Button> */}
      </CardBody>
    </Card>
  );
}

export default CourseCard;
