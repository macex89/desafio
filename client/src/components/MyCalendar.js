import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function MyCalendar() {
  const [date, setDate] = React.useState(new Date());

  return (
    <div className='calendar'>
    <Calendar
      onChange={setDate}
      value={date}
      
    />
   
    </div>
  );
}

export default MyCalendar;




