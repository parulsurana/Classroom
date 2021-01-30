import React from 'react';
import "./Card.css";

export default function Card({title,ImageUrl,body,Click}) {

   
    return (
        <div className="card-container" onClick={Click}>
            <div className="img-container">
                <img src={ImageUrl} alt="" />
            </div>
            <div className="card_title">
                <h2>{title}</h2>
            </div>
            <div className="card_body">
                <p>{body}</p>
            </div>
        </div>
    )
}

