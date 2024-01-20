import React from "react";
import ReactDOM from "react-dom/client";
import Calendar from "./src/components/Calendar";

const App = () => {
    return (
        <div className="App">
          <h1 className="text-3xl font-bold mb-4">React Calendar</h1>
          <Calendar />
        </div>
      );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App/>);