/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";

export default function Card(props) {
    return (
        <div className="card-container">
            <div className="card-image-container">
                <img src={`../public/${props.img}`} alt={props.img} className="card-image"/>
            </div>
            <div className="card-content d-block">
                <div className="card-location d-flex">
                    <img src="../public/maps logo.svg" alt="logo de maps"/>
                    <h3>{props.country}</h3>
                    <a href={props.link}>View on Google Maps</a>
                </div>
                <h1>{props.location}</h1>
                <p className="card-date">{props.startDate} - {props.endDate}</p>
                <p className="card-description">{props.description}</p>
            </div>
        </div>
    )
}