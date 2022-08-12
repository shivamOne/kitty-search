import React from "react";
import "./Card.styles.css";

export const Card = props => (
    <div className="card-container">
        <img alt="slayer" src={`https://robohash.org/${props.slayer.id}?set=set4&size=180x180`} /> 
        <h2> {props.slayer.name} </h2>
        <p> {props.slayer.email} </p>
    </div>
);