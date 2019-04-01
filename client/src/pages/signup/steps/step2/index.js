import React from 'react';
import { Col, Button, Row, Container } from 'react-bootstrap';


export default class Step2 extends React.Component {
    state = {
        code: '',
    }
    handleOnChange = (e) => {
        this.setState({
            code: e.target.value
        })
      }
    verifySMS() {
        console.log(this.props.phoneNumber)
        fetch('/api/account/verifySmsCode', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                smsCode: this.state.code,
                to: this.props.phoneNumber //nhận 1 props chứa phone number từ step 1 truyền vào
            })
        }).then(() => {
            console.log({success:true, data : this.props.phoneNumber})
        })
    }
    Continue = () => {
        console.log(this.props.phoneNumber);
        console.log(this.state.code)
        this.verifySMS();
        this.props.nextStep();
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