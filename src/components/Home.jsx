import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import image1 from "../assets/images/image1.jpg"
import image2 from "../assets/images/image2.jpg"
import image3 from "../assets/images/image3.jpg"
import './MySlider.css';

const Home = () => {
  const sliderRef = useRef(null);
  const handleImageClick = (event) => {
    event.stopPropagation(); // Stop event propagation to prevent it from affecting the navbar
    console.log('Image clicked!', event.target);
    // Add your custom logic here
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000, // Transition speed in milliseconds
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    accessibility:false,
    arrows:false,
     // Delay between slides in milliseconds
     top: 0,
        right: 0,
        left: 0,
        bottom: 0,
    beforeChange: (_, nextIndex) => {
      if (sliderRef.current) {
        setTimeout(() => {
          sliderRef.current.slickGoTo(nextIndex);
        }, 1000); // Delay before transitioning to the next slide
      }
    },
  };

  return (
    <Slider style={{margin:0 + "px"}} ref={sliderRef} {...settings}>
       <div>
          <div className="slide-content">
            <img src={image1} alt="Slide 3" className="slide-image" />
            <div className="slide-text">
              <h2 className="slide-heading">MUSCLE GAINER</h2>
              {/* <p className="slide-description">We capture dreams</p> */}
              <button className="book-now-button">ADMIT Now</button>
            </div>
          </div>
        </div>
        <div>
          <div className="slide-content">
            <img src={image2} alt="Slide 3" className="slide-image" />
            <div className="slide-text">
              <h2 className="slide-heading">  HEALTH IS WEALTH</h2>
              {/* <p className="slide-description">We capture dreams</p> */}
              <button className="book-now-button">ADMIT NOW</button>
            </div>
          </div>
        </div>
        <div>
          <div className="slide-content">
            <img src={image3} alt="Slide 3" className="slide-image" />
            <div className="slide-text">
              <h2 className="slide-heading">FLAT 50% OFF</h2>
              {/* <p className="slide-description">We capture dreams</p> */}
              <button className="book-now-button">ADMIT NOW</button>
            </div>
          </div>
          </div>
    </Slider>
  );
};

export default Home;
