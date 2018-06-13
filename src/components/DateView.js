import React, { Component } from 'react';
import {Row,Col} from 'antd';


var today = new Date();


class DateColumn extends Component{


    render(){

        return(
            <Row type="flex"id="Weekdate">
                <Col span={3}></Col>
                {this.props.days.map((Day,index)=>
                 //here a map function on 'days' array is used which makes no. of columns equivalemt to no. of days.
                    <Col span={3} className="mycolumn"key={Day+today}>
                        <p className="Day">{Day}</p>
                        <p className="Date"
                        //Here the final dates are displayed to user after state changes
                        >
                            {this.props.dates[index]}
                        </p>
                </Col>
                )}
            </Row>
        );
    }
}

export default DateColumn;