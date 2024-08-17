export default function InputField({userInput, onchange}){

    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label htmlFor="intial-investment">Inital Investment</label>
                    <input type="number" id="intial-investment" name='initialInvestment' value={userInput.initialInvestment} onChange={(e)=>onchange('initialInvestment', e.target.value)} required/>
                </p>
                <p>
                    <label htmlFor="annual-investment">Annual Investment</label>
                    <input type="number" id="annual-investment" name='annualInvestment' value={userInput.annualInvestment} onChange={(e)=>onchange('annualInvestment', e.target.value)} required/>
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label htmlFor="expected-return">Expected Return</label>
                    <input type="number" id="expected-return" name='expectedReturn' value={userInput.expectedReturn} onChange={(e)=>onchange('expectedReturn', e.target.value)} required/>
                </p>
                <p>
                    <label htmlFor="duration">Duration</label>
                    <input type="number" id="duration" name='duration' value={userInput.duration} onChange={(e)=>onchange('duration', e.target.value)} required/>
                </p>
            </div>
        </section>
    )
}