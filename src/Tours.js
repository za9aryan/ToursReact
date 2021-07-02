import React from "react";
import Tour from "./Tour";
const Tours = (props) => {
  return (
    <div>
      <div className="title">
        <h2>Our Tours</h2>
        <div className="underline"></div>
      </div>
      {props.tours.map((tour) => {
        return <Tour key={tour.id} {...tour} removeTour={props.removeTour} />;
      })}
    </div>
  );
};

export default Tours;
