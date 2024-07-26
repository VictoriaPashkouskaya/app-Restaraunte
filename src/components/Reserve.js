import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../CalendarCustom.css';
// Здесь вы можете определить свои стили

const Reserve = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState('');
  const [reservedDates, setReservedDates] = useState({});
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const loadedDates = getReservedDates();
    setReservedDates(loadedDates);

    if (location.state && location.state.contactData) {
      setUserName(location.state.contactData.name);
    }
  }, [location.state]);

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const dateStr = date.toISOString().split('T')[0];
    const newReservedDates = {
      ...reservedDates,
      [dateStr]: [...(reservedDates[dateStr] || []), time]
    };
    localStorage.setItem('reservedDates', JSON.stringify(newReservedDates));
    setReservedDates(newReservedDates);
    navigate('/thank-you', { state: { name: userName, date: dateStr, time } });
  };

  const getReservedDates = () => {
    const reservedDates = localStorage.getItem('reservedDates');
    return reservedDates ? JSON.parse(reservedDates) : {};
  };

  const availableTimes = ['12:00', '13:00', '14:00', '18:00', '19:00', '20:00'];
  const dateStr = date.toISOString().split('T')[0];
  const reservedTimes = reservedDates[dateStr] || [];

  const getTileClassName = ({ date, view }) => {
    if (view === 'month') {
      const dateStr = date.toISOString().split('T')[0];
      const reservations = reservedDates[dateStr];

      if (reservations && reservations.length === availableTimes.length) {
        return 'react-calendar__tile--fully-reserved';
      } else if (reservations && reservations.length > 0) {
        return 'react-calendar__tile--partially-reserved';
      } else {
        return 'react-calendar__tile--free';
      }
    }
    return null;
  };

  const getTileIndicatorClassName = ({ date, view }) => {
    if (view === 'month') {
      const dateStr = date.toISOString().split('T')[0];
      const reservations = reservedDates[dateStr];

      if (reservations && reservations.length === availableTimes.length) {
        return 'tile-indicator tile-indicator--fully-reserved';
      } else if (reservations && reservations.length > 0) {
        return 'tile-indicator tile-indicator--partial';
      } else {
        return 'tile-indicator tile-indicator--free';
      }
    }
    return null;
  };

  return (
    <div className="container">
      <h1 className="header">Reserve a Table</h1>
      <div className="calendar-container">
        <Calendar
          onChange={handleDateChange}
          value={date}
          tileClassName={getTileClassName}
          tileContent={({ date, view }) => {
            if (view === 'month') {
              return <div className={getTileIndicatorClassName({ date, view })} />;
            }
            return null;
          }}
        />
      </div>
      <form onSubmit={handleSubmit} className="reservation-form">
        <h2>Welcome, {userName}!</h2>
        <label htmlFor="time-select">Choose a time:</label>
        <select
          id="time-select"
          value={time}
          onChange={handleTimeChange}
          required
        >
          <option value="" disabled>Select a time</option>
          {availableTimes.map((timeSlot) => (
            <option
              key={timeSlot}
              value={timeSlot}
              disabled={reservedTimes.includes(timeSlot)}
            >
              {timeSlot}
            </option>
          ))}
        </select>
        <button type="submit" className="submit-button">Reserve</button>
        <button
          type="button"
          className="back-button"
          onClick={() => navigate(-1)}
        >
          Back
        </button>
      </form>
      
      <h3 className="available-times-header">
        Available Times on {dateStr}:
      </h3>
      <ul className="available-times-list">
        {availableTimes.map((timeSlot) => (
          <li key={timeSlot} style={{ color: reservedTimes.includes(timeSlot) ? 'red' : 'green' }}>
            {timeSlot} - {reservedTimes.includes(timeSlot) ? 'Reserved' : 'Available'}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reserve;

