import Tbody from "./Tbody"

export default function Result({userInput}){


    return (
    <table id="result">
        <thead>
        <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
        </tr>
        </thead>
        <Tbody userInput={userInput}/>
    </table>

    )
}