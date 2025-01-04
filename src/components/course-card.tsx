import { Typography, Card, CardBody, CardHeader } from "@material-tailwind/react";
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
    <Card className="border max-w-[315px] h-[250px] mx-auto flex flex-col justify-between">
      {/* CardHeader */}
      <CardHeader className="h-48 relative flex justify-center items-center">
        <Image
          width={600}
          height={600}
          src={img}
          alt={title}
          className="h-full w-full object-cover rounded-lg"
        />
      </CardHeader>

      {/* CardBody */}
      <CardBody className="text-center p-4">
        <Typography
          variant="h5"
          className="mb-2 normal-case overflow-hidden text-ellipsis whitespace-nowrap"
        >
          {title}
        </Typography>
      </CardBody>
    </Card>
  );
}

export default CourseCard;
