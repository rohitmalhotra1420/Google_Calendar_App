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
                    <Button icon="left"
                            className="left-arr-btn"
                            value="left"
                            onClick={(e) => {this.ChangeWeek(this.props.currentDate,e)}}
                            //A click event takes place and call the change week function passing in it the current date of displayed week
                    />
                    <Button icon="right"
                            value="right"
                            onClick={(e) => {this.ChangeWeek(this.props.currentDate,e)}}
                            //A click event takes place and call the change week function passing in it the current date of displayed week
                    />
                </Col>
                <Col span={3} className="center">
                    <p className="">{date}</p>
                </Col>

            </Row>
        );
    }


     //The function calculates and updates the next and previous weeks
     ChangeWeek(currentDate,e){
        var presentDateForCurrentWeek = new Date(currentDate);
        //date of current week

         //on clicking right button upcoming weeks are calculated and updated
        if(e.target.value==="right"){
            var DateForNextWeek = new Date(presentDateForCurrentWeek.getTime() + 7 * 24 * 60 * 60 * 1000);
            //Date after 7 days from current date
        }
        //else if left button is clicked than previous weeks are calculated
        else{
            DateForNextWeek = new Date(presentDateForCurrentWeek.getTime() - 7 * 24 * 60 * 60 * 1000);
            //Date before 7 days from current date
        }
        var DayForNextWeek=DateForNextWeek.getDay();
        //calculates the weekday number
        var NumberedDateForNextWeek=DateForNextWeek.getDate();
        //calculates the integer date
        const dates=[];
        //empty array where new dates are pushed
        var weekDate;

        //this loop calcultes the next and previous dates of the week W.R.T. current date and push them to an array
        for(var i = 0; i < 7; i++) {
            if (i <= DayForNextWeek) {
                weekDate= new Date().setDate(NumberedDateForNextWeek - (DayForNextWeek - i));
            } else {
                weekDate= new Date().setDate(NumberedDateForNextWeek + (i - DayForNextWeek));
            }
            dates.push( new Date(weekDate).getDate()) ;
        }

        this.props.weekChange(dates);
        //updated dates are passed to table component where state is updated
        this.props.currentDateChange(DateForNextWeek);
        //Days after 7 days from now is passed to table component where state is updated
    }





}

export default MeetingBar;