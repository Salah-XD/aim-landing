import React from "react";
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
    
  },
  {
    name: "About",
    href: "#about",
    icon: UserCircleIcon,
    
  },
  {
    name: "Service",
    href: "#services",
    icon: MdMiscellaneousServices,
    
  },
  {
    name: "Portfolio",
    href: "#portfolio",
    icon: MdDashboard,
    
  },
  {
    name: "Contact",
    href: "#contact",
    icon: IoIosMail,
  
  },

];

interface NavItemProps {
  children: React.ReactNode;
  href: string; // Ensure `href` is required
}

function NavItem({ children, href }: NavItemProps) {
  return (
    <li>
      <Typography
        as="a"
        href={href}
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

  function handleOpen() {
    setOpen((cur) => !cur);
  }

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
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
            <Typography color="blue-gray" className="text-lg font-bold">
              Aim Universe
            </Typography>
            {/* Desktop Menu */}
            <ul className="ml-10 hidden items-center gap-8 lg:flex">
              {NAV_MENU.map(({ name, icon: Icon, href }) => (
                <NavItem key={name} href={href}>
                  <Icon className="h-5 w-5" />
                  {name}
                </NavItem>
              ))}
            </ul>
            <div className="hidden items-center gap-4 lg:flex">
              <Button color="gray" href="#contact">
                Contact Us
              </Button>

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
