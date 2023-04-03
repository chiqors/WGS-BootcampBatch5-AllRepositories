import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './composables/counterSlice'

const About = () => {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    return (
        <div>
            <h1>This is the About page</h1>
            <button
                aria-label="Increment value"
                onClick={() => dispatch(increment())}
            >
                Increment
            </button>
            <span>{count}</span>
            <button
                aria-label="Decrement value"
                onClick={() => dispatch(decrement())}
            >
                Decrement
            </button>
        </div>
    )
}

export default About