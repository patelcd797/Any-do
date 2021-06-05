import React, { useState, useEffect } from 'react'
import { CalendarContainer, Span } from './Calendar-style'

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
                'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];


function Calendar() {
  const selectedDate = new Date();
  const calendar = useState({
    date : selectedDate.getDate(),  
    month: selectedDate.getMonth(),
    year: selectedDate.getFullYear(),
  });


  useEffect(() => {}, [])

  return (
      <CalendarContainer>
        <Span>{calendar.date}</Span>  
        <Span>{months[calendar.month]}</Span>
        <Span>{calendar.year}</Span>
      </CalendarContainer>
  );
}

export default Calendar
