import React, { useState } from "react";

const Header = () => {
  let time, Day;
  const [ctime, setCtime] = useState(time);
  const [cdate, setCdate] = useState(Day);
  const updateTime = () => {
    time = new Date().toLocaleTimeString();
    setCtime(time);
  };
  setInterval(updateTime, 1000);
  const updateDate = () => {
    Day = new Date().toLocaleDateString();
    setCdate(Day);
  };
  setInterval(updateDate, 0);

  return (
    <>
      <div className="header">
        <h1 className="logo">AIRTEAM</h1>
        <h1 className="timeD">{ctime}</h1>
        <h1 className="Days">{cdate}</h1>
      </div>
    </>
  );
};

export default Header;
