/*import React from 'react';

const Contact = () => {
  return (
    <>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31012.851257507133!2d79.32588066953979!3d13.681680747312072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb2b562cc4e1291%3A0x85a1996b4b87bcf6!2sTirumala%2C%20Tirupati%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1721035782835!5m2!1sen!2sin"
        width="300"
        height="250"
        style={{ border: '1px solid' }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      return (  
              <>  
                  <h1>Welcome to Mango city</h1>  
                  {  
                      this.state.myinfo ? (   
                          <div>  
                              <h1>Login</h1>
                                  <form id="loginForm">
                                  <div><label className="form-label">Email:</label>
                                  <input type="email" required/></div>
                                  <div><label className="form-label">Password:</label>
                                  <input type="password" required/></div>
                                  <div><button type="submit">Submit</button></div>
                                  </form>
                                  <div><button onClick={this.togglemyBio}> Show Less </button></div> 
                        </div>  
                          ) : (  
                              <div>  
                                  <button onClick={this.togglemyBio}> Read More </button>  
                              </div>  
                          )
                          </>
    </>
  );
};

export default Contact;*/

import './Layout.css';
const Contact = () => {
    return (
      <div className="container">
        <div className="google-map-code">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15282225.79979123!2d73.7250245393691!3d20.750301298393563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1587818542745!5m2!1sen!2sin"
                width="600"
                height="450"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen
                aria-hidden="false"
                tabIndex="0"
                title="Google Map"
            />
        </div>

        <div className="form-container">
            <h1>Login</h1>
            <form id="loginForm">
                <div>
                    <label className="form-label">Email:</label>
                    <input id="email" type="email" required aria-label="Email" />
                </div>
                <div>
                    <label className="form-label">Password:</label>
                    <input id="password" type="password" required aria-label="Password" />
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
      </div>
    );
}

export default Contact;


