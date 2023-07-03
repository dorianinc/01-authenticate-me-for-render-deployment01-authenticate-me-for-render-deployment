import { createContext, useContext, useState } from "react";
import { useLocation } from "react-router-dom";
export const CalendarContext = createContext();
export const useCalendar = () => useContext(CalendarContext);

export default function CalendarProvider({ children }) {
  const [onStartDate, setOnStartDate] = useState(true);
  const [showCalendar, setShowCalendar] = useState(false);
  const [focus, setFocus] = useState("");
  const [startDate, setStartDate] = useState(localStorage.getItem("storedStartDate"));
  const [endDate, setEndDate] = useState(localStorage.getItem("storedEndDate"));
  const [booking, setBooking] = useState([
    {
      startDate: startDate ? new Date(startDate) : null,
      endDate: endDate ? new Date(endDate) : new Date(""),
      color: "#5de373",
      key: "selection",
    },
  ]);

  const [numAdults, setNumAdults] = useState(1);
  const [numChildren, setNumChildren] = useState(0);
  const [numInfants, setNumInfants] = useState(0);
  const [occupancy, setOccupancy] = useState(1);
  

  return (
    <CalendarContext.Provider
      value={{
        startDate, // holds start date
        setStartDate, // sets start date
        endDate, // holds end date
        setEndDate, //sets end date
        onStartDate, // boolean the determines whether we are focused on the start date value or not
        setOnStartDate, // sets on setOnstartDate (boolean)
        booking, // holds information for calendar like color and startdate/endate object
        setBooking, // updates booking each time we select a new date
        showCalendar, // true of false value that can be used to determine if calendar is being shown or not
        setShowCalendar, // toggles showCalendar
        focus, // highlights the startdate or endate when they are focused on with a green sillhouette
        setFocus, // this can be anything but's currently set to "focused" and unfocused
        numAdults,
        setNumAdults,
        numChildren,
        setNumChildren,
        numInfants,
        setNumInfants,
        occupancy, 
        setOccupancy
      }}
    >
      {children}
    </CalendarContext.Provider>
  );
}
