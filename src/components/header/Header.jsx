 import React from 'react'
 import   './Header.css'
 

export const Header = () => {
    return (
      <header className='main-header'>
        <div className='msg-header'>
          <section className='msg-content'>
            <ul>
              <li>Welcome to <span>UPEX</span> |</li>
              <li>15+ Years Of Moving Experience |</li>
              <li>Hire Us |</li>
              <li>Give Feedback</li>
            </ul>
          </section>
          <section className='social-logo'>
          <span>
            <i class="fa-brands fa-facebook"></i></span>
                       <span><i class="fa-brands fa-instagram"></i></span>
                       <span><i class="fa-brands fa-x-twitter"></i></span>
          </section>
        </div>
        <div className='logo-menu-header'>
          <h1><a href='index.html'>UPE<span>X</span></a></h1>
          <nav>
            <ul>
          
              <li><a href="index.html" target='blank'>HOME</a></li>
              <li><a href="aboutus.html">ABOUT US</a></li>
              <li><a href="services.html">OUR SERVICES</a></li>
              <li><a href="product.html">PRODUCTS</a></li>
              <li><a href="testomonial.html">TESTOMONIAL</a></li>
              <li><a href="contat.html">CONTACT US</a></li>
           
            </ul>
          </nav>
          <button>GET A QUOTE</button>
        </div>
        <div className='contact-menu-header'>
          <section className='call-us'>
            <span className="material-icons">phone</span>
            <div className='text-content'>
              <p>CALL US</p>
              <h3>9821269268</h3>
            </div>
          </section>
          <section className='email-us'>
            <span className="material-icons">email</span>
            <div className='text-content'>
              <p>EMAIL US</p>
              <h3>ymukesh012@gmail.com</h3>
            </div>
          </section>
          <section className='visit-us'>
            <span className="material-icons">location_on</span>
            <div className='text-content'>
              <p>VISIT US</p>
              <h3>Brindawan-01, Nepal</h3>
            </div>
          </section>
        </div>
      </header>
    );
  }
