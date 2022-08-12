import React from "react";
import {Card} from '../Card/Card.comp';
import "./card.css";
 
export const CardList = (props) => (
    <div className='card-list'>
        {props.slayer.map(slayer => (
            <Card key = {slayer.id} slayer={slayer} />
        ))}
    </div>
); 