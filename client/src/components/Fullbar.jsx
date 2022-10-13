import React from 'react'
import { FaArrowCircleDown, FaTimes } from 'react-icons/fa'

const Fullbar = ({displaybar, setDisplaybar, opac, setOpac}) => {

    const close = () => {
        setDisplaybar("none")
        setOpac("1")
    }
    return (
        <div className='fullbar' style={{display: displaybar}}>
            <div>
                <div  className='timesbar'>
                    <FaTimes onClick={close}/>
                    </div>
                <h3 className='headbar'>Trade</h3>
                <h3 className='headbar'>Markets</h3>
                <h3 className='headbar'>About Us</h3>
                <h3 className='headbar'>Resources</h3>
                <h3 className='headbar'>Legal</h3>
                <h3 className='headbar'>Partner</h3>
            </div>
        </div>
    )
}

export default Fullbar