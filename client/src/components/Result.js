import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from "react"
import { Link } from "react-router-dom"

export default function Result() {
    return (
        <div className="container">
            <header className="col d-flex justify-content-center">
                <h1>Driver License Knowledge Test</h1>
            </header>

            <main className="col d-flex justify-content-center pt-4">

                <div className="card w-50">
                    <div className="card-header">
                        <h2>Results</h2>
                        <div className="return-button">
                            <input className="primary" type="button" id="return-btn" value="Try Again"></input>
                        </div>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <table className="result-table">
                                <tr className="table-header">
                                    <th></th>
                                    <th>Rules</th>
                                    <th>Signs</th>
                                    <th>Total</th>
                                </tr>
                                <tr id="correct-row">
                                    <th>Correct:</th>
                                    <td id="correct-rules"></td>
                                    <td id="correct-signs"></td>
                                    <td id="correct-total"></td>
                                </tr>
                                <tr id="incorrect-row">
                                    <th>Incorrect:</th>
                                    <td id="incorrect-rules"></td>
                                    <td id="incorrect-signs"></td>
                                    <td id="incorrect-total"></td>
                                </tr>
                                <tr id="percentage-row">
                                    <th>Percentage:</th>
                                    <td id="percentage-rules"></td>
                                    <td id="percentage-signs"></td>
                                    <td id="percentage-total"></td>
                                </tr>
                            </table>
                        </li>
                    </ul>
                    <div className="card-body">
                        <div className="pie-chart">
                            <canvas id="myChart" style="width:100%; max-width:600px"></canvas>
                        </div>
                    </div>
                </div>

            </main>

            <footer className="col d-flex justify-content-center pt-4">

                <div className="w-50 mb-3">

                    <div className="accordion">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="accordion-heading">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accordion-panel" aria-expanded="true" aria-controls="accordion-panel">
                                    About Us
                                </button>
                            </h2>
                            <div id="accordion-panel" className="accordion-collapse collapse" aria-labelledby="accordion-heading">
                                <div className="accordion-body">
                                    <h3>About Us</h3>
                                    <div id="info">
                                        <p>Developed by Hugo Beltran & Juan Casanova</p>
                                        <p>for CSD 3103 - Full Stack JavaScript Term Project</p>
                                        <p>Copyright &copy; 2023</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </footer>
        </div>
    )
}