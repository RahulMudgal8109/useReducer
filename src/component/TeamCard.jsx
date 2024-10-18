import React from 'react'
import { useGlobalContext } from '../context/GlobalContext';

const TeamCard = (props) => {
    const { employee, team,addToTeam,removeFromTeam } = useGlobalContext(); 
    // console.log(addToTeam)
    // console.log(team)
    // console.log(employee)
  return (
    
    <div className='teamContainer'>
        
        <h3>{props.data.first_name}</h3>
        <h3>{props.data.age}</h3>
        {
            props.data.disabled?(<p></p>):( <button onClick={()=>{
                removeFromTeam(props.data)
            }}>Remove</button>)
        }
       
    </div>
  )
}

export default TeamCard