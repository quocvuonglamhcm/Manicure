import React from 'react';
import { Col, Button, Row, Container } from 'react-bootstrap';


export default class Step2 extends React.Component {
    Continue = () => {
        this.props.nextStep();
    }
    render() {
        return (
            <Container className='box-content'>
                <Row>
                    <Col sm={12}>
                        <b style={{ userSelect: 'none' }}>MÃ XÁC THỰC</b>
                        <input type='text' placeholder='Nhập mã xác thực' className='mavung mr-3' autoFocus />
                        <Button variant="warning" onClick={this.Continue} >Tiếp tục</Button>
                    </Col>
                </Row>
            </Container>
        )
    }
}