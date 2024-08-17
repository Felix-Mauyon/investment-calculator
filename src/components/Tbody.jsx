import { calculateInvestmentResults, formatter } from "../util/investment"

export default function Tbody({userInput}){
    const outputData = calculateInvestmentResults(userInput)
    const initialInvestment = outputData[0].valueEndOfYear - outputData[0].interest - outputData[0].annualInvestment


    return (
        <tbody>
            {outputData.map((entry)=>{
                const totalInterest = entry.valueEndOfYear - entry.annualInvestment * entry.year - initialInvestment
                const totalAmountInvested = entry.valueEndOfYear - totalInterest
                return(
                    <tr key={entry.year}>
                        <td className="center">{entry.year}</td>
                        <td className="center">{formatter.format(entry.valueEndOfYear)}</td>
                        <td className="center">{formatter.format(entry.interest)}</td>
                        <td className="center">{formatter.format(totalInterest)}</td>
                        <td className="center">{formatter.format(totalAmountInvested)}</td>
                    </tr>
                )
            })}
        </tbody>


    )
}