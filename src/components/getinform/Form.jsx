import React from 'react';
import './Form.css';


export const Form = () => {
  

  return (
    <div className="form-container">
      <img src="./src/assets/bg.jpg" alt="Background" className="background-image" />

      <div className="form-content">
        <div className="form">
          <h1>GET IN TOUCH</h1>

          <form>
           
            <input type="text" id="name" name="name" placeholder="Name" required />

            
            <input type="email" id="email" name="email" placeholder="Email" required />

            
            <input type="tel" id="contact" name="contact" placeholder="Phone" required />

            <div className="row">
              <div className="form-group">
               
                <input type="text" id="moving-from" name="moving-from" placeholder="Moving From" required />
              </div>
              <div className="form-group">
                
                <input type="text" id="moving-to" name="moving-to" placeholder="Moving To" required />
              </div>
            </div>

            <div className="row">
              <div className="form-group">
                
                <input type="text" id="reason" name="reason" placeholder="Reason for Moving" required />
              </div>
              <div className="form-group">
              
                <input type="date" id="date" name="date" required />
              </div>
            </div>

            <button type="submit">SUBMIT NOW</button>
          </form>
        </div>
      </div>
    </div>
  );
};
