import React, { useState } from 'react'

const Platforms = () => {
    const [mbot, setMbot] = useState("50vh")
    const [image, setImage] = useState("mt5img")

    const [mbotf, setMbotf] = useState("eachh")
    const [mbota, setMbota] = useState("eachg")
    const [mbotb, setMbotb] = useState("eachg")
    const [mbotc, setMbotc] = useState("eachg")
    const [mbotd, setMbotd] = useState("eachg")
    const [mbote, setMbote] = useState("eachg")
    const [mbotg, setMbotg] = useState("eachg")
    const [mboth, setMboth] = useState("eachg")


    const setmt5 = () => {
        setImage("mt5img")
        setMbot("30vh")
        setMbota("eachf")
        setMbotb("eachf")
        setMbotc("eachf")
        setMbotd("eachf")
        setMbote("eachf")
        setMbotf("eachh")
        setMbotg("eachf")
        setMboth("eachf")
    }
    const setbot = () => {
        setImage("mt5bot")
        setMbot("130vh")
        setMbota("eachf")
        setMbotb("eachf")
        setMbotc("eachf")
        setMbotd("eachf")
        setMbote("eachf")
        setMbotf("eachf")
        setMbotg("eachh")
        setMboth("eachf")
    }
    const setbinary = () => {
        setImage("mt5binary")
        setMbot("-110vh")
        setMbota("eachf")
        setMbotb("eachh")
        setMbotc("eachf")
        setMbotd("eachf")
        setMbote("eachf")
        setMbotf("eachf")
        setMbotg("eachf")
        setMboth("eachf")
    }
    const setsmart = () => {
        setImage("mt5smart")
        setMbot("-150vh")
        setMbota("eachh")
        setMbotb("eachf")
        setMbotc("eachf")
        setMbotd("eachf")
        setMbote("eachf")
        setMbotf("eachf")
        setMbotg("eachf")
        setMboth("eachf")
    }
    const setgo = () => {
        setImage("mt5go")
        setMbot("-20vh")
        setMbota("eachf")
        setMbotb("eachf")
        setMbotc("eachf")
        setMbotd("eachh")
        setMbote("eachf")
        setMbotf("eachf")
        setMbotg("eachf")
        setMboth("eachf")
    }
    const setx = () => {
        setImage("mt5x")
        setMbot("180vh")
        setMbota("eachf")
        setMbotb("eachf")
        setMbotc("eachf")
        setMbotd("eachf")
        setMbote("eachf")
        setMbotf("eachf")
        setMbotg("eachf")
        setMboth("eachh")
    }
    const settrader = () => {
        setImage("mt5trader")
        setMbot("90vh")
        setMbota("eachf")
        setMbotb("eachf")
        setMbotc("eachf")
        setMbotd("eachf")
        setMbote("eachh")
        setMbotf("eachf")
        setMbotg("eachf")
        setMboth("eachf")
    }
    const setapi = () => {
        setImage("mt5api")
        setMbot("-60vh")
        setMbota("eachf")
        setMbotb("eachf")
        setMbotc("eachh")
        setMbotd("eachf")
        setMbote("eachf")
        setMbotf("eachf")
        setMbotg("eachf")
        setMboth("eachf")
    }

    return (
        <>
            <center>
                <div className='headerfg'>
                    <h3 className='types'>Our platforms.</h3>
                    <h6 className='paraggr'>Choose from 8 powerful platforms — each designed with your needs in mind.</h6>
                </div>
            </center>
            <div className='platforms'>
                <div className='plat' style={{ marginBottom: mbot }}>
                    <div className={mbota} onClick={setsmart}>
                        <div className='mtsmart'>

                        </div>
                        <div>
                            <h2>Smart Trader</h2>
                            <p>Our legacy options trading platform.</p>
                            <p className='learnmore'>Learn More</p>
                        </div>
                    </div>
                    <div className={mbotb} onClick={setbinary}>
                        <div className='mtbinary'>

                        </div>
                        <div>
                            <h2>Binary Bot</h2>
                            <p>Our classic bot builder and automated trading platform.</p>
                            <p className='learnmore'>Learn More</p>
                        </div>
                    </div>
                    <div className={mbotc} onClick={setapi}>
                        <div className='mt4'>

                        </div>
                        <div>
                            <h2>API</h2>
                            <p>Build your own apps with our API.</p>
                            <p className='learnmore'>Learn More</p>
                        </div>
                    </div>
                    <div className={mbotd} onClick={setgo}>
                        <div className='mt2'>

                        </div>
                        <div>
                            <h2>Deriv Go</h2>
                            <p>Our best trading experience on your mobile.</p>
                            <p className='learnmore'>Learn More</p>
                        </div>
                    </div>
                    <div className={mbotf} onClick={setmt5}>
                        <div className='mt5'>

                        </div>
                        <div>
                            <h2>Deriv MT5</h2>
                            <p>The all-in-one CFD trading platform.</p>
                            <p className='learnmore'>Learn More</p>
                        </div>
                    </div>
                    <div className={mbote} onClick={settrader}>
                        <div className='mt8'>

                        </div>
                        <div>
                            <h2>DTrader</h2>
                            <p>Our flagship app for trading options and multipliers.</p>
                            <p className='learnmore'>Learn More</p>
                        </div>
                    </div>
                    <div className={mbotg} onClick={setbot}>
                        <div className='mt50'>

                        </div>
                        <div>
                            <h2>DBot</h2>
                            <p>Automate your trading. No coding required.</p>
                            <p className='learnmore'>Learn More</p>
                        </div>
                    </div>
                    <div className={mboth} onClick={setx}>
                        <div className='mt90'>

                        </div>
                        <div>
                            <h2>Deriv X</h2>
                            <p>The CFD trading platform to fit your style.</p>
                            <p className='learnmore'>Learn More</p>
                        </div>
                    </div>
                    <div className={mbota} onClick={setsmart}>
                        <div className='mtsmart'>

                        </div>
                        <div>
                            <h2>Smart Trader</h2>
                            <p>Our legacy options trading platform.</p>
                            <p className='learnmore'>Learn More</p>
                        </div>
                    </div>
                    <div className={mbotb} onClick={setbinary}>
                        <div className='mtbinary'>

                        </div>
                        <div>
                            <h2>Binary Bot</h2>
                            <p>Our classic bot builder and automated trading platform.</p>
                            <p className='learnmore'>Learn More</p>
                        </div>
                    </div>
                    <div className={mbotc} onClick={setapi}>
                        <div className='mt4'>

                        </div>
                        <div>
                            <h2>API</h2>
                            <p>Build your own apps with our API.</p>
                            <p className='learnmore'>Learn More</p>
                        </div>
                    </div>
                    <div className={mbotd} onClick={setgo}>
                        <div className='mt2'>

                        </div>
                        <div>
                            <h2>Deriv Go</h2>
                            <p>best trading experience on your mobile.</p>
                            <p className='learnmore'>Learn More</p>
                        </div>
                    </div>
                    <div className={mbotf} onClick={setmt5}>
                        <div className='mt5'>

                        </div>
                        <div>
                            <h2>Deriv MT5</h2>
                            <p>The all-in-one CFD trading platform.</p>
                            <p className='learnmore'>Learn More</p>
                        </div>
                    </div>
                    <div className={mbote} onClick={settrader}>
                        <div className='mt8'>

                        </div>
                        <div>
                            <h2>DTrader</h2>
                            <p>Our flagship app for trading options and multipliers.</p>
                            <p className='learnmore'>Learn More</p>
                        </div>
                    </div>
                    <div className={mbotg} onClick={setbot}>
                        <div className='mt50'>

                        </div>
                        <div>
                            <h2>DBot</h2>
                            <p>Automate your trading. No coding required.</p>
                            <p className='learnmore'>Learn More</p>
                        </div>
                    </div>
                    <div className={mboth} onClick={setx}>
                        <div className='mt90'>

                        </div>
                        <div>
                            <h2>Deriv X</h2>
                            <p>The CFD trading platform to fit your style.</p>
                            <p className='learnmore'>Learn More</p>
                        </div>
                    </div>
                    <div className={mbota} onClick={setsmart}>
                        <div className='mtsmart'>

                        </div>
                        <div>
                            <h2>Smart Trader</h2>
                            <p>Our legacy options trading platform.</p>
                            <p className='learnmore'>Learn More</p>
                        </div>
                    </div>
                    <div className={mbotb} onClick={setbinary}>
                        <div className='mtbinary'>

                        </div>
                        <div>
                            <h2>Binary Bot</h2>
                            <p>Our classic bot builder and automated trading platform.</p>
                            <p className='learnmore'>Learn More</p>
                        </div>
                    </div>
                    <div className={mbotc} onClick={setapi}>
                        <div className='mt4'>

                        </div>
                        <div>
                            <h2>API</h2>
                            <p>Build your own apps with our API.</p>
                            <p className='learnmore'>Learn More</p>
                        </div>
                    </div>
                    <div className={mbotd} onClick={setgo}>
                        <div className='mt2'>

                        </div>
                        <div>
                            <h2>Deriv Go</h2>
                            <p>Our best trading experience on your mobile.</p>
                            <p className='learnmore'>Learn More</p>
                        </div>
                    </div>
                    <div className={mbotf} onClick={setmt5}>
                        <div className='mt5'>

                        </div>
                        <div>
                            <h2>Deriv MT5</h2>
                            <p>The all-in-one CFD trading platform.</p>
                            <p className='learnmore'>Learn More</p>
                        </div>
                    </div>
                    <div className={mbote} onClick={settrader}>
                        <div className='mt8'>

                        </div>
                        <div>
                            <h2>DTrader</h2>
                            <p>Our flagship app for trading options and multipliers.</p>
                            <p className='learnmore'>Learn More</p>
                        </div>
                    </div>
                    <div className={mbotg} onClick={setbot}>
                        <div className='mt50'>

                        </div>
                        <div>
                            <h2>DBot</h2>
                            <p>Automate your trading. No coding required.</p>
                            <p className='learnmore'>Learn More</p>
                        </div>
                    </div>
                    <div className={mboth} onClick={setx}>
                        <div className='mt90'>

                        </div>
                        <div>
                            <h2>Deriv X</h2>
                            <p>The CFD trading platform to fit your style.</p>
                            <p className='learnmore'>Learn More</p>
                        </div>
                    </div>
                </div>
                <div className='imagesbig'>
                    <div className={image}>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Platforms