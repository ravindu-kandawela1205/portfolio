import React from 'react'
import Ravindu from '../../../assets/Images/ravindu.png';
import Ravinduv2 from '../../../assets/Images/ravinduv2.jpg';
import { heroIcons } from '../../../constants/navItems.constant';
import Button from '../../../components/Buttons/Button';
import { BackgroundGradient } from '../../../components/ui/BackgroundGradient ';   
function Hero() {
  return (
    <section className='py-28 lg:pt-40'>
      <div className="container flex flex-col items-center">
        
        {/* image */}
        <BackgroundGradient className="w-72 h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden bg-zinc-900">
          <img src={Ravindu} alt="ravindu" className="w-full h-full object-cover" />
        </BackgroundGradient>
        
        {/* content  */}

        <div className='text-center mt-8 '>
            <h1 className='text-3xl lg:text-5xl font-bold'>Hi,I'm Ravindu Kandawela.</h1>
            <h2>Full Stack Developer</h2>

            <p className='max-w-[820px] mx-auto mt-4 mb-6'>I'm Ravindu Kandawela, a Full Stack Developer who architects seamless digital experiences through innovative code and intuitive design. With expertise in React, Tailwind CSS, and TypeScript, and a passion for performance optimization, I transform complex business requirements into scalable, user-centric applications that drive meaningful engagement.</p>

            <div className='flex items-center justify-center gap-5'>
                { heroIcons.map(icon => (
                    <a href={icon.href}  className='hover:text-indigo-400 transition-colors'>
                        <icon.icon size={30} />
                    </a>
                )) }
            </div>

            {/* btn warapper */}

            <div className='mt-10 flex items-center justify-center flex-wrap gap-5'>
                <Button label="Download CV"  classes='primary-btn' icon/>
                <Button label="Let's Collaborate" classes='secondary-btn'/>
            </div>
        </div>

      </div>
    </section>
  )
}

export default Hero
