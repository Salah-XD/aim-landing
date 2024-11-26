import { Typography, Button, Input } from "@material-tailwind/react";

const LINKS = [
  {
    title: "Company",
    items: ["About Us", "Careers"],
  },

  {
    title: "Legal",
    items: ["Terms", "Privacy", "Team", "About Us"],
  },
];

const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="pb-8">
      <Typography
          color="blue-gray"
          className=" text-center md:text-center mt-16 font-normal !text-gray-700"
        >
          &copy; {CURRENT_YEAR} Made by Aim Universe
        </Typography>
    </footer>
  );
}

export default Footer;
