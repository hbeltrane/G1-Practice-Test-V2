import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React, { useEffect, useState } from "react"
import Questions from "./Questions"
import { MoveNextQuestion, MovePreviousQuestion } from "../hooks/FetchQuestion";
import { PushAnswer } from "../hooks/setResult";
import { Navigate } from "react-router-dom";
//import { Link } from "react-router-dom"

/** redux store import */
import { useSelector, useDispatch } from "react-redux"

export default function Test() {
    const [check, setChecked] = useState(undefined)
    const result = useSelector(state => state.result.result);
    const { queue, trace } = useSelector(state => state.questions);
    const dispatch = useDispatch()
    useEffect(() => {
        console.log(result)
    })
    /** Next button event handler */
    function onNext() {
        //console.log("Click on next")
        /** Update the trace value by 1 using MoveNextAction */
        if (trace < queue.length) {
            dispatch(MoveNextQuestion());
            if (result.length <= trace) {
                dispatch(PushAnswer(check))
            }
        }
    }
    /** Previous button event handler */
    function onPrevious() {
        //console.log("Click on previous")
        if (trace > 0) {
            dispatch(MovePreviousQuestion());
        }
    }
    function onChecked(check) {
        console.log(check)
        setChecked(check)
    }

    /** Finish exam after the ast question */
    if (result.length && result.length >= queue.length) {
        return <Navigate to={"/result"} replace="true"></Navigate>
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

                    <Questions onChecked={onChecked} />
                    <div className="card-footer">
                        <div className="button-group">
                            <div className="skip-button">
                                {trace > 0 ? <input className="btn btn-primary" onClick={onPrevious} type="button" id="previous-btn" value="Previous Question"></input> : <div></div>}
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