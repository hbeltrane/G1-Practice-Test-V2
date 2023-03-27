import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from "react"
import { Link } from "react-router-dom"

export default function Login() {
    return (
        <div className="container">
            <header className="col d-flex justify-content-center">
                <h1>G1 Driver License Knowledge Practice Test V2</h1>
            </header>

            <main className="col d-flex justify-content-center">

                <div className="card w-40 mb-3">
                    <div className="card-body">

                        <form id="form">

                            <div>
                                <h2>Login</h2>

                                <div className="mb-3">
                                    <label className="form-label" for="email">Email</label>&nbsp;&nbsp;<span id="email-error"></span>
                                    <input type="email" className="form-control" id="email" name="email" size="30" placeholder="Enter your email address"></input>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label" for="password">Password</label>&nbsp;&nbsp;<span id="password-error"></span>
                                    <input type="password" className="form-control" id="password" name="password" size="30" placeholder="Enter your password"></input>
                                </div>
                            </div>

                            <div class="start">
                                <Link className="btn btn-primary" to={'/main'}>Login</Link>
                            </div>

                        </form>

                    </div>
                </div>

            </main>

        </div>

    )
}