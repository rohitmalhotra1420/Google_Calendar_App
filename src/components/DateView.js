import React, { Component } from 'react';
import {Row,Col} from 'antd';


class DateColumn extends Component{
    state={
        date:[],
    }

    render(){

        return(
            <Row type="flex">
                <Col span={3}></Col>
                {this.props.days.map((Day)=>
                    <Col span={3} className="mycolumn"key={Day}>
                    <p className="Day">{Day}</p><p className="Date">1</p>
                </Col> )}
            </Row>
        );
    }
}

export default DateColumn;