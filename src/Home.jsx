import React from 'react'
import Home1 from './Home1';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
function Home() {
  return (
   <>
   <Home1/>
   
       <div className='d-flex flex-wrap justify-content-evenly' >
       <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://images.indianexpress.com/2024/12/WhatsApp-Image-2024-12-16-at-11.30.04-AM.jpeg?w=430" />
      <Card.Body>
        <Card.Title>
FM Sitharaman leads debate in Rajya Sabha, slams Congress's 'disregard for constitutional processes, principles'
</Card.Title>
        <Card.Text>
        Concluding the debate in Lok Sabha on Saturday, PM Modi said the Constitutional amendments introduced by his government were not aimed at consolidating power, unlike those made by the Congress.
        </Card.Text>
        
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://images.indianexpress.com/2024/12/WhatsApp-Image-2024-12-16-at-11.30.04-AM.jpeg?w=430" />
      <Card.Body>
        <Card.Title>
FM Sitharaman leads debate in Rajya Sabha, slams Congress's 'disregard for constitutional processes, principles'
</Card.Title>
        <Card.Text>
        Concluding the debate in Lok Sabha on Saturday, PM Modi said the Constitutional amendments introduced by his government were not aimed at consolidating power, unlike those made by the Congress.
        </Card.Text>
        
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://images.indianexpress.com/2024/12/WhatsApp-Image-2024-12-16-at-11.30.04-AM.jpeg?w=430" />
      <Card.Body>
        <Card.Title>
FM Sitharaman leads debate in Rajya Sabha, slams Congress's 'disregard for constitutional processes, principles'
</Card.Title>
        <Card.Text>
        Concluding the debate in Lok Sabha on Saturday, PM Modi said the Constitutional amendments introduced by his government were not aimed at consolidating power, unlike those made by the Congress.
        </Card.Text>
        
      </Card.Body>
    </Card>
        
       </div>

      
   </>
  )
}

export default Home