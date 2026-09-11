import Animated from "../components/Animated"
import { statsData } from "../data/data"

const Stats = () => {
  return (
    <section id="stats" className='px-auto mt-32'>
      <div className='flex flex-col md:flex-row items-center justify-center gap-12 md:gap-25 max-w-7xl mx-auto'>
        {statsData.map((stat, index) => (
          <Animated
            key={index}
            delay={0.2}
            className='flex flex-col items-center text-center'
          >
            <span className="text-6xl">
              {stat.number}
            </span>

            <h3 className="mt-5.5 text-2xl">
              {stat.title}
            </h3>

            <p className="mt-3.5 font-light text-zinc-600 max-w-72">
              {stat.description}
            </p>
          </Animated>
        ))}
      </div>
    </section>
  )
}

export default Stats