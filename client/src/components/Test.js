import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from "react"
import Questions from "./Questions"
//import { Link } from "react-router-dom"

export default function Test() {
    /** Skip button event handler */
    function onSkip() {
        console.log("Click on skip")
    }
    /** Next button event handler */
    function onNext() {
        console.log("Click on next")
    }
    return (

        <div className="container">

            <header className="col d-flex justify-content-center">
                <h1>G1 Driver License Knowledge Practice Test V2</h1>
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

                    <Questions />
                    <div className="card-footer">
                        <div className="button-group">
                            <div className="skip-button">
                                <input className="btn btn-primary" onClick={onSkip} type="button" id="skip-btn" value="Skip Question"></input>
                            </div>
                            <div className="submit-button">
                                <input className="btn btn-success" onClick={onNext} type="button" id="submit-btn" value="Next question"></input>
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