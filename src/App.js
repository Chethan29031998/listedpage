import logo from './logo.svg';
import './App.css';
import {useState} from "react"


//what is state
//state is just the data stored/showed in ur component at particuler movement


function App() {

  const[calc,setcalc]=useState("")
  const[result ,setresult]=useState("")
  const [value,setvalue]=useState("")

  const opp=["/","*","+","-","."]
   
  const updatecalc=value=>{
    if(
      opp.includes(value)&& calc===""||
    opp.includes(value)&&opp.includes(calc.slice(-1))
    ){
      return
    }

    setcalc(calc+value)

    if(!opp.includes(value)){
      setresult(eval(calc+value).toString())
    }
  }
  

 const createDigits=()=>{
const digits=[]
for(let i=1;i<10;i++){
  digits.push(<button   onClick={()=>updatecalc(i.toString())} key={i}>{i}</button>)
}
return digits
 }
 

 const calculate=()=>{
  setcalc(eval(calc).toString())
 }
  

 const del=()=>{
  if(calc==""){
    return
  }
  const value=calc.slice(0,-1)
  setcalc(value)
 }

  
 
  
 
  return (
     <div className='App'>
      
<div className='calculator'>
<h1 className='gc' id='CHE'>hello</h1>
<h1 className='cg'>calculator</h1>
  <div className='display'>
  
   {result ?<span>{result} </span>:""} {calc||"0"}
  </div>

  <div className='operater'>
    <button onClick={()=>updatecalc("/")}>/</button>
    <button  onClick={()=>updatecalc("*")}>*</button>
    <button  onClick={()=>updatecalc("+")}>+</button>
    <button  onClick={()=>updatecalc("-")}>-</button>
    <button onClick={del} >DEL</button>
  </div>


<div className='digits'>
  {createDigits()}
<button  onClick={()=>updatecalc("0")}>0</button>
<button  onClick={()=>updatecalc(".")}>.</button>
<button onClick={calculate} >=</button>

</div>



</div>
     </div>

    

    
  );
}


export default App;

