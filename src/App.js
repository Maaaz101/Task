import React from "react";
import "./App.css";
import SearchComponent from "./Components/SearchComponent";
function App() {
  return (
      <div className="App">
        <SearchComponent placeholder="Search by name or category" />
      </div>
  );
}

export default App;
