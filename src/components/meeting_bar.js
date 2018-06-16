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
                        <Button className='today-btn'onClick={()=>{this.Dates()}}>Today</Button>
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

         var weekStartDate=new Date(weekStartDate);
        console.log(weekStartDate);
         //on clicking right button upcoming weeks are calculated and updated
        if(e.target.value==="right"){
            var DateForNextWeek = new Date(weekStartDate.getTime() + 7 * 24 * 60 * 60 * 1000);
            //Date after 7 days from current date
        }
        //else if left button is clicked than previous weeks are calculated
        else{
            var DateForNextWeek = new Date(weekStartDate.getTime() - 7 * 24 * 60 * 60 * 1000);
            //Date before 7 days from current date
        }
        const weekDates = [];
        //empty array in which dates are pushed after calculation
        var weekStartDateMonth=DateForNextWeek.getMonth();
         var weekStartDateYear=DateForNextWeek.getFullYear();
         console.log(weekStartDateMonth,weekStartDateYear)
        //this loop calcultes the next and previous dates of the week W.R.T. current date and push them to an array
        for(var i = 0; i < 7; i++) {

            var nextDate = new Date(DateForNextWeek.getTime() + i * 24 * 60 * 60 * 1000);

            weekDates.push(new Date(nextDate).toLocaleDateString());
        }
        console.log(weekStartDate);
        this.props.weekChange(weekDates);
        //updated dates are passed to table component where state is updated
        this.props.weekStartDateChange(DateForNextWeek);
        //Days after 7 days from now is passed to table component where state is updated
        this.props.monthChange(weekStartDateMonth);
        this.props.yearChange(weekStartDateYear);
    }

    Dates(){
        var today = new Date();
        //object for Date() class
        const currentDay = today.getDay();
        //calculates the current Day Number
        const currentDate = today.getDate() ;
        //calculates the current date
        const startDateOfWeek = currentDate-currentDay;

        const weekStartDateString= new Date(today.setDate(startDateOfWeek));

        const weekDates = [];
        //empty array in which dates are pushed after calculation

        //this loop calcultes the next and previous dates of the week W.R.T. current date and push them to an array
        for(var i = 0; i < 7; i++) {

            var nextDate = new Date(weekStartDateString.getTime() + i * 24 * 60 * 60 * 1000);

            weekDates.push( new Date(nextDate).toLocaleDateString()) ;
        }
        //the current empty states of dates and currentDate are updated with dates of current week's dates

        this.props.weekChange(weekDates);
        //updated dates are passed to table component where state is updated
        this.props.weekStartDateChange(weekStartDateString);
        //Days after 7 days from now is passed to table component where state is updated
        this.props.monthChange(today.getMonth());
        this.props.yearChange(today.getFullYear());
         console.log(weekStartDateString,weekDates,today.getMonth(),today.getFullYear());
     }




}

export default MeetingBar;
