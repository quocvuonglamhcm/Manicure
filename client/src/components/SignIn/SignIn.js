import React,{Component} from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
class SignIn1 extends Component {
    render() {
      return (
        <div className="Login">
            <h1>đăng nhập bằng</h1>
           <Form>
                <Form.Group as={Row} controlId="formHorizontalPhone">
                    <Form.Label column sm={2}>
                            Số điện thoại
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control type="phone" placeholder="Nhập số điện thoại" className="textfield" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontalPassword">
                    <Form.Label column sm={2}>
                        Mật khẩu
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control type="password" placeholder="Mật khẩu từ 6 đến 32 ký tự" className="txt1" />
                    </Col>
                    <p className="reminder">quên mật khẩu?Nhấn vào <enable className="enable">đây</enable></p>
                </Form.Group>
                    <Button variant="warning" className="btnSignin">Đăng nhập</Button>
           </Form>
        </div>
      );
    }
  }
  
  export default SignIn1;