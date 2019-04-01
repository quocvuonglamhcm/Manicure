import React from 'react';
import { Col, Button, Row, Container } from 'react-bootstrap';


export default class Step2 extends React.Component {
    state = {
        code: '',
        phone: '',
    }
    handleOnChange = (e) => {
        this.setState({
            code: e.target.value
        })
      }
    verifySMS() {
        fetch('/api/account/verifySmsCode', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                code: this.state.code,
                to: this.state.phone
            })
        })
    }
    //nhận props là phoneNumber từ signup gán vào state
    componentDidMount () {
        console.log(this.props.phoneNumber);
        this.setState({
            phone : this.props.phoneNumber
        })
        
    }

    receivePhoneNumer = () => {
        this.setState({
            phone : this.props.phoneNumber
        })
        console.log(this.state)
    }
    Continue = () => {
        // let {phone, }
        // this.verifySMS();
        this.receivePhoneNumer();
        console.log(this.state)
        // this.props.nextStep();
    }
    render() {
        let {phone} =this.state
        return (
            <Container className='box-content'>
                <Row>
                    <Col sm={12}>
                        <b style={{ userSelect: 'none' }}>MÃ XÁC THỰC</b>
                        <input type='text' placeholder='Nhập mã xác thực' className='mr-3' autoFocus onChange={this.handleOnChange}/>
                        <Button variant="warning" onClick={() => this.Continue(phone)} >Tiếp tục</Button>
                    </Col>
                </Row>
            </Container>
        )
    }
}