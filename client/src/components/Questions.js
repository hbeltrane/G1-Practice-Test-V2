import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from "react"

export default function Test() {
    return (

        <div>
            <div className="card-body" id="question">
                <p id="text"></p>
                <div className="card-title">
                    <img src="../images/no-pedestrians.jpg" alt="reference"></img>
                </div>
            </div>
            <ul className="list-group list-group-flush" id="answers">
                <li className="list-group-item">
                    <div className="answer-group">
                        <input className="answer-radio" type="radio" name="answer-radio" id="answer-a"></input>
                        <label className="answer-label" for="answer-a" id="answer-a-text"></label>
                    </div>
                </li>
                <li className="list-group-item">
                    <div className="answer-group">
                        <input className="answer-radio" type="radio" name="answer-radio" id="answer-b"></input>
                        <label className="answer-label" for="answer-b" id="answer-b-text"></label>
                    </div>
                </li>
                <li className="list-group-item">
                    <div className="answer-group">
                        <input className="answer-radio" type="radio" name="answer-radio" id="answer-c"></input>
                        <label className="answer-label" for="answer-c" id="answer-c-text"></label>
                    </div>
                </li>
                <li className="list-group-item">
                    <div className="answer-group">
                        <input className="answer-radio" type="radio" name="answer-radio" id="answer-d"></input>
                        <label className="answer-label" for="answer-d" id="answer-d-text"></label>
                    </div>
                </li>
            </ul>
        </div>



    )
}
