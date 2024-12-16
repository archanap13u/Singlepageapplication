import React from 'react'
import Home1 from './Home1'
import { Col ,Row} from 'react-bootstrap'
import { Link } from 'react-router-dom'
function Contact() {
  return (
   <>
   <Home1></Home1>

   <div className='container-fluid text-light bg-dark p-2' >
        
        
        <Row>
            <Col lg={4}>
            <h1>Contact Us</h1>
            <p className='fw-bold' style={{textAlign:'justify'}}>Learn more about our mission, vision, and team.</p>
            <p>
            People can use news apps to keep up with local, national, and international news as well as entertainment, 
        science, and politics. With only a swipe of the finger, these apps provide in-depth analysis, customized feeds, selected 
        material, and real-time news updates.
            </p>


            </Col>
            <Col lg={4}>
            <div> <h2>Connectivity</h2>
          <p>
          <p>Email: contact@ourcompany.com</p>
          <p>Phone: +1 (234) 567-890</p>
          </p>

        <div className='d-flex flex-column'>
            <a href=""> instagram</a>
            <a href="">facebook</a>
            <a href="">twitter</a>
        </div>
          
        </div>
            </Col>
            <Col lg={4} className='d-flex flex-column'>
            <h2>Enter your comments..</h2>
            <textarea name="" id="" placeholder='Enter here' className='form-contorl'></textarea>
            </Col>
        </Row>
    </div>
   </>
  )
}

export default Contact