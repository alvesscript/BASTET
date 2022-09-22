import React from "react";
import "./Card.css";
import turma from "../img/turma.png";



export default function Card(props) {
    return (
        <div className="card">
            <img className="card-image" src={turma} alt="Logo" />
            <div className="card-header">
                <div className="card-title-group">
                    <h5 className="card-title">{props.title}</h5>
                </div>
            </div>
            <div className="card-text">{props.description}</div>
        </div>
    );
}