import React from 'react'
import { useGlobalContext } from '../context/GlobalContext';

const EmployeeCard = (props) => {
    //console.log(props.data.disabled)
     const { employee, team,addToTeam } = useGlobalContext(); 
    // console.log(addToTeam)
    // console.log(team)
    // console.log(employee)
  return (
    
    <div className='employeeCardContainer'>
        
        <h3>{props.data.first_name}</h3>
        <h3>{props.data.age}</h3>
        {
            props.data.disabled?(<p></p>):( <button onClick={()=>{
                addToTeam(props.data)
            }}>Add</button>)
        }
       
    </div>
  )
}

export default EmployeeCard