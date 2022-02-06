import React from 'react'
import { useState } from 'react';


let color=""
function zoogi(nbr) {
    if(nbr==2||nbr==3||nbr==5||nbr==7){
       color="red"
      }
    else if(nbr%2==0){
      color= "green"  
    }
    
    else if(nbr%3==0||nbr%5==0||nbr%7==0||nbr==1){
      color= "yellow"
    }
    
    else{
      return "red"
    
    }
    return color
    
}
    const Number = ({color,num}) => {
      let [newNumber, setNewNumber] = useState(num)
      const[newClass,setnewClass]=useState(color)
  
  
      const change = () =>{
          setNewNumber(newNumber+=Math.floor(Math.random()*11))
          setnewClass(zoogi(newNumber))
  
      }
      return (
           <button className={newClass}  onClick={change}>
               <div>{newNumber}</div>
               </button> 
          
      )
  }
    
    
export {Number,zoogi}
