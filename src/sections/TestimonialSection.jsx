import React from 'react'
import Animated from '../components/Animated'

const TestimonialSection = () => {
  return (
    <section id="testimonials" className='px-auto mt-44'>
      <div className='text-center mb-14'>
        <Animated delay={0.2}>
          <p className='text-orange-500 font-medium uppercase mb-4'>
            LOVED BY FOOD LOVERS
          </p>
        </Animated>

        <Animated>
          <h2 className='text-4xl md:text-5xl max-w-lg mx-auto text-blance'>
            What Our Guest Say
          </h2>
        </Animated>
      </div>
    </section>
  )
}

export default TestimonialSection