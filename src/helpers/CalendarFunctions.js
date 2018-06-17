

const calendarFunctions = {

  currentWeekDates:function(){

    var today = new Date();
    const currentDay = today.getDay();
    const currentDate = today.getDate() ;
    const startDateOfWeek = currentDate-currentDay;
    const weekStartDateString = new Date(today.setDate(startDateOfWeek));
    var weekDates=weekCalculator(weekStartDateString);
    var result = {
      today:today,
      weekStartDateString:weekStartDateString,
      weekDates:weekDates
    }
    return result
  },

  futurePastWeekDates:function(weekStartDate,e){

    var cal = 7 * 24 * 60 * 60 * 1000;
    var startDateForNextWeek = e.target.value ==="right" ? new Date(weekStartDate.getTime() + cal) : new Date(weekStartDate.getTime() - cal);
    var weekStartDateMonth = startDateForNextWeek.getMonth();
    var weekStartDateYear = startDateForNextWeek.getFullYear();
    var weekDates=weekCalculator(startDateForNextWeek);
    var result = {
      weekDates:weekDates,
      startDateForNextWeek:startDateForNextWeek,
      weekStartDateMonth:weekStartDateMonth,
      weekStartDateYear:weekStartDateYear
    }
    return result
  },

}

function weekCalculator(weekStartDate){
  const weekDates = [];
  for(var i = 0; i < 7; i++) {
    var nextDate = new Date(weekStartDate.getTime() + i * 24 * 60 * 60 * 1000);
    weekDates.push(new Date(nextDate).toLocaleDateString());
  }
  return weekDates
}

export default calendarFunctions;
