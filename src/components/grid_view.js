import React, { Component } from 'react';
import {Row,Col} from 'antd';




class Grid extends Component{

    render(){
        return(
            <Row type="flex">
                <Col span={3}></Col>
                <Col span={3} className="mycolumn">
                    <p className="Day">Mon</p><p className="Date">1</p>
                </Col>
                <Col span={3} className="mycolumn">
                    <p className="Day">Tue</p><p className="Date">1</p>
                </Col>
                <Col span={3} className="mycolumn">
                    <p className="Day">Wed</p><p className="Date">1</p>
                </Col>
                <Col span={3} className="mycolumn">
                    <p className="Day">Thu</p><p className="Date">1</p>
                </Col>
                <Col span={3} className="mycolumn">
                    <p className="Day">Fri</p><p className="Date">1</p>
                </Col>
                <Col span={3} className="mycolumn">
                    <p className="Day">Sat</p><p className="Date">1</p>
                </Col>
                <Col span={3} className="mycolumn">
                    <p className="Day">Sun</p><p className="Date">1</p>
                </Col>

            </Row>
        );
    }
}

export default Grid;