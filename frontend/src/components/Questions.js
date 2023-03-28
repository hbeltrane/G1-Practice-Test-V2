import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React, { useEffect, useState } from "react"
import data from "../database/data";

/** Custom hook */
import { useFetchQuestion } from "../hooks/FetchQuestion";

export default function Questions() {
    const [checked, setChecked] = useState(undefined)
    const [{isLoading, apiData, serverError}] = useFetchQuestion()
    const question = data[0]
    useEffect(() => {
        //console.log(isLoading)
        //console.log(apiData)
        //console.log(serverError)
    })
    function onSelect() {
        //console.log("Radio button change")
    }
    return (
        <div className="questions">
            <h2>{question.text}</h2>
            <ul key={question.id}>
                {
                    question.answers.map((q, i) => (

                        <li key={i}>
                            <input type="radio" value={false} name="options" id={`q${i}-option`} onChange={onSelect()} />
                            <label className="text-primary" htmlFor={`q${i}-option`}>{q}</label>
                            <div className="check"></div>
                        </li>
                    ))
                }
            </ul>
        </div>

    )
}
