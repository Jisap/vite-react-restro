import Animated from "../components/Animated"


const floatingDishes = [
  { src: "/assets/dish1.png", alt: "dish1", className: "top-6 left-4 md:top-10 md:left-[6%] lg:left-[10%]" },
  { src: "/assets/dish2.png", alt: "dish2", className: "bottom-6 left-6 md:botton-10 md:left-[10%] lg:left-[14%]" },
  { src: "/assets/dish3.png", alt: "dish3", className: "top-6 right-4 md:top-10 md:right-[6%] lg:right-[10%]" },
  { src: "/assets/dish4.png", alt: "dish4", className: "bottom-6 right-6 md:botton-10 md:right-[10%] lg:right-[14%]" },
]

const Cta = () => {
  return (
    <section
      id="cta"
      className='relative overflow-hidden bg-orange-500 px-6 flex flex-col justify-center items-center min-h-100 md:min-h-110 mt-44'
    >
      <div className='absolute inset-0 w-full max-w-7xl mx-auto pointer-events-none'>
        {floatingDishes.map((dish) => (
          <img
            key={dish.src}
            src={dish.src}
            alt={dish.alt}
            className={`
              absolute size-20 md:size-28 lg:size-35 rounded-full object-cover pointer-events-auto transition-all duration-300 hover:scale-105
              ${dish.className}`}
          />
        ))}
      </div>

      <div className="relative z-10 text-center max-w-2xl mx-auto">
        <Animated>
          <h1>
            Every Meal Is Made To Be Remembered
          </h1>
        </Animated>
      </div>
    </section>
  )
}

export default Cta