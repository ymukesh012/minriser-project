import React from 'react'
import   './About.css'

export const About = () => {
  return (
    <div className='about-section' id="ABOUT US">
      <div className='left-section'>
        <h3>ABOUT UPEX</h3>
        <h1>MOVING & STORAGE</h1>
          <h1>SERVICE</h1>
        <h4>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto, beatae aut dicta eligendi maiores odio soluta consectetur aliquam tempore sunt vitae fuga delectus distinctio assumenda. Labore mollitia distinctio fuga ullam?</h4>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae obcaecati enim iusto totam illum odit consequatur laboriosam illo reprehenderit repudiandae aut officiis provident iste, libero perspiciatis qui sunt praesentium nulla.</p>

        <section className='section-service-left'>
    <div className="service-item">
    <i class="fa-solid fa-stopwatch"></i>
        <span>On Time</span>
    </div>
    <div class="service-item">
        <i class="fa-solid fa-taxi"></i>
        <span>Free Services</span>
    </div>
</section>

<section className='section-service-right'>
    <div className="service-item">
        <i class="fa-solid fa-house"></i>
        <span>For All Your Home</span>
    </div>
    <div className="service-item">
        <i class="fa-solid fa-globe"></i>
        <span>All Over Nepal</span>
    </div>
</section>

        <div className='read-more-container'>
          <button className='button'>READ MORE</button>

          <div className='read-more-section'>
            <h1>15+</h1>
            <h4>Years of Moving Services</h4>
          </div>
        </div>
      </div>

      <div className='right-section'>
        <img src='./src/assets/side.jpg' alt='' />
      </div>
    </div>
  );
}