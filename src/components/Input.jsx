



export default function Input({text, myFunction}){
   
    return(
        <p>
        <label>{text}</label>
        <input type="number" required onChange={(event) => myFunction(event, text)}/>
        </p>
    )
}