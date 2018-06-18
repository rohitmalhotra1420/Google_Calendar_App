import React, { Component } from 'react';
import {Col, Modal, Input, DatePicker} from 'antd';
import moment from 'moment';
import obj from '../helpers/Constants';

//this Component is used to add no. of columns
function Cell(props) {
    var dayCells = [];
    const show = true;
    for(var i=0;i<props.dayCell;i++){
        dayCells.push(
        <Col span={3} id={props.dates[i] === new Date().toLocaleDateString() ? "highlighted":""}>
            {props.hourCell.map((hour)=>
                    <div className="activitycolumn" key={hour} onClick={()=>{props.showState(show)}}></div>
                        )}
            </Col>
        );
    }
    return(dayCells.map((dayCell,index)=><div key={index+1}>{dayCell}</div>))

}


//this component adds hours to column and renders DayCell component
class HourColumn extends Component{
  state={
    visible:false
  }
    render(){
      console.log(this.state);
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
                       state={this.state.visible}
                       showState={(show)=>{this.setState({visible:show})}}
                       />}

                <Modal title="Event Manager"
                       visible={this.state.visible}
                       onOk={this.handleOk}
                       onCancel={this.handleCancel}
                       >
                  <Input placeholder="Add Title"
                         size="large"
                         className="addEventInput" />
                  <obj.modalObj.RangePicker defaultValue={[moment('2015/01/01',
                                            obj.modalObj.dateFormat),
                                            moment('2015/01/01', obj.modalObj.dateFormat)]}
                                            format={obj.modalObj.dateFormat}
                                            className="addEventDatePicker"/>
                </Modal>
            </div>

        );
    }


    handleOk = (e) => {
      console.log(e);
      this.setState({
        visible: false,
      });
    }
    handleCancel = (e) => {
      console.log(e);
      this.setState({
        visible: false,
      });
    }


}

export default HourColumn;
