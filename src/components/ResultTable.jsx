import {calculateInvestmentResults, formatter} from "../util/investment.js";
import { useState } from 'react';







export default function ResultTable({parameters, myFunction}){
    const {initialInvestment, annualInvestment, expectedReturn, duration} = parameters;
    const tableValues = calculateInvestmentResults(parameters)
    
    function handleOnChange(text, value){
        setParametersForFunction( (prevValue) => { 
            return {...prevValue, [text]: prevValue.text + value }
        } );
    }

    return (
        
        <table id='result'>
            <thead>
                <tr>
                <th>Year</th>
                <th>Investment Value</th>
                <th>Interest Year</th>
                <th>Total Interest</th>
                <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                

                { (duration >= 1) ? tableValues.map((row) => {
                    return <tr key={row.year}>
                        <td>{row.year}</td>
                        <td>{formatter.format(row.valueEndOfYear)}</td>
                        <td>{formatter.format(row.interest)}</td>
                        <td>{formatter.format(row.valueEndOfYear-(row.annualInvestment*row.year)-initialInvestment)}</td>
                        <td>{formatter.format(initialInvestment+(row.annualInvestment * row.year))}</td>
                        </tr>;

                } ) : <p>Please enter valid data!</p> }

            </tbody>
        </table>
    )
}