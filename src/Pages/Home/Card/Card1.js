import React from "react";
import "./Card.css";
import turma from "../../../img/turma.png";

export default function Card1(props) {
    return (
        <div className="card1">
            <img className="card-image1" src={turma} alt="Logo" />
            <div className="card-header1">
                <div className="card-title-group1">
                    <h5 className="card-title1">{props.title}</h5>
                </div>
            </div>
            <div className="card-text1">{props.description}</div>
        </div>
    );
}