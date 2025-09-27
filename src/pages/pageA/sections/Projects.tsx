import React from 'react'
import { Carousel } from '../../../components/ui/carousel';
import { ProjectsItems } from '../../../constants/navItems.constant';
function Projects() {
  return (
    <section>
      <div className="container">
        {/* title  */}

        <h2>Recent Projects</h2>

        {/* card wrapper  */}

        <div className=''>
    <Carousel  slides={ProjectsItems}/>
        </div>
      </div>
    </section>
  )
}

export default Projects
