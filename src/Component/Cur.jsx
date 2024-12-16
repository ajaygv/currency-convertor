import {useState} from "react"


export const Cur = () => {
   const [final,setfinal]=useState()
   function con() {
     
      const apiKey = '74cc1335b08a165d539e691d'
      const api = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`
      fetch(api)
      .then(response => response.json())
      .then(data => {
      const userInput =(document.getElementById("money").value)
      const select1=(document.getElementById("select1").value)
      const select2=(document.getElementById("select2").value)
      console.log(data.conversion_rates[select1])
      console.log(userInput*data.conversion_rates[select2])
      const convert = userInput*data.conversion_rates[select2]
      setfinal(convert)
      } )

   }




   return (<div>
      <label>Currency </label>
      <input type="text" id="money" Placeholder="Enter value" />
      <select id="select1">
         <option id="usd1">USD</option>
         <option id="inr1">INR</option>
         <option id="aud1">AUD</option>
         <option id="eur1">EUR</option>
      </select>
      <h3>To</h3>
      <select id="select2">
         <option id="usd2">USD</option>
         <option id="inr2">INR</option>
         <option id="aud2">AUD</option>
         <option id="eur2">EUR</option>
      </select>
      
      
      <button onClick={con}>click</button>
      <p>{final}</p>
   </div>)
}