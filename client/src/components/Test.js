import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from "react"

export default function Test() {
    function onSkip() {
        console.log("Click on skip")
    }
    function onNext() {
        console.log("Click on next")
    }
    return (

        <div className="container">

            <header className="col d-flex justify-content-center">
                <h1>G1 Driver License Practice Test - V2</h1>
            </header>

            <main className="col d-flex justify-content-center">

                <div className="card w-50 mb-3" id="quiz">
                    <div className="card-header" id="info">
                        <div className="question-category">
                            <p id="category"></p>
                        </div>
                        <div className="quiz-progress">
                            <p id="progress">
                                <span id="correct">Correct: 0</span> &nbsp;<span id="incorrect">Incorrect: 0</span>
                            </p>
                        </div>
                    </div>

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
                    <div className="card-footer">
                        <div className="button-group">
                            <div className="skip-button">
                                <input className="primary" onClick={onSkip} type="button" id="skip-btn" value="Skip Question"></input>
                            </div>
                            <div className="submit-button">
                                <input className="success" onClick={onNext} type="button" id="submit-btn" value="Next question"></input>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="answer-explanation">
                        <p id="explanation"></p>
                    </div>
                </div>

            </main>

        </div>
    )
}