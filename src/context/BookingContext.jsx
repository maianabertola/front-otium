import React, { useState } from "react";
import { createContext } from "react";

export const BookingContext = createContext();
const BookingContextWrapper = ({ children }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [dates, setDates] = useState([]);
  return (
    <BookingContext.Provider
      value={{
        startDate,
        setStartDate,
        endDate,
        setEndDate,
        dates,
        setDates,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};

export { BookingContextWrapper };
