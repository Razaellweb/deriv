import React, { useEffect } from 'react'
import { useState } from 'react'
import Clients from './components/Clients'
import Footer from './components/Footer'
import Fullbar from './components/Fullbar'
import Market from './components/Market'
import Navarea from './components/Navarea'
import Platforms from './components/Platforms'
import Signin from './components/Signin'
import Trade from './components/Trade'
import './main.css'

const App = () => {

    const [display, setDisplay] = useState("none")
    const [displaybar, setDisplaybar] = useState("none")
    const [opac, setOpac] = useState("1")

    const close = () => {
        setDisplaybar("none")
        setOpac("1")
    }

    return (
        <div>
            <div style={{opacity: opac}}>
            <Navarea display={display} setDisplay={setDisplay} opac={opac} setOpac={setOpac} displaybar={displaybar} setDisplaybar={setDisplaybar}/>
            <div onClick={close}>
            <Market />
            <Trade />
            <Platforms />
            <Clients/>
            <Signin />
            <Footer />
            </div>
            </div>
            <Fullbar opac={opac} setOpac={setOpac} displaybar={displaybar} setDisplaybar={setDisplaybar}/>

        </div>
    )
}

export default App;