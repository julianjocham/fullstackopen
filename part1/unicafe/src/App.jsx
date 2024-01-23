import {useState} from 'react'

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    return (
        <div>
            <Buttons setGood={setGood} setNeutral={setNeutral} setBad={setBad}/>
            <Statistics good={good} neutral={neutral} bad={bad}/>
        </div>
    )
}


const Buttons = ({ setGood, setNeutral, setBad })=>{

    return <div>
        <h2>give feedback</h2>
        <button onClick={() => setGood((good) => good +1)}>
            good
        </button>
        <button onClick={() => setNeutral((neutral) => neutral +1)}>
            neutral
        </button>
        <button onClick={() => setBad((bad) => bad +1)}>
            bad
        </button>
    </div>

}

const Statistics = ({ good, neutral, bad }) =>{

    if (good+neutral+bad === 0){
        return <div>
            no feedback given
        </div>
    }

    return <div>
        <h2>statistics</h2>
        <table>
            <tbody>
                <StatisticsLine text={'good'} value={good}/>
                <StatisticsLine text={'neutral'} value={neutral}/>
                <StatisticsLine text={'bad'} value={bad}/>
                <StatisticsLine text={'all'} value={ good + neutral + bad }/>
                <StatisticsLine text={'average'} value={( good * 1 + bad * -1 ) / ( good + neutral + bad )}/>
                <StatisticsLine text={'positive'} value={good  / ( good + neutral + bad ) * 100 } />
            </tbody>

        </table>

    </div>

}


const StatisticsLine = ({text,value}) => {
    return <>
        <tr>
            <td>
                {text}
            </td>
            <td>
            {value} {text === 'positive' && '%'}
            </td>
        </tr>
    </>
}

export default App
