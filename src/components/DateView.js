import React, { Component } from 'react';
import {Row,Col} from 'antd';


class DateColumn extends Component{


    render(){
        return(
            <Row type="flex"id="Weekdate">
                <Col span={3}></Col>
                {this.props.days.map((Day,index)=>
                 //here a map function on 'days' array is used which makes no. of columns equivalemt to no. of days.
                    <Col span={3} className="mycolumn"key={Day}id={this.props.dates[index] === new Date().toLocaleDateString() ? "highlighted":""}>
                        <p className="Day">{Day}</p>
                        <p className="Date"
                        //Here the final dates are displayed to user after state changes
                        >
                            {new Date(this.props.dates[index]).getDate()}
                        </p>
                </Col>
                )}
            </Row>
        );
    }
}

export default DateColumn;
