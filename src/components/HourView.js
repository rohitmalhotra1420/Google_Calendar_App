import React, { Component } from 'react';
import {Col} from 'antd';

const date=new Date();
const fullDate=date.getDate()+"/"+date.getMonth()+'/'+date.getFullYear();

class HourColumn extends Component{
    render(){
        return(
            <div>
                <Col span={3}>
                    {this.props.dateHour.hours.map((hour)=>
                        <div className="hiddencolumn"key={hour}>
                            <p className="activitytime">{hour}</p>
                        </div>
                        )}
                </Col>

                 {this.props.dateHour.days.map((Day)=>
                    <Col span={3} key={Day}>
                        {this.props.dateHour.hours.map((hour)=>
                        <div className="activitycolumn"key={hour+fullDate}></div>
                        )}
                    </Col> )}

            </div>

        );
    }
}

export default HourColumn;