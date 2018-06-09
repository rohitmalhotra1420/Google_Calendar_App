import React, { Component } from 'react';
import {Row,Col,Icon,Button,Tooltip} from 'antd';




class MeetingBar extends Component{

    render(){
        const months=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sept','Oct','Nov','Dec'];
        const days=['Mon','Tue','Wed','Thu','Fri','Sat','Sun']
        const fullDate=new Date();
        const date=months[fullDate.getMonth()]+" "+fullDate.getFullYear();
        const today=days[fullDate.getDay()-1]+", "+months[fullDate.getMonth()]+" "+fullDate.getDate();
        return(
            <Row type="flex"className='meeting-bar'>
                <Col span={3}></Col>
                <Col span={4} className="">
                    <p className=""><Icon type="calendar" /> Meeting Calendar</p>
                </Col>
                <Col span={11} className="">
                    <Tooltip placement="leftTop" title={today}>
                        <Button className='today-btn'>Today</Button>
                    </Tooltip>
                </Col>
                <Col span={3} className="center">
                    <Button icon="left"className="left-arr-btn"/>
                    <Button icon="right"/>
                </Col>
                <Col span={3} className="center">
                    <p className="">{date}</p>
                </Col>

            </Row>
        );
    }
}

export default MeetingBar;