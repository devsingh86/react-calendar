// Calendar.js
import React, { useState } from 'react';
import '../styles/calendar.css';


const Calendar = () => {
  // Use state to keep track of the current date
  const [currentDate, setCurrentDate] = useState(new Date());

  // Function to get the days in the current month
  const getDaysInMonth = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    return Array.from({ length: daysInMonth }, (_, i) => i + 1);
  };

  return (
    <div className="calendar">
      <div className="header">
        <button onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1))}>
          Prev
        </button>
        <h2>{new Date(currentDate).toLocaleString('default', { month: 'long', year: 'numeric' })}</h2>
        <button onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1))}>
          Next
        </button>
      </div>
      <div className="days">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div key={day} className="day">
            {day}
          </div>
        ))}
      </div>
      <div className="dates">
        {getDaysInMonth().map(day => (
          <div key={day} className="date">
            {day}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
