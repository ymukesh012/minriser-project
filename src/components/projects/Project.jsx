import React from 'react';
import './Project.css';

export const Project = () => {
  return (
    <div className='project-container'>
        <div className='project-top-section'>
            <header className='project-top-section-header'>
                <h3>OUR PROJECTS</h3>
                <h1>EXPLORE OUR</h1>
                <h1>INCREDIBLE WORKS</h1>
                <button>VIEW ALL PROJECTS</button>
            </header>

            <section>
                <img 
                    src='./src/assets/img1.jpg' 
                   
                />
            </section>

            <section>
                <img 
                    src='./src/assets/img2.jpg'
                   
                />
            </section>
        </div>

      
        <div className='additional-projects'>
            <section>
                <img 
                    src='./src/assets/img3.jpg'
                 
                />
            </section>
            <section>
                <img 
                    src='./src/assets/img4.jpg' 
                
                />
            </section>
            <section>
                <img 
                   src='./src/assets/img5.jpg' 
        
                />
            </section>
        </div>
    </div>
  );
}
