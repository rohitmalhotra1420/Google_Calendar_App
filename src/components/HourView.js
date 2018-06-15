import React, { Component } from 'react';
import {Col} from 'antd';


//this Component is used to add no. of columns
function Cell(props) {
    var dayCells=[];
    for(var i=0;i<props.dayCell;i++){
        dayCells.push(
        <Col span={3} id={props.dates[i]==new Date().getDate()? "highlighted":""}>
            {props.hourCell.map((hour)=>
                    <div className="activitycolumn"key={hour}></div>
                        )}
            </Col>
        );
    }
    return(dayCells.map((dayCell,index)=><div key={index+1}>{dayCell}</div>))

}

//this component adds hours to column and renders DayCell component
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

                {<Cell dayCell={this.props.days} hourCell={this.props.dateHour.hours}dates={this.props.dates}/>}


            </div>

        );
    }
}

export default HourColumn;