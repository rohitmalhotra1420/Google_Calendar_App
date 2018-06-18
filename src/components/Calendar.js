import React,{Component} from 'react';
import DateColumn from './DateView';
import HourColumn from './HourView';
import MeetingBar from './MeetingBar';
import calendarFunctions from '../helpers/CalendarFunctions';
import obj from '../helpers/Constants';


class Calendar extends Component{
     constructor(props){
        super(props);
        this.state={
            weekDates:[],
            weekStartDate:null,
            weekStartDateMonth:null,
            weekStartDateYear:null,
        };
    }

    componentDidMount() {
     this.dates();
    }

     dates(){
       var result=calendarFunctions.currentWeekDates();
       this.setState({
               weekDates:result.weekDates,
               weekStartDate:result.weekStartDateString,
               weekStartDateMonth:result.today.getMonth(),
               weekStartDateYear:result.today.getFullYear()
       })
     }


    render(){
        return(
            <div>
                <MeetingBar weekChange = {(updatedDates)=>{this.setState({weekDates:updatedDates})}}
                            //this change the states of dates and updates them with next week
                            weekStartDate = {this.state.weekStartDate}
                            //passing the current date of the respective week
                            weekStartDateChange = {(updatedWeekStartDate)=>{this.setState({weekStartDate:updatedWeekStartDate})}}
                            //this changes the state curent date to date after one week
                            weekStartDateMonth = {this.state.weekStartDateMonth}

                            weekStartDateYear = {this.state.weekStartDateYear}

                            monthChange = {(updatedWeekStartDateMonth)=>{this.setState({weekStartDateMonth:updatedWeekStartDateMonth})}}

                            yearChange = {(updatedWeekStartDateYear)=>{this.setState({weekStartDateYear:updatedWeekStartDateYear})}}
                />

                <DateColumn days = {obj.calendarObj.days}
                            //the weekdays are passed to the DateColumn
                            dates = {this.state.weekDates}
                            //this is the current state of dates

                />

                <HourColumn hours = {obj.calendarObj.hours}
                            //the Days and hours are passed here
                            days = {7}
                            //it refers to no. of days to be shown in calendar
                            dates = {this.state.weekDates}
                />
            </div>
        );
    }
}

export default Calendar;
