import React, { Component } from "react";

class LeftContent extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        let data  = this.props.data;
        console.log(data)
        let ele = data.map((item, index) => {
            return (<li key={index}>
                <a> {item}</a>
            </li>
            )
        })
        return (
            <div id='left-service'>
                <h2 className='title'>Danh sách dịch vụ</h2>
                <ul>
                    {
                        ele
                    }
                </ul>
            </div>
        );
    }

}
export default LeftContent;