import React, { useState } from "react";
import { createContext } from "react";

export const BookingContext = createContext();
const BookingContextWrapper = ({ children }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [dates, setDates] = useState([]);
  const [minEndDate, setMinEndDate] = useState(null);

  // console.log("starDate", startDate);
  // console.log("endDates", endDate);
  // console.log("dates", dates);
  // console.log("minenddate", minEndDate);

  return (
    <BookingContext.Provider
      value={{
        startDate,
        setStartDate,
        endDate,
        setEndDate,
        dates,
        setDates,
        minEndDate,
        setMinEndDate,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};

export { BookingContextWrapper };
