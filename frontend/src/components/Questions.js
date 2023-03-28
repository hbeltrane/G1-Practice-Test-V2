import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";

/** Custom hook */
import { useFetchQuestion } from "../hooks/FetchQuestion";
import { updateResult } from "../hooks/setResult";

export default function Questions({ onChecked }) {
    const [checked, setChecked] = useState(undefined)
    const { trace } = useSelector(state => state.questions);
    const result = useSelector(state => state.result.result);
    const [{ isLoading, apiData, serverError }] = useFetchQuestion()

    const questions = useSelector(state => state.questions.queue[state.questions.trace])
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(updateResult({ trace, checked }))
    }, [checked])

    function onSelect(i) {
        onChecked(i)
        setChecked(i)
        dispatch(updateResult({ trace, checked }))
    }

    if (isLoading) return <h3>isLoading</h3>
    if (serverError) return <h3>{serverError || "Unknown Error"}</h3>

    return (
        <div className="questions">
            <h2>{questions?.text}</h2>
            <ul key={questions?.id}>
                {
                    questions?.answers.map((q, i) => (

                        <li key={i}>
                            <input type="radio" value={false} name="options" id={`q${i}-option`} onChange={() => onSelect(i)} />{`${result[trace] == i ? 'checked' : ''}`}
                            <label className='text-primary' htmlFor={`q${i}-option`}>{q}</label>
                            <div className={`check ${result[trace] == i ? 'checked' : ''}`}></div>
                        </li>
                    ))
                }
            </ul>
        </div>

    )
}
