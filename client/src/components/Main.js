import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, { useRef } from "react"
import { Link } from "react-router-dom"

export default function Main() {
    const inputRules = useRef(null)
    const inputSigns = useRef(null)
    const inputRandom = useRef(null)
    const inputEmail = useRef(null)
    return (
        <div className="container">
            <header className="col d-flex justify-content-center">
                <h1>G1 Driver License Knowledge Practice Test V2</h1>
            </header>
            <main className="col d-flex justify-content-center">
                <div className="card w-50 mb-3">
                    <div className="card-header">
                        <form id="form">

                            <div className="test-configuration">

                                <h2>Configure your test</h2>
                                <div className="form-group">
                                    <label for="rules-questions">Rules questions</label>
                                    <select ref={inputRules} name="rules-questions" id="rules-questions">
                                        <option value="5" selected>5</option>
                                        <option value="10">10</option>
                                        <option value="15">15</option>
                                        <option value="20">20</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label for="signs-questions">Signs questions</label>
                                    <select ref={inputSigns} name="signs-questions" id="signs-questions">
                                        <option value="5" selected>5</option>
                                        <option value="10">10</option>
                                        <option value="15">15</option>
                                        <option value="20">20</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <input ref={inputRandom} type="checkbox" id="random" name="random"></input>
                                    <label for="random">Randomize questions</label>
                                </div>
                                <div className="form-group">
                                    <input ref={inputEmail} type="checkbox" id="sendEmail" name="sendEmail"></input>
                                    <label for="sendEmail">Send my score by email</label>
                                </div>
                            </div>

                            <div className="start">
                                <Link className="btn btn-primary" to={'/test'}>Go for it</Link>
                            </div>

                        </form>
                    </div>
                </div>
            </main>
        </div>
    )
}