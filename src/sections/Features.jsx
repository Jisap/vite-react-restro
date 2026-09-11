import React from 'react'
import Animated from '../components/Animated'

const Features = () => {
  return (
    <section id="features" className='px-auto mt-44'>
      <div className="text-center mb-16">
        <Animated delay={0.2}>
          <p className="text-orange-500 font-medium uppercase mb-3.5">
            What Sets Us Apart
          </p>
        </Animated>

        <Animated delay={0.2}>
          <p className="text-4xl md:text-5xl max-w-lg mx-auto text-balance">
            Crafting memorable dining experiences
          </p>
        </Animated>
      </div>
    </section>
  )
}

export default Features