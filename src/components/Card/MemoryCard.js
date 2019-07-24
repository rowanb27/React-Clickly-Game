import React from 'react';
import './MemoryCard.css';

const MemoryCard = props => (
    <div className="allCards col-xs-6 col-sm-6 col-md-4"
    key={props.id}
    onClick= {() => props.handleClick(props.id, props.clicked)}>
        <img className="img-fluid width: 100% \9"
        id={props.name}
        src={props.image}
        alt={props.name}></img>
    </div>
);

export default MemoryCard;