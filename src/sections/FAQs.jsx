import React from 'react'
import Animated from '../components/Animated'

const FAQs = () => {
  return (
    <section id="faq" className='px-auto mt-44'>
      <div className='max-w-3xl mx-auto'>
        <div className='text-center mb-14'>
          <Animated delay={0.2}>
            <p className='text-orange-500 font-medium uppercase mb-4'>
              FAQs
            </p>
          </Animated>

          <Animated delay={0.2}>
            <h2 className='text-4xl md:text-5xl max-w-lg mx-auto text-balance'>
              Frequently Asked Questions
            </h2>
          </Animated>
        </div>
      </div>
    </section>
  )
}

export default FAQs