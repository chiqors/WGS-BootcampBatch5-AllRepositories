import React, { useEffect, useState } from 'react'

function App() {
    const [date, setDate] = useState(new Date())

    // useEffect is a hook that runs after every render
    // class components have a lifecycle method called componentDidMount and componentDidUpdate
    // useEffect is a combination of both
    useEffect(() => {
        const timer = setInterval(() => {
            setDate(new Date())
        }, 1000)

        // cleanup function or componentWillUnmount
        return () => {
            clearInterval(timer)
        }
    }, [])

    return (
        <div>
            <h1>React Clock</h1>
            <h2>It is {date.toLocaleTimeString()}.</h2>
        </div>
    )
}

export default App