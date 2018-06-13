import React, { Component } from 'react';
import {Col} from 'antd';


//this Component is used to add no. of columns
function DaysCell(props) {
    var datecells=[];
    for(var i=0;i<props.dateCell;i++){
        datecells.push(
        <Col span={3} >
            {props.hourCell.map((hour)=>
                    <div className="activitycolumn"key={hour}></div>
                        )}
            </Col>
        );
    }
    return(datecells.map((datecell,index)=><div key={index+1}>{datecell}</div>))

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

                {<DaysCell dateCell={this.props.days} hourCell={this.props.dateHour.hours}/>}


            </div>

        );
    }
}

export default HourColumn;