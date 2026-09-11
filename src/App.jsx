import Navbar from "./components/Navbar"
import About from "./sections/About"
import HeroSection from "./sections/HeroSection"
import Stats from "./sections/Stats"
import Dishes from "./sections/Dishes"

const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <About />
      <Stats />
      <Dishes />
    </>
  )
}

export default App
