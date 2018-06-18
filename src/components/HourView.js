import React, { Component } from 'react';
import {Col, Modal, Input, DatePicker} from 'antd';
import moment, * as moments from 'moment';
import obj from '../helpers/Constants';

//this Component is used to add no. of columns
function Cell(props) {
    var dayCells = [];
    const show = true;
    for(var i=0;i<props.dayCell;i++){
        dayCells.push(
        <Col span={3} id={props.dates[i] === new Date().toLocaleDateString() ? "highlighted":""}>
        <input type="hidden" />
            {props.hourCell.map((hour)=>
                    <div className="activitycolumn"
                         key={hour}
                         value={props.dates[i]}
                         onClick={(e)=>{props.showState(show);
                                        props.selectDate(e.target.getAttribute('value'));}}>
                    </div>
                        )}
            </Col>
        );
    }
    return(dayCells.map((dayCell,index)=><div key={index+1}>{dayCell}</div>))

}


//this component adds hours to column and renders DayCell component
class HourColumn extends Component{
   constructor(props){
      super(props);
      this.state={
        visible:false,
        selectedDate:null
      };
  }
    render(){
        return(
            <div>
                <Col span={3}>
                    {this.props.hours.map((hour)=>
                        <div className="hiddencolumn"key={hour}>
                            <p className="activitytime">{hour}</p>
                        </div>
                        )}
                </Col>

                {<Cell dayCell={this.props.days}
                       hourCell={this.props.hours}
                       dates={this.props.dates}
                       showState={(show)=>{this.setState({visible:show})}}
                       selectDate={(selectedDate)=>{this.setState({selectedDate:selectedDate})}}
                       />}

                <Modal title="Event Manager"
                       visible={this.state.visible}
                       onOk={this.handleOk}
                       onCancel={this.handleCancel}
                       >
                  <Input placeholder="Add Title"
                         size="large"
                         className="addEventInput" />
                  <obj.modalObj.RangePicker value={[moment(this.state.selectedDate, obj.modalObj.dateFormat),
                                                    moment(this.state.selectedDate, obj.modalObj.dateFormat)]}
                                            format={obj.modalObj.dateFormat}
                                            className="addEventDatePicker"/>
                </Modal>
            </div>

        );
    }


    handleOk = (e) => {
      this.setState({
        visible: false,
      });
    }
    handleCancel = (e) => {
      this.setState({
        visible: false,
      });
    }


}

export default HourColumn;
