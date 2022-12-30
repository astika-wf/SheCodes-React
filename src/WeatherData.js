import React from "react";
import "./WeatherData.css";

import Date from "./Date";
import Time from "./Time";
import Icon from "./Icon";
import Temperature from "./Temperature";

export default function WeatherData(props) {
  return (
    <div className="weather-data">
      <div>
        <h1 className="location-title">
          {" "}
          {props.data.city}, {props.data.country}
        </h1>
      </div>

      <div className="row">
        <div className="col-8 current-date-title">
          <h2>
            <span className="current-date">
              <Date date={props.data.date} />
            </span>
          </h2>
        </div>
        <div className="col-4 clock">
          <h2>
           <span className="clock">
            {" "}
            <Time time={props.data.date} />
           </span>
          </h2>
        </div>
      </div>

      <div className="row">
        <div className="col-6 temperature-title">
          <h3>
            <span className="icon">
              <Icon
                code={props.data.icon}
                alt={props.data.description}
                size="100px"
              />
            </span>
            <span className="Temperature">
              <Temperature celsius={props.data.temperature} />
            </span>
          </h3>
        </div>
        <div className="col-6 weather-description">
          <ul className="weather-list">
            <li>
              <span className="text-capitalize"> {props.data.description}</span>
            </li>
            <li>
              <span className="wind">
                <span>Wind:</span>
                <span> {props.data.wind}</span>
                <span>km/h</span>
              </span>
            </li>
            <li>
              <span className="humidity">
                <span>Humidity:</span>
                <span className="list"> {props.data.humidity}</span>
                <span>%</span>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
