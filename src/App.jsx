import React from "react";
import StarRating from "./appsFolder/starRating/components/StarRating";

function App() {
  return (
    <>
      <StarRating
        style={{ backgroundColor: "lightblue" }}
        onDoubleClick={(e) => alert("double click")}
      />
    </>
  );
}

export default App;
