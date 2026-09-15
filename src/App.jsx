import Navbar from "./components/Navbar"
import About from "./sections/About"
import HeroSection from "./sections/HeroSection"
import Stats from "./sections/Stats"
import Dishes from "./sections/Dishes"
import Features from "./sections/Features"
import BookingProcess from "./sections/BookingProcess"
import Timing from "./sections/Timing"
import TestimonialSection from "./sections/TestimonialSection"
import FAQs from "./sections/FAQs"
import Cta from "./sections/Cta"
import Footer from "./components/Footer"
import LenisScroll from "./components/LenisScroll"

const App = () => {
  return (
    <>
      <LenisScroll />
      <Navbar />
      <HeroSection />
      <About />
      <Stats />
      <Dishes />
      <Features />
      <BookingProcess />
      <Timing />
      <TestimonialSection />
      <FAQs />
      <Cta />
      <Footer />
    </>
  )
}

export default App
