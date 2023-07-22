/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";

export default function Header(props) {
    return(
        <div className="header-container">
            <img src={`../public/${props.src}`} alt={props.alt} className="header-logo" />
            <p className="header-text">my travel journal</p>
        </div>
    )
}