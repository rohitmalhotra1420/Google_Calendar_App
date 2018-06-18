import {DatePicker} from 'antd';

const dateObj = new Date();

const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sept','Oct','Nov','Dec'];

const days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];

const { MonthPicker, RangePicker } = DatePicker;

const obj = {
  calendarObj:{
                today:days[dateObj.getDay()]+", "+months[dateObj.getMonth()]+" "+dateObj.getDate(),
                days:['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],
                hours:['1 am', '2 am', '3 am', '4 am', '5 am', '6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm',
                       '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm', '8 pm', '9 pm', '10 pm', '11 pm'],
                months:['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sept','Oct','Nov','Dec'],
  },
  modalObj:{
                MonthPicker:MonthPicker,
                RangePicker:RangePicker,
                dateFormat:'MM/DD/YYYY',
                monthFormat:'YYYY/MM',
  },

}



export default obj;
