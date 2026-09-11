import Animated from "../components/Animated"


const Dishes = () => {
  return (
    <section id="dishes" className="px-auto mt-44">
      <div className="text-center mb-16">
        <Animated>
          <p className="text-orange-500 font-medium uppercase mb-3.5">
            Chef's Signaturee Selection
          </p>
        </Animated>

        <Animated>
          <p className="text-4xl md:text-5xl max-w-lg mx-auto text-balance">
            Chef's Signaturee Selection
          </p>
        </Animated>
      </div>
    </section>
  )
}

export default Dishes