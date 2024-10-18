const reducer = (state, action) => {
    console.log(action)
    switch (action.type) {
        
        case "show-data":
            return {
                ...state,
                employee: action.payload,
                loading: false,
            };
        case "addToTeam":
            // const newEmployee=state.employee;
            // const emp={...newEmployee,disabled:true}
            //console.log(state.employee)
            return{
                ...state,
                employee: state.employee.map(emp =>
                    emp.id === action.payload.item.id
                        ? { ...emp, disabled: true } // Set disabled to true for the added employee
                        : emp
                ),
                team: [...state.team, action.payload.item],
                

            }

            case "removeFromTeam":
                // const newEmployee=state.employee;
                // const emp={...newEmployee,disabled:true}
                //console.log(state.employee)
                return{
                    ...state,
                    employee: state.employee.map(emp =>
                        emp.id === action.payload.item.id
                            ? { ...emp, disabled: false } // Set disabled to true for the added employee
                            : emp
                    ),
                    team: state.team.filter((emp)=>{
                         return emp.id!==action.payload.item.id
                    })
                    
    
                }

                case "sortByAge":
                // const newEmployee=state.employee;
                // const emp={...newEmployee,disabled:true}
                //console.log(state.employee)
                return{
                    ...state,
                   
                    team: action.payload
                    .sort((a,b)=>{
                         return a.age-b.age;
                    })
                    
    
                }

            
            
        default:
            return state; // Ensure you return the current state
    }
};

export default reducer;
