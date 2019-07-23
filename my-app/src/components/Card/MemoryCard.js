import React from 'react';
import './MemoryCard.css';

const MemoryCard = props => (
    <div className="allCards col-xs-6 col-sm-6 col-md-4"
    key={props.id}
    onClick= {() => props.handleClick(props.id, props.clicked)}>
        <img className=""
    </div>
)