import React from 'react';
import { Row, Col, Container, } from 'react-bootstrap';
import {Carousel, CarouselItem, CarouselCaption } from 'react-bootstrap/'
import './useapp.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faMapMarkerAlt, faMobileAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'

import img1 from '../../assets/images/appstore.svg';
import img2 from '../../assets/images/chplay.svg';

export default function UseApp() {

    return (
        <Container>
            <Row><div className='useapp-title'>Dễ dàng đặt lịch với Nail Partner</div></Row>
            <div className="slider-pro" id="my-slider">
	<div className="sp-slides">
		<div className="sp-slide">
			<img className="sp-image" src="path/to/image1.jpg"/>
		</div>
		

		<div className="sp-slide">
			<p>Lorem ipsum dolor sit amet</p>
		</div>
		

		<div className="sp-slide">
			<h3 className="sp-layer">Lorem ipsum dolor sit amet</h3>
			<p className="sp-layer">consectetur adipisicing elit</p>
		</div>
	</div>
</div>
        </Container>
    )
}