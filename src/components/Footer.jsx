import { socialLinks } from "../data/data"
import Animated from './Animated'

const Footer = () => {
  return (
    <footer className='px-auto relative mt-44 overflow-hidden'>
      <div className='max-w-7xl mx-auto'>
        {/* Row */}
        <div className='flex flex-wrap gap-6 justify-between pb-8'>
          {/* Column 1 - Brand & Socials */}
          <div className='flex flex-col items-start text-left'>
            <Animated>
              <img src="/assets/logo.svg" alt="Logo" />
            </Animated>

            <Animated>
              <p className='mt-3 text-sm/5.5 text-zinc-600 max-w-81.25'>
                Serving freshly prepared dished with authentic flavors, premium
                ingredients and exceptional hospitality every day.
              </p>
            </Animated>

            <div className="flex items-center gap-1.5 mt-6">
              {socialLinks.map((item, index) => (
                <Animated key={index} delay={index * 0.05}>
                  <a href={item.href} className="size-7.5 rounded-full border border-slate-300 grid place-content-center">
                    {item.icon}
                  </a>
                </Animated>
              ))}
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>

          </div>

          {/* Column 3 - Get in Touch */}
          <div>

          </div>

          {/* Column 4 - Sitemap */}
          <div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div></div>
      </div>
    </footer>
  )
}

export default Footer