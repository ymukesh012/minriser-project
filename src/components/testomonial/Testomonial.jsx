import React from 'react';
import './Testomonial.css';

export const Testomonial = () => {
  return (
    <div className='testimonial-container'>
      <h4>TESTIMONIAL</h4>
      <h1>WHAT OUR CUSTOMERS</h1>
      <h1>SAYING ABOUT US</h1>
      <div className='testomonials'>
        <section className='testimonial-item'>
          <div className='rating'>
            <span>⭐️⭐️⭐️⭐️⭐️</span>
          </div>
          <blockquote>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, rerum!
              Ratione hic aperiam obcaecati non, minus praesentium excepturi, quae
              voluptatibus consectetur sit quibusdam officia debitis rerum a autem
              sunt sed!
            </p>
          </blockquote>
          <div className='testimonial-info'>
            <span className='name'>Name 1</span>
            <span className='message'>🗨️</span>
          </div>
        </section>
        <section className='testimonial-item'>
          <div className='rating'>
            <span>⭐️⭐️⭐️⭐️⭐️</span>
          </div>
          <blockquote>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
            </p>
          </blockquote>
          <div className='testimonial-info'>
            <span className='name'>Name 2</span>
            <span className='message'>🗨️</span>
          </div>
        </section>
        <section className='testimonial-item'>
          <div className='rating'>
            <span>⭐️⭐️⭐️⭐️⭐️</span>
          </div>
          <blockquote>
            <p>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
            </p>
          </blockquote>
          <div className='testimonial-info'>
            <span className='name'>Name 3</span>
            <span className='message'>🗨️</span>
          </div>
        </section>
      </div>
      <button>VIEW ALL</button>
    </div>
  );
};
