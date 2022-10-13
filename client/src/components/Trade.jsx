import React from 'react'

const Trade = () => {
    return (
        <div className='markett'>
            <center>
                <div className='header'>
                    <h3 className='types'>Trade types</h3>
                    <h6 className='paragr'>Trade the way you want with 3 flexible trade types.</h6>
                </div>
            </center>
            <div className='marketitemz'>
                <div className='trades'>
                    <div className='imgx'></div>
                    <center>
                        <h1 className='tradehead'>CFD's</h1>
                        <p className='tradetext'>Trade with leverage and low spreads for better returns on successful trades.</p>
                        <button className='cfdbtn'>More on CFD'S</button>
                    </center>
                </div>
                <div className='trades'>
                    <div className='imgy'></div>
                    <center>
                        <h1 className='tradehead'>Multipliers</h1>
                        <p className='tradetext'>Multiply your potential profit without risking more than your stake.</p>
                        <button className='cfdbtn2'>More on multipliers</button>
                    </center>
                </div>
                <div className='trades'>
                    <div className='imgz'></div>
                    <center>
                        <h1 className='tradehead'>Options</h1>
                        <p className='tradetext'>Earn fixed payouts by predicting assets price movements.</p>
                        <button className='cfdbtn'>More on options</button>
                    </center>
                </div>
            </div>
        </div>
    )
}

export default Trade;