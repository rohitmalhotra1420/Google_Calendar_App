import React, { Component } from 'react';
import {Row,Col,Icon,Button,Tooltip} from 'antd';
import calendarFunctions from './CalendarFunctions';



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
                        <Button className='today-btn'onClick={()=>{this.currentWeekDates()}}>Today</Button>
                    </Tooltip>
                </Col>
                <Col span={3} className="center">
                    <Button icon="left"
                            className="left-arr-btn"
                            value="left"
                            onClick={(e) => {this.ChangeWeek(this.props.weekStartDate,e)}}
                            //A click event takes place and call the change week function passing in it the current date of displayed week
                    />
                    <Button icon="right"
                            value="right"
                            onClick={(e) => {this.ChangeWeek(this.props.weekStartDate,e)}}
                            //A click event takes place and call the change week function passing in it the current date of displayed week
                    />
                </Col>
                <Col span={3} className="center">
                    <p className="">{months[this.props.weekStartDateMonth]} {this.props.weekStartDateYear}</p>
                </Col>

            </Row>
        );
    }


     //The function calculates and updates the next and previous weeks
     ChangeWeek(weekStartDate,e){
        var result = calendarFunctions.futurePastWeekDates(weekStartDate,e);
        this.props.weekChange(result.weekDates);
        this.props.weekStartDateChange(result.startDateForNextWeek);
        this.props.monthChange(result.weekStartDateMonth);
        this.props.yearChange(result.weekStartDateYear);
    }

    currentWeekDates(){
        var result=calendarFunctions.currentWeekDates();
        this.props.weekChange(result.weekDates);
        this.props.weekStartDateChange(result.weekStartDateString);
        this.props.monthChange(result.today.getMonth());
        this.props.yearChange(result.today.getFullYear());
     }




}

export default MeetingBar;
