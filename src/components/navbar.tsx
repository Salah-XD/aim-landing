import React from "react";
import Image from "next/image";
import AimLogo from "../../public/image/aim-webp.webp"; // Adjust path to match your directory structure
import {
  Navbar as MTNavbar,
  Collapse,
  Button,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import {
  RectangleStackIcon,
  UserCircleIcon,
  XMarkIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";
import { MdWork, MdDashboard, MdMiscellaneousServices } from "react-icons/md";
import { IoIosMail } from "react-icons/io";

const NAV_MENU = [
  {
    name: "Home",
    href: "#home",
    icon: RectangleStackIcon,
    offset: -100, // No offset for Home
  },
  {
    name: "About",
    href: "#about",
    icon: UserCircleIcon,
    offset: 300, // Custom offset for About
  },
  {
    name: "Service",
    href: "#services",
    icon: MdMiscellaneousServices,
    offset: 120, // Custom offset for Service
  },
  {
    name: "Portfolio",
    href: "#portfolio",
    icon: MdDashboard,
    offset: -50, // Custom offset for Portfolio
  },
  {
    name: "Contact",
    href: "#contact",
    icon: IoIosMail,
    offset: 0, // Custom offset for Contact
  },
];


interface NavItemProps {
  children: React.ReactNode;
  href: string;
  offset?: number; // Optional offset for scrolling
}

function NavItem({ children, href, offset = 0 }: NavItemProps) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.getBoundingClientRect().top + window.scrollY + offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <li>
      <Typography
        as="a"
        href={href}
        onClick={handleClick}
        target="_self"
        variant="paragraph"
        color="gray"
        className="flex items-center gap-2 font-medium text-gray-900"
      >
        {children}
      </Typography>
    </li>
  );
}


export function Navbar() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen((cur) => !cur);
  };

  React.useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 960) setOpen(false);
    });
  }, []);

  return (
    <div className="px-10 sticky top-4 z-50">
      <div className="mx-auto container">
        <MTNavbar
          blurred
          color="white"
          className="z-50 mt-6 relative border-0 pr-3 py-3 pl-6"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Image
                src={AimLogo}
                alt="Aim Universe Logo"
                width={30}
                height={30}
                className="ml-2"
              />
              <Typography color="blue-gray" className="text-lg font-bold">
                Aim Universe
              </Typography>
            </div>

            {/* Desktop Menu */}
            <ul className="ml-10 hidden items-center gap-8 lg:flex">
  {NAV_MENU.map(({ name, icon: Icon, href, offset }) => (
    <NavItem key={name} href={href} offset={offset}>
      <Icon className="h-5 w-5" />
      {name}
    </NavItem>
  ))}
</ul>


            <div className="hidden items-center gap-4 lg:flex">
              <a href="https://fintrackfe.vercel.app/" target = "_blank">
                <Button color="gray">Agent Accounts</Button>
              </a>
            </div>

            {/* Mobile Menu Icon */}
            <IconButton
              variant="text"
              color="gray"
              onClick={handleOpen}
              className="ml-auto inline-block lg:hidden"
            >
              {open ? (
                <XMarkIcon strokeWidth={2} className="h-6 w-6" />
              ) : (
                <Bars3Icon strokeWidth={2} className="h-6 w-6" />
              )}
            </IconButton>
          </div>

          {/* Mobile Collapse Menu */}
          <Collapse open={open}>
            <div className="container mx-auto mt-3 border-t border-gray-200 px-2 pt-4">
              <ul className="flex flex-col gap-4">
                {NAV_MENU.map(({ name, icon: Icon, href }) => (
                  <NavItem key={name} href={href}>
                    <Icon className="h-5 w-5" />
                    {name}
                  </NavItem>
                ))}
              </ul>
            </div>
          </Collapse>
        </MTNavbar>
      </div>
    </div>
  );
}

export default Navbar;
