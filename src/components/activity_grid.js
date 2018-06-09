import React, { Component } from 'react';
import {Row,Col,Modal,Input,DatePicker} from 'antd';
import moment from 'moment';
const { MonthPicker, RangePicker } = DatePicker;

const dateFormat = 'YYYY/MM/DD';
const monthFormat = 'YYYY/MM';
class ActivityGrid extends Component{
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
                <div>
                <Modal
                  title="Event Manager"
                  visible={this.state.visible}
                  onOk={this.handleOk}
                  onCancel={this.handleCancel}
                >
                  <Input placeholder="Add Title"size="large" />
                    <RangePicker defaultValue={[moment('2015/01/01', dateFormat), moment('2015/01/01', dateFormat)]} format={dateFormat}
    />
                </Modal>
              </div>
                <Row type="flex"onClick={this.showModal}>
                    <Col span={3}></Col>
                    <Col span={3} className="activitycolumn"></Col>
                    <Col span={3} className="activitycolumn"></Col>
                    <Col span={3} className="activitycolumn"></Col>
                    <Col span={3} className="activitycolumn"></Col>
                    <Col span={3} className="activitycolumn"></Col>
                    <Col span={3} className="activitycolumn"></Col>
                    <Col span={3} className="activitycolumn"></Col>
                </Row>
                <Row type="flex">
                    <Col span={3}></Col>
                    <Col span={3} className="activitycolumn"></Col>
                    <Col span={3} className="activitycolumn"></Col>
                    <Col span={3} className="activitycolumn"></Col>
                    <Col span={3} className="activitycolumn"></Col>
                    <Col span={3} className="activitycolumn"></Col>
                    <Col span={3} className="activitycolumn"></Col>
                    <Col span={3} className="activitycolumn"></Col>
                </Row>
                <Row type="flex">
                    <Col span={3}></Col>
                    <Col span={3} className="activitycolumn"></Col>
                    <Col span={3} className="activitycolumn"></Col>
                    <Col span={3} className="activitycolumn"></Col>
                    <Col span={3} className="activitycolumn"></Col>
                    <Col span={3} className="activitycolumn"></Col>
                    <Col span={3} className="activitycolumn"></Col>
                    <Col span={3} className="activitycolumn"></Col>
                </Row>
                <Row type="flex">
                    <Col span={3}></Col>
                    <Col span={3} className="activitycolumn"></Col>
                    <Col span={3} className="activitycolumn"></Col>
                    <Col span={3} className="activitycolumn"></Col>
                    <Col span={3} className="activitycolumn"></Col>
                    <Col span={3} className="activitycolumn"></Col>
                    <Col span={3} className="activitycolumn"></Col>
                    <Col span={3} className="activitycolumn"></Col>
                </Row>
                <Row type="flex">
                    <Col span={3}></Col>
                    <Col span={3} className="activitycolumn"></Col>
                    <Col span={3} className="activitycolumn"></Col>
                    <Col span={3} className="activitycolumn"></Col>
                    <Col span={3} className="activitycolumn"></Col>
                    <Col span={3} className="activitycolumn"></Col>
                    <Col span={3} className="activitycolumn"></Col>
                    <Col span={3} className="activitycolumn"></Col>
                </Row>
                <Row type="flex">
                    <Col span={3}></Col>
                    <Col span={3} className="activitycolumn"></Col>
                    <Col span={3} className="activitycolumn"></Col>
                    <Col span={3} className="activitycolumn"></Col>
                    <Col span={3} className="activitycolumn"></Col>
                    <Col span={3} className="activitycolumn"></Col>
                    <Col span={3} className="activitycolumn"></Col>
                    <Col span={3} className="activitycolumn"></Col>
                </Row>
                <Row type="flex">
                    <Col span={3}></Col>
                    <Col span={3} className="activitycolumn"></Col>
                    <Col span={3} className="activitycolumn"></Col>
                    <Col span={3} className="activitycolumn"></Col>
                    <Col span={3} className="activitycolumn"></Col>
                    <Col span={3} className="activitycolumn"></Col>
                    <Col span={3} className="activitycolumn"></Col>
                    <Col span={3} className="activitycolumn"></Col>
                </Row>
                <Row type="flex">
                    <Col span={3}></Col>
                    <Col span={3} className="activitycolumn"></Col>
                    <Col span={3} className="activitycolumn"></Col>
                    <Col span={3} className="activitycolumn"></Col>
                    <Col span={3} className="activitycolumn"></Col>
                    <Col span={3} className="activitycolumn"></Col>
                    <Col span={3} className="activitycolumn"></Col>
                    <Col span={3} className="activitycolumn"></Col>
                </Row>
                <Row type="flex">
                    <Col span={3}></Col>
                    <Col span={3} className="activitycolumn"></Col>
                    <Col span={3} className="activitycolumn"></Col>
                    <Col span={3} className="activitycolumn"></Col>
                    <Col span={3} className="activitycolumn"></Col>
                    <Col span={3} className="activitycolumn"></Col>
                    <Col span={3} className="activitycolumn"></Col>
                    <Col span={3} className="activitycolumn"></Col>
                </Row>
                <Row type="flex">
                    <Col span={3}></Col>
                    <Col span={3} className="activitycolumn"></Col>
                    <Col span={3} className="activitycolumn"></Col>
                    <Col span={3} className="activitycolumn"></Col>
                    <Col span={3} className="activitycolumn"></Col>
                    <Col span={3} className="activitycolumn"></Col>
                    <Col span={3} className="activitycolumn"></Col>
                    <Col span={3} className="activitycolumn"></Col>
                </Row>
                <Row type="flex">
                    <Col span={3}></Col>
                    <Col span={3} className="activitycolumn"></Col>
                    <Col span={3} className="activitycolumn"></Col>
                    <Col span={3} className="activitycolumn"></Col>
                    <Col span={3} className="activitycolumn"></Col>
                    <Col span={3} className="activitycolumn"></Col>
                    <Col span={3} className="activitycolumn"></Col>
                    <Col span={3} className="activitycolumn"></Col>
                </Row>
                <Row type="flex">
                    <Col span={3}></Col>
                    <Col span={3} className="activitycolumn"></Col>
                    <Col span={3} className="activitycolumn"></Col>
                    <Col span={3} className="activitycolumn"></Col>
                    <Col span={3} className="activitycolumn"></Col>
                    <Col span={3} className="activitycolumn"></Col>
                    <Col span={3} className="activitycolumn"></Col>
                    <Col span={3} className="activitycolumn"></Col>
                </Row>
                <Row type="flex">
                    <Col span={3}></Col>
                    <Col span={3} className="activitycolumn"></Col>
                    <Col span={3} className="activitycolumn"></Col>
                    <Col span={3} className="activitycolumn"></Col>
                    <Col span={3} className="activitycolumn"></Col>
                    <Col span={3} className="activitycolumn"></Col>
                    <Col span={3} className="activitycolumn"></Col>
                    <Col span={3} className="activitycolumn"></Col>
                </Row>
                <Row type="flex">
                    <Col span={3}></Col>
                    <Col span={3} className="activitycolumn"></Col>
                    <Col span={3} className="activitycolumn"></Col>
                    <Col span={3} className="activitycolumn"></Col>
                    <Col span={3} className="activitycolumn"></Col>
                    <Col span={3} className="activitycolumn"></Col>
                    <Col span={3} className="activitycolumn"></Col>
                    <Col span={3} className="activitycolumn"></Col>
                </Row><Row type="flex">
                    <Col span={3}></Col>
                    <Col span={3} className="activitycolumn"></Col>
                    <Col span={3} className="activitycolumn"></Col>
                    <Col span={3} className="activitycolumn"></Col>
                    <Col span={3} className="activitycolumn"></Col>
                    <Col span={3} className="activitycolumn"></Col>
                    <Col span={3} className="activitycolumn"></Col>
                    <Col span={3} className="activitycolumn"></Col>
                </Row>


            </div>

        );
    }
}

export default ActivityGrid;