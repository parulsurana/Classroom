import React from 'react';
import "./Card.css";

export default function Card({title,ImageUrl,body}) {
    return (
        <div className="card-container">
            <div className="img-container">
                <img src={ImageUrl} alt="" />
            </div>
            <div className="card-title">
                <h2>{title}</h2>
            </div>
            <div className="card-body">
                <p>{body}</p>
            </div>
        </div>
    )
}
