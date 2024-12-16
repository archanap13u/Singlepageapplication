import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Row,Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function Home1() {
  return (
    <>
     <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
          <i className="fa-solid fa-newspaper" />
            DAILY NEWS
          </Navbar.Brand>
          <div className='d-flex '>
            <Link className='me-5 ' style={{textDecoration:'none'}} to={'/about'}>About</Link>
            <Link  className='me-5 ' style={{textDecoration:'none'}} to={'/contact'}>Contact</Link>
          </div>
        </Container>
      </Navbar>

      <div className='container-fluid'>
       <Row>
        <Col lg={6} className='d-flex justify-content-center align-items-center'>
        <img  src='https://cdni.iconscout.com/illustration/premium/thumb/tv-news-anchor-in-studio-illustration-download-svg-png-gif-file-formats--new-logo-world-male-live-professions-pack-people-illustrations-4948901.png' className=' img-fluid'></img>
        </Col>
        <Col lg={6 }className='d-flex justify-content-center align-items-center flex-column'>
        <h2 className='text-info mb-3'> All The News You Need..</h2>
        <p>
            
        People can use news apps to keep up with local, national, and international news as well as entertainment, 
        science, and politics. With only a swipe of the finger, these apps provide in-depth analysis, customized feeds, selected 
        material, and real-time news updates.
        </p>
        
        </Col>
       </Row>
       </div>
    </>
  )
}

export default Home1