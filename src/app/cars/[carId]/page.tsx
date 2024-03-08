import React from "react";

const CarDetailPage = (props) => {
  return <div>CarDetailPage
    <h1>
      Car No. {props.params.carId}
    </h1>
    <p>SerachBar</p>
  </div>;
};

export default CarDetailPage;
