import React,{Component} from 'react';
import DateColumn from './DateView';
import HourColumn from './HourView';


const DateHour= {
                    days:['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
                    hours:['1 am', '2 am', '3 am', '4 am', '5 am', '6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm', '8 pm', '9 pm', '10 pm', '11 pm'],
                };

class Table extends Component{
    render(){
        return(
            <div>
                <DateColumn days={DateHour.days}/>
                <HourColumn dateHour={DateHour}/>
            </div>
        );
    }
}

export default Table;