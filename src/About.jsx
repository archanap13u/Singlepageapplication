import React from 'react'
import { Col ,Row} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Home1 from './Home1'
function About() {
  return (
    <>
    <Home1/>
    <div className='container-fluid text-light bg-dark p-2' >
        
        
        <Row>
            <Col lg={4}>
            <h1>About Us</h1>
            <p className='fw-bold' style={{textAlign:'justify'}}>Learn more about our mission, vision, and team.</p>
            <p>
            People can use news apps to keep up with local, national, and international news as well as entertainment, 
        science, and politics. With only a swipe of the finger, these apps provide in-depth analysis, customized feeds, selected 
        material, and real-time news updates.
            </p>


            </Col>
            <Col lg={4}>
            <div> <h2>Our Mission</h2>
          <p>
            Our mission is to deliver high-quality products that bring value to our customers and make a positive impact on the world.
          </p>

          <h2>Our Vision</h2>
          <p>
            We envision a world where technology seamlessly integrates into everyday life, enhancing experiences and fostering innovation.
          </p>

          <h2>Meet the Team</h2>
          <Link to={'/contact'} className='text-info fw-boldtext-decoration-none'> Contact us</Link>
        </div>
            </Col>
            <Col lg={4} className='d-flex justify-content-center align-items-center'>
            <img src='https://static.vecteezy.com/system/resources/thumbnails/050/700/064/small/red-flat-banner-with-latest-news-illustration-png.png' className='img-fluid'></img>
            </Col>
        </Row>
    </div>
    </>
  )
}

export default About