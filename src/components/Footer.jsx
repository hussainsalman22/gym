import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <footer mb={0} className="bg-dark text-light">
      <div className="container" style={{marginBottom:0,}}>
        <div className="row">
          <div className="col-md-6">
            <h5>About Us</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="col-md-6">
            <h5>Contact Us</h5>
            <ul>
              <li>Phone: 123-456-7890</li>
              <li>Email: info@example.com</li>
              <li>Address: 123 Street, City, Country</li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="text-center">
          <div>&copy; {new Date().getFullYear()} My Website. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
