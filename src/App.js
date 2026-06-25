import React from "react";
import Banner from "./components/banner/Banner";
import Contact from "./components/contact/Contact";
import Features from "./components/features/Features";
import Footer from "./components/footer/Footer";
import FooterBottom from "./components/footer/FooterBottom";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Resume from "./components/resume/Resume";
import Testimonial from "./components/tesimonial/Testimonial";
import BackToTop from "./components/common/BackToTop";
import { ThemeProvider, useTheme } from "./context/ThemeContext";

const AppInner = () => {
  const { theme } = useTheme();
  return (
    <div
      data-theme={theme}
      className="w-full min-h-screen bg-bodyColor text-lightText overflow-x-hidden"
    >
      <Navbar />
      <Banner />
      <main className="max-w-screen-xl mx-auto px-4 lgl:px-8">
        <Features />
        <Projects />
        <Resume />
        <Testimonial />
        <Contact />
        <Footer />
        <FooterBottom />
      </main>
      <BackToTop />
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <AppInner />
    </ThemeProvider>
  );
}

export default App;
