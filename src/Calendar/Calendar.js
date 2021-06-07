import React, { useState, useEffect } from 'react'
import { CalendarContainer, Span } from './Calendar-style'

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
                'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];


function Calendar() {
  const selectedDate = new Date();

  return (
      <CalendarContainer>
        <Span>{selectedDate.getDate()}</Span>
        <Span>{months[selectedDate.getMonth()]}</Span>
        <Span>{selectedDate.getFullYear()}</Span>
      </CalendarContainer>
  );
}

export default Calendar
