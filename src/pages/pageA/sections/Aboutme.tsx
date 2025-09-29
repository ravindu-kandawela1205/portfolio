import { li, p } from 'motion/react-client'
import React from 'react'
import {aboutItems} from '../../../constants/navItems.constant';
function Aboutme() {
  return (
    <section className='section bg-secondary-clr' id='about'>
      <div className="container">
        <h2>About me</h2>
        <p className='mt-3 mb-9'>I’m Ravindu Kandawela, a passionate Full Stack Developer who loves turning ideas into clean, interactive, and user-friendly web experiences. I specialize in React, Tailwind CSS, and TypeScript on the frontend, and build solid, scalable backends with Laravel. I enjoy crafting interfaces that not only look great but also feel smooth and intuitive. Every project I work on is a chance to learn something new, push boundaries, and create meaningful solutions that make a real impact. I’m on a mission to grow as a developer and bring creativity, precision, and purpose into every line of code I write.</p>


           <div>
        <p className='text-white font-semibold text-xl mb-3'>Skills:</p>
        <ul className=''>
          {aboutItems.map(item =>(
            <li key={item.id}>
            <p>✔️{item.label}</p>
            </li>
          ))}
          
        </ul>
      </div>
      </div>

      {/* skills */}

   
    </section>
  )
}

export default Aboutme
