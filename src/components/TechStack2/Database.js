import React from "react";
import mongologo from "../../images/mongodb.svg";
import postgreslogo from "../../images/postgres.svg";
const Database = () => {
  return (
    <div id="individual-stack-container">
      <div id="stack-title"> database</div>
      <div id="stack-icon-container">
        <div id="icon-container">
          <img src={mongologo} id="icon" />
          <div id="icon-title">Mongo DB</div>
        </div>
        <div id="icon-container">
          <img src={postgreslogo} id="icon" />
          <div id="icon-title">PostgresQL</div>
        </div>
      </div>
    </div>
  );
};

export default Database;
