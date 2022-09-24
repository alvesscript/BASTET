import "./Card.css";
import turma from "../../../img/turma.png";

export default function Card0(props) {
    return (
        <div className="card0">
            <img className="card-image0" src={turma} alt="Logo" />
            <div className="card-header0">
                <div className="card-title-group0">
                    <h5 className="card-title0">{props.title}</h5>
                </div>
            </div>
            <div className="card-text0">{props.description}</div>
        </div>
    );
}