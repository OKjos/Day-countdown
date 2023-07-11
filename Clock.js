import React, { useEffect, useState } from "react";

const Clock = ({ timeDifference }) => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const leading0 = (num) => {
    return num < 10 ? "0" + num : num;
  };

  const getTimeUntil = (timeDifference) => {
    if (timeDifference < 0) {
      setDays(0);
      setHours(0);
      setMinutes(0);
      setSeconds(0);
    } else {
      setDays(Math.floor(timeDifference / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((timeDifference / (1000 * 60 * 60)) % 24));
      setMinutes(Math.floor((timeDifference / (1000 * 60)) % 60));
      setSeconds(Math.floor((timeDifference / 1000) % 60));
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      getTimeUntil(timeDifference);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeDifference]);

  return (
    <div className="main">
      <h1>Countdown Timer</h1>
      <div className="Clock-days">{leading0(days)} Days</div>
      <div className="Clock-hours">{leading0(hours)} Hours</div>
      <div className="Clock-minutes">{leading0(minutes)} Minutes</div>
      <div className="Clock-seconds">{leading0(seconds)} Seconds</div>
    </div>
  );
};

export default Clock;