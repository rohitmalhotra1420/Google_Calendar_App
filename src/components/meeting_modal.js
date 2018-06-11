import React,{Component} from 'react';
import {Button,Modal,Input,DatePicker} from 'antd'
import moment from 'moment';


const { MonthPicker, RangePicker } = DatePicker;
const dateFormat = 'YYYY/MM/DD';
const monthFormat = 'YYYY/MM';

class MeetingModal extends Component{
        state = { visible: false }
       showModal = () => {
        this.setState({
          visible: true,
        });
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
    render(){
        return(
            <div>
                <Modal
                  title="Event Manager"
                  visible={this.state.visible}
                  onOk={this.handleOk}
                  onCancel={this.handleCancel}
                >
                  <Input placeholder="Add Title"size="large" />
                    <RangePicker defaultValue={[moment('2015/01/01', dateFormat), moment('2015/01/01', dateFormat)]} format={dateFormat}/>
                </Modal>
              </div>
        );
    }
}
export default MeetingModal;