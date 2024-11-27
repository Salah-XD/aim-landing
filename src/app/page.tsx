// components
import { Navbar, Footer } from "@/components";

// sections
import Hero from "./hero";
import OutImpressiveStats from "./out-impressive-stats";
import CoursesCategories from "./courses-categories";
import ExploreCourses from "./explore-courses";
import Testimonial from "./testimonial";
import Events from "./events";
import StudentsFeedback from "./students-feedback";
import TrustedCompany from "./trusted-companies";
import ContactForm from "@/components/ContactForm";
import AboutUs from "@/components/AboutUs";
// import { createTheme, ThemeProvider } from '@mui/material/styles';

// const theme = createTheme({
//   rating: {
//     defaultProps: {
//       ratedIcon: null,
//       unratedIcon: null
//     }
//   }
// });

export default function Campaign() {
  return (
    <>
      <Navbar />
      <section id="home">
        <Hero />
      </section>
      <section id="about" className="pt-12">
        <AboutUs />
      </section>
      <section id="stats">
        <OutImpressiveStats />
      </section>
      <section id="services" className="pt-16">
        <CoursesCategories />
      </section>
      <section id="portfolio" className="pt-16">
        <ExploreCourses />
      </section>

      <section id="contact" className="pt-16">
        <ContactForm />
      </section>
      <Footer />
    </>
  );
}
