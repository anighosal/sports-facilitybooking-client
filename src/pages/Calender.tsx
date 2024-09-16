import React from "react";

interface CalendarProps {
  year: number;
  month: number;
}

const Calendar: React.FC<CalendarProps> = ({ year, month }) => {
  const generateCalendar = (year: number, month: number) => {
    const firstDay = new Date(year, month - 1, 1);
    const daysInMonth = new Date(year, month, 0).getDate();
    let startDay = firstDay.getDay();

    let calendar: (number | "")[][] = [];
    let week: (number | "")[] = new Array(7).fill("");

    for (let i = 0; i < startDay; i++) {
      week[i] = "";
    }

    for (let day = 1; day <= daysInMonth; day++) {
      week[startDay] = day;
      startDay++;

      if (startDay > 6) {
        calendar.push(week);
        week = new Array(7).fill("");
        startDay = 0;
      }
    }

    if (week.some((day) => day !== "")) {
      calendar.push(week);
    }

    return calendar;
  };

  const calendar = generateCalendar(year, month);

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const monthName = monthNames[month - 1];

  return (
    <div>
      <h2 className="text-center mb-5">{`${monthName} ${year}`}</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          gap: "2px",
        }}
      >
        <div style={{ textAlign: "center" }}>Su</div>
        <div style={{ textAlign: "center" }}>Mo</div>
        <div style={{ textAlign: "center" }}>Tu</div>
        <div style={{ textAlign: "center" }}>We</div>
        <div style={{ textAlign: "center" }}>Th</div>
        <div style={{ textAlign: "center" }}>Fr</div>
        <div style={{ textAlign: "center" }}>Sa</div>
        {calendar.flat().map((day, index) => (
          <div
            key={index}
            style={{
              textAlign: "center",
              padding: "5px",
              border: "1px solid #ddd",
            }}
          >
            {day}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
