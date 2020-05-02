import React from "react";
import nodelogo from "../../images/nodejs.svg";
import rubylogo from "../../images/ruby.svg";
import railslogo from "../../images/rails2.svg";
import mongologo from "../../images/mongodb.svg";
import postgreslogo from "../../images/postgres.svg";
const BackEnd = () => {
  return (
    <div id="individual-stack-container">
      <div id="stack-title"> backend</div>
      <div id="stack-icon-container">
        <div id="icon-container">
          <img src={nodelogo} id="icon" />
          <div id="icon-title">Node Js</div>
        </div>
        <div id="icon-container">
          <img src={rubylogo} id="icon" />
          <div id="icon-title">Ruby</div>
        </div>
        <div id="icon-container">
          <img src={railslogo} id="icon" />
          <div id="icon-title">Ruby on Rails</div>
        </div>
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

export default BackEnd;
