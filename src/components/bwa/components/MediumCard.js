import React from 'react'

export default function MediumCard(props) {
    return (
        <div className="card">
            <img src={props.src}/>
            <p className="title">{props.title}</p>
            <p className="subtitle">{props.subtitle}</p>
            <p className="data">{props.data} <span className="text">{props.text}</span></p>
        </div>
    )
}
