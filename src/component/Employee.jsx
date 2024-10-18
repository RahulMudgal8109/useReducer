import React from 'react';
import { useGlobalContext } from '../context/GlobalContext';
import EmployeeCard from './EmployeeCard';

const Employee = () => {
    const { employee, loading,team } = useGlobalContext(); // Use the hook to access context
     console.log(employee);
     console.log(team)

    return (
        <div className='employee'>
            <h3>Employees</h3>
            {employee.length > 0 ? (
                employee.map((item) => {
                    return <EmployeeCard data={item} key={item.id}/>
                })
            ) : (
                <p>No employees available.</p> // Message when no employees are present
            )}
        </div>
    );
};

export default Employee;
