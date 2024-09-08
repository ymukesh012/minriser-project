import React from 'react';


import './Contact.css';

export const Contact = () => {
    return (
      <div className='contact-container'>
          <div className='contact-section'>
              <section className='contact-header'>
                  <h1>Have Questions About Moving?</h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis deleniti soluta explicabo modi consequuntur dolore eveniet eos, obcaecati sapiente nihil. Veniam nesciunt quaerat ex ullam deserunt perferendis quisquam aliquam fugiat!</p>
              </section>
              <button className='contact-button'>CONTACT US</button>
          </div>
          <div className='contact-info'>
              <section className='about-info-social'>
                  <h1>About Us</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eimncmnndmnmsdnfmnsmnfsmnsdfmdfsdsfsdfnmbdfsmndsfbnmdfsbnmbdfsnmbdsfnbdfsnbdsfnbfsnfbmnfsbmnsbmsfnfsbusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <div className='social-icons'>
                       <span><i class="fa-brands fa-facebook"></i></span>
                       <span><i class="fa-brands fa-instagram"></i></span>
                       <span><i class="fa-brands fa-x-twitter"></i></span>
                      
                  </div>
              </section>
              <section className='quick-links'> 
                  <h1>Quick Links</h1>
                  <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Services</li>
                    <li>Testimonials</li>
                    <li>Contact Us</li>
                    
                  </ul>
                  </section>
            <section className='contact-details'>
                <h1>Get in Touch</h1>
                <div className='contact-details-content'>
                    <div className='contact-details-item'>
                        <span className='material-icons'>phone</span> CALL US
                    </div>
                    <div className='contact-details-item'>
                        <span className='material-icons'>mail</span> ymukesh012@gmail.com
                    </div>
                    <div className='contact-details-item'>
                        <span className='material-icons'>location_on</span> Brindawan-01, Nepal
                    </div>
                </div>
            </section>
            <section className='map'>
                <h1>Our Location</h1>
                <div className='map-container'>
                <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d44389.08614190093!2d85.3317620454424!3d27.677441255446904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1725720567440!5m2!1sen!2snp"
        height="200"
      ></iframe>
    </div>
                </div>
            </section>
        </div>
     <hr/>
     <footer className='footer'>
  <div className="footer-content">
    <h5>copyright &copy; 2024 UPEX. All Rights Reserved</h5>
  </div>
</footer>
     
    </div>
  );
}