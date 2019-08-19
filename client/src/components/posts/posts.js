import React from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import './posts.css'
import Post from './post.js'

export default function Posts() {

  return (
    <div className='BackgroundNew mb-5'>
      <Container >
        <Row><div className='NewTitle'>Bài viết</div></Row>
        <Row>
          <Col sm={4}><Post /></Col>
          <Col sm={4}><Post /></Col>
          <Col sm={4}><Post /></Col>
        </Row>
      </Container>
    </div>
  )
}