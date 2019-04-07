import React from 'react';
import { Col, Button, Row, Container } from 'react-bootstrap';


export default class Step2 extends React.Component {
    state = {
        code: '',
        isLoading: false
    }
    simulateNetworkRequest = () => {
        return new Promise(resolve => setTimeout(resolve, 2000));
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
            console.log({ success: true, data: this.props.phoneNumber })
        })
    }
    Continue = () => {
        this.setState({ isLoading: true}, () => {
            this.simulateNetworkRequest()
            .then(() => {
                this.verifySMS();
            })
            .then(() => {
                this.props.nextStep();
            })
        })
    }
    render() {
        let { phone , isLoading} = this.state
        return (
            <Container className='box-content'>
                <Row>
                    <Col sm={12} md={12} sx={12} className="center" >
                        <b style={{ userSelect: 'none' }}>MÃ XÁC THỰC</b>
                        <input type='text' placeholder='Nhập mã xác thực' className='mr-3' autoFocus onChange={this.handleOnChange} />
                        <Button variant="warning" onClick={() => this.Continue(phone)} >
                            {isLoading ? "Đang xác thực..." : "Tiếp tục"}
                        </Button>
                    </Col>
                </Row>
            </Container>
        )
    }
}