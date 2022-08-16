import { Container } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';

function UncontrolledExample() {
  return (
    <Container>
    <Carousel>
      <Carousel.Item>
        <img 
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1575939238474-c8ada13b2724?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80"
        
        />
        <Carousel.Caption>
          <h2>New Season Arrivals Check Out All Trends</h2>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1588058365548-9efe5acb8077?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          
        />

        <Carousel.Caption>
        <h2>New Season Arrivals Check Out All Trends</h2>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
      
        />

        <Carousel.Caption>
        <h2>New Season Arrivals Check Out All Trends</h2>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </Container>
  );
}

export default UncontrolledExample;