import React from 'react'
import   './Features.css'

export const Features = () => {
  return (
    <div className='our-features'>
        <h2>OUR FEATURES</h2>
        <div className='feature'>
        <section>
        <i class="fa-sharp fa-solid fa-truck-arrow-right"></i>
          <h6>Text</h6>

        </section>
        <section>
        <i class="fa-sharp fa-regular fa-building"></i>
          <h6>TextA</h6>
        </section>
        <section>
        <i class="fa-sharp fa-regular fa-motorcycle"></i>
          <h6>TextB</h6>
        </section>
        <section>
        <i class="fa-sharp fa-solid fa-location-dot"></i>
          <h6>TextC</h6>
        </section>
        <section>
        <i class="fa-sharp fa-solid fa-tty"></i>
          <h6>TextD</h6>
        </section>
        <section>
        <i class="fa-solid fa-globe"></i>
          <h6>TextE</h6>
        </section>
        </div>
    </div>
  )
}
