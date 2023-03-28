import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React from "react"
import { Link } from "react-router-dom"

export default function Signup() {
    return (
        <div className="container">
            <header className="col d-flex justify-content-center">
                <h1>G1 Driver License Knowledge Practice Test V2</h1>
            </header>

            <main className="col d-flex justify-content-center">

                <div className="card w-50 mb-3">
                    <div className="card-body">

                        <form id="form">
                            <div>

                                <h2>Sign up</h2>

                                <div className="mb-3">
                                    <label className="form-label" htmlFor="user-name">Name</label>&nbsp;&nbsp;<span id="user-name-error"></span>
                                    <input type="text" className="form-control" id="user-name" name="user-name" size="30" placeholder="Enter your name"></input>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="email">Email</label>&nbsp;&nbsp;<span id="email-error"></span>
                                    <input type="email" className="form-control" id="email" name="email" size="30" placeholder="Enter your email address"></input>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="password">Password</label>&nbsp;&nbsp;<span id="password-error"></span>
                                    <input type="password" className="form-control" id="password" name="password" size="30" placeholder="Enter your password"></input>
                                </div>
                            </div>

                            <div class="start">
                                <Link className="btn btn-primary" to={"/main"}>Register</Link>
                            </div>

                        </form>

                    </div>
                </div>

            </main>

        </div>

    )
}