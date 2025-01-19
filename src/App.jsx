import React from 'react'
import './App.css'
import Navber from './component/Navber'
import Assignments from './page/Assignments';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Deshboard from './page/Deshboard';
import Notes from './page/Notes';


function App() {
  return (
    <>
    
  
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navber/>}>
          <Route index element={ <Deshboard/>} />
          <Route path="Assignments" element={<Assignments/>} />
          <Route path="Notes" element={ <Notes/>} />
          <Route path="*" element={<h1>helo</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
    
    </>
   
    
  )
}

export default App
