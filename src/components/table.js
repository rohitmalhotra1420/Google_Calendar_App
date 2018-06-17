import React,{Component} from 'react';
import DateColumn from './DateView';
import HourColumn from './HourView';
import MeetingBar from './meeting_bar';

const DateHour= {
                    days:['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],
                    hours:['1 am', '2 am', '3 am', '4 am', '5 am', '6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm', '8 pm', '9 pm', '10 pm', '11 pm'],
                };


class Table extends Component{
     constructor(props){
        super(props);

        //states of the dates and current datte is kept empty
        this.state={
            weekDates:[],
            weekStartDate:null,
            weekStartDateMonth:null,
            weekStartDateYear:null,
        };
    } 

    //this function calls the Date() function while rendering the table component
    componentDidMount() {
     this.dates();
    }

    //this function calculates all the dates of the week with respect to the present date
     dates(){
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

            weekDates.push(new Date(nextDate).toLocaleDateString()) ;
        }
        //the current empty states of dates and currentDate are updated with dates of current week's dates
        this.setState({
                weekDates:weekDates,
                weekStartDate:weekStartDateString,
                weekStartDateMonth:today.getMonth(),
                weekStartDateYear:today.getFullYear()

            })
         console.log(weekStartDateString,weekDates,today.getMonth(),today.getFullYear());
     }


    render(){
        return(
            <div>
                <MeetingBar weekChange={(updatedDates)=>{this.setState({weekDates:updatedDates})}}
                            //this change the states of dates and updates them with next week
                            weekStartDate={this.state.weekStartDate}
                            //passing the current date of the respective week
                            weekStartDateChange={(updatedWeekStartDate)=>{this.setState({weekStartDate:updatedWeekStartDate})}}
                            //this changes the state curent date to date after one week
                            weekStartDateMonth={this.state.weekStartDateMonth}

                            weekStartDateYear={this.state.weekStartDateYear}

                            monthChange={(updatedWeekStartDateMonth)=>{this.setState({weekStartDateMonth:updatedWeekStartDateMonth})}}

                            yearChange={(updatedWeekStartDateYear)=>{this.setState({weekStartDateYear:updatedWeekStartDateYear})}}
                />

                <DateColumn days={DateHour.days}
                            //the weekdays are passed to the DateColumn
                            dates={this.state.weekDates}
                            //this is the current state of dates

                />

                <HourColumn dateHour={DateHour}
                            //the Days and hours are passed here
                            days={7}
                            //it refers to no. of days to be shown in calendar
                            dates={this.state.weekDates}
                />
            </div>
        );
    }
}

export default Table;
