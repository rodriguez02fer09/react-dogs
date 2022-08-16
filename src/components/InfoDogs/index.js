import React from "react";


const InfoDogs = (props) => {
  const renderDogs = () => {
    return (
      <div>
        <li>Age: {props.age}</li>
        <li>Gender: {props.gender}</li>
        <li>Race: {props.race}</li>
        <li>Size: {props.size}</li>
      </div>
    );
  };
  return (
  <div>
    <h2> Name:{props.name} </h2>
      <ul>{renderDogs()}</ul>
      <img src={props.url} width="250px" alt=""/>
  </div>
  );
};
export default InfoDogs;
