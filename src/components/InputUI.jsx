import { useState } from 'react';
import Input from "./Input";

export default function InputUI({ myFunction, inputValue }){
    

    return(
        <section id="user-input">
        <div className="input-group" >
        <p>
        <label>initialInvestment</label>
        <input type="number" value={inputValue.initialInvestment} required onChange={(event) => myFunction(event, 'initialInvestment')}/>
        </p>
        <p>
        <label>annualInvestment</label>
        <input type="number" value={inputValue.annualInvestment} required onChange={(event) => myFunction(event, 'annualInvestment')}/>
        </p>
        </div>
        <div className="input-group" >
        <p>
        <label>expectedReturn</label>
        <input type="number" value={inputValue.expectedReturn} required onChange={(event) => myFunction(event, 'expectedReturn')}/>
        </p>
        <p>
        <label>duration</label>
        <input type="number" value={inputValue.duration} required onChange={(event) => myFunction(event, 'duration')}/>
        </p>
        </div>
        </section>
    );
}