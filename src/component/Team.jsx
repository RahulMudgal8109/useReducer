import React from 'react'
import { useGlobalContext } from '../context/GlobalContext';
import TeamCard from './TeamCard';

const Team = () => {
    const { employee, team,addToTeam,sortByAge } = useGlobalContext(); 
   
    const averageAge = team.length > 0 
    ? team.reduce((acc, item) => acc + item.age, 0) / team.length 
    : 0;
    //console.log(team);
  return (
    <div className='team'>
      <h3>Team</h3>
      <button onClick={()=>{
        sortByAge(team)
      }}>Sort By Age</button>
    {team.length > 0 ? (
        team.map((item) => {
            return <TeamCard data={item} key={item.id}/>
        })
    ) : (
        <p>No employees available.</p> // Message when no employees are present
    )}
     <div className='averageAge'>
                <h5>Average Age:</h5>
                <h4>{averageAge.toFixed(2)}</h4> {/* Display average age with 2 decimal points */}
            </div>
</div>
  )
}

export default Team
