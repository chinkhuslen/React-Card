import { useState } from "react"

const FormReact = () => { 
    const [inp, setInp] = useState({firstName:null,lastName:null,phoneNumber:null,email:null,password:null,})
    const changeInp = (target,val) =>{
        let temp = inp;
        temp[target] = val;

        setInp(temp)
    }
    const hevle=()=>{
        isValidEmail() ? console.log(inp) : console.log("No2")
    }
    function isValidEmail() {
        return /\S+@\S+\.\S+/.test(inp.email);
      }
    return (
    <div className='wrapper violet'>
        <input name="firstName" type="text" placeholder="First name" on Change={event => changeInp(event.target.name, event.target.value)}/>    
        <input name="lastName" type="text" placeholder="Last name" onChange={event => changeInp(event.target.name, event.target.value)}/>    
        <input name="phoneNumber" type="number" placeholder="Phone number" onChange={event => changeInp(event.target.name, event.target.value)}/>    
        <input name="email" type="email" placeholder="E-mail" onChange={event => changeInp(event.target.name, event.target.value)} />  
        <input name="password" type="password" placeholder="Password" onChange={event => changeInp(event.target.name, event.target.value)}/>    
        <button onClick={()=>{hevle()}}>Press Me</button>
    </div>
    )
}
export default FormReact 