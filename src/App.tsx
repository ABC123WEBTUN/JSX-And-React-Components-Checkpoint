import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Name from './components/Name.tsx';
import Price from './components/Price.tsx';
import Description from './components/Description.tsx';
import Image from './components/Image.tsx';

// You can change this to your first name
const firstName = "Alex";

function App() {
  return (
    <div className="app-container">
      <Container className="py-5">
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <Card className="product-card shadow-lg border-0">
              <Card.Body className="p-4">
                <div className="text-center mb-4">
                  <Image />
                </div>
                <div className="text-center mb-3">
                  <Name />
                  <Price />
                </div>
                <Description />
                
                <div className="text-center mt-4">
                  <button className="btn btn-primary btn-lg px-4 py-2 rounded-pill">
                    Add to Cart
                  </button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        
        <Row className="justify-content-center mt-4">
          <Col md={8} lg={6}>
            <div className="greeting-section text-center p-4 rounded-lg">
              <h2 className="greeting-text mb-3">
                {firstName ? `Hello, ${firstName}!` : "Hello, there!"}
              </h2>
              
              {firstName && (
                <div className="user-avatar-section">
                  <img 
                    src="https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face" 
                    alt="User Avatar"
                    className="user-avatar rounded-circle shadow-sm"
                    style={{ 
                      width: '80px', 
                      height: '80px',
                      objectFit: 'cover',
                      border: '3px solid #007bff'
                    }}
                  />
                  <p className="text-muted mt-2">Welcome back!</p>
                </div>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;