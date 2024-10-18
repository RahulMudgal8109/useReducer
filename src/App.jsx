import { useState } from 'react'

import './App.css'
import {AppProvider} from "./context/GlobalContext"
import Employee from './component/Employee'
import Team from './component/Team'
function App() {
  

  return (
    <>
    <AppProvider>
      <h1>UseReducer</h1>
      <div className='main'>
      <Employee/>
      <Team/>
      </div>
    </AppProvider>
    
      
    </>
  )
}

export default App
