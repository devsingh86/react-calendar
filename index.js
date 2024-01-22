import React from "react";
import ReactDOM from "react-dom/client";
import Calendar from "./src/components/Calendar";
import DatePickerComp from "./src/components/Datepicker";


const App = () => {
    return (
        <div className="App">
          <h1>React Calendar</h1>
          <Calendar />
          <h2>React Datepicker</h2>
          <DatePickerComp />
        </div>
      );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App/>);