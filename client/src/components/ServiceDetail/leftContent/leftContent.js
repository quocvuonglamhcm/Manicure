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
            return (<div key={index}>
                 {item}
            </div>
            )
        })
        return (
            <div id='left-service'>
                <div className='title'>Danh sách dịch vụ</div>
                <div className="text1">
                    {
                        ele
                    }
                </div>
            </div>
        );
    }

}
export default LeftContent;