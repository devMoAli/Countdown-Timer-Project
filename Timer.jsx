import React, { useState, useEffect } from "react";
import "./timer.css";

// function Timer({ duration }) {
//   const [time, setTime] = useState(duration);

//   useEffect(() => {
//     setTimeout(() => {
//       setTime(time - 1000);
//     }, 1000);
//   }, [time]);
//   const getFormattedTime = (milliseconds) => {
//     let total_seconds = parseInt(Math.floor(milliseconds / 1000));
//     let total_minutes = parseInt(Math.floor(total_seconds / 60));
//     let total_hours = parseInt(Math.floor(total_minutes / 60));
//     let days = parseInt(Math.floor(total_hours / 24));
//     let seconds = parseInt(total_seconds % 60);
//     let minutes = parseInt(total_minutes % 60);
//     let hours = parseInt(total_hours % 24);

//     return `${days}: ${hours}: ${minutes}: ${seconds}`;
//   };
//   return <h1>{getFormattedTime(time)}</h1>;
// }

// export default Timer;


function Timer({ duration }) {
    const [time, setTime] = useState(duration);
  
    useEffect(() => {
      if (time > 0) {
        const timerId = setTimeout(() => {
          setTime(time - 1000);
        }, 1000);
        return () => clearTimeout(timerId);
      }
    }, [time]);
  
    const getFormattedTime = (milliseconds) => {
      let total_seconds = parseInt(Math.floor(milliseconds / 1000));
      let total_minutes = parseInt(Math.floor(total_seconds / 60));
      let total_hours = parseInt(Math.floor(total_minutes / 60));
      let days = parseInt(Math.floor(total_hours / 24));
      let seconds = parseInt(total_seconds % 60);
      let minutes = parseInt(total_minutes % 60);
      let hours = parseInt(total_hours % 24);
  
      return { days, hours, minutes, seconds };
    };
  
    const { days, hours, minutes, seconds } = getFormattedTime(time);
  
    return (
      <div className="timer">
        <div className="time-segment">
          <div className="time">{days}</div>
          <div className="label">Days</div>
        </div>
        <div className="time-segment">
          <div className="time">{hours}</div>
          <div className="label">Hours</div>
        </div>
        <div className="time-segment">
          <div className="time">{minutes}</div>
          <div className="label">Minutes</div>
        </div>
        <div className="time-segment">
          <div className="time">{seconds}</div>
          <div className="label">Seconds</div>
        </div>
      </div>
    );
  }
  
  export default Timer;