import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import Add1 from './components/add1'
import NavBar from './components/navbar'
import Buttons from './components/buttons'
import Side1 from './components/side1'
import Side2 from './components/side2'
import Side3 from './components/side3'
import Footer from './components/footer'

function App() {
  return (
    <>
    <Add1></Add1>
    <NavBar></NavBar>
    <hr style={{color:"silver"}}/>
    <Buttons></Buttons>
    <div style={{display:"flex"}}>
    <Side1></Side1>
    <Side2></Side2>
    <Side3></Side3>
    </div>
    <Footer></Footer>
    </>
  )
}

export default App
