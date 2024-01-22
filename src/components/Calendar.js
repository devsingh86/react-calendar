import React, { useState, useMemo } from 'react';
import '../styles/calendar.css';

const DAYS_OF_WEEK = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const Calendar = () => {
 const [currentDate, setCurrentDate] = useState(new Date());

 const getDaysInMonth = useMemo(() => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    return Array.from({ length: daysInMonth }, (_, i) => i + 1);
}, [currentDate]);

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
        {DAYS_OF_WEEK.map(day => (
          <div key={day} className="day">
            {day}
          </div>
        ))}
      </div>
    
      <div className="dates">
        {getDaysInMonth.map(day => (
            <div key={day} className="date">
                {day}
            </div>
        ))}
      </div>
      
    </div>
 );
};

export default Calendar;