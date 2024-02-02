import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import blog1 from "../assets/images/blog1.jpg"
import blog2 from "../assets/images/blog2.jpg"
import blog3 from "../assets/images/blog3.jpg"
const BlogComponent = () => {
  return (
    <Container>
      <h1 style={{ fontWeight: 'bold', marginBottom: '2rem' }}>
        Latest Blog Posts
      </h1>
      <Row>
        <Col md={6}>
        <div style={{maxWidth:700+"px" ,width:"100%"}}>
          <Carousel
          axis="vertical"
          >
            <div>
              <img src={blog1} alt="Blog Post 1" />
              <p className="legend">Blog Post 1</p>
            </div>
            <div>
              <img src={blog2} alt="Blog Post 2" />
              <p className="legend">Blog Post 2</p>
            </div>
            <div>
              <img src={blog3} alt="Blog Post 3" />
              <p className="legend">Blog Post 3</p>
            </div>
            
          </Carousel>
          </div>
        </Col>
        <Col md={6}>
          {/* Add your blog post content here */}
        </Col>
      </Row>
    </Container>
   
  );
};
export default BlogComponent