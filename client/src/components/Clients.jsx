import React, { useState } from 'react'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"

const Clients = () => {

    const [oned, setOned] = useState("block")
    const [twod, setTwod] = useState("none")
    const [threed, setThreed] = useState("none")
    const [fourd, setFourd] = useState("none")
    const [fived, setFived] = useState("none")


    const second = () => {
        setOned("none")
        setTwod("block")
        setThreed("none")
        setFourd("none")
        setFived("none")
    }
    const third = () => {
        setOned("block")
        setTwod("none")
        setThreed("none")
        setFourd("none")
        setFived("none")
    }
    const fourth = () => {
        setOned("none")
        setTwod("none")
        setThreed("block")
        setFourd("none")
        setFived("none")
    }
    const fifth = () => {
        setOned("none")
        setTwod("block")
        setThreed("none")
        setFourd("none")
        setFived("none")
    }
    const sixth = () => {
        setOned("none")
        setTwod("none")
        setThreed("none")
        setFourd("block")
        setFived("none")
    }
    const seventh = () => {
        setOned("none")
        setTwod("none")
        setThreed("block")
        setFourd("none")
        setFived("none")
    }
    const eighth = () => {
        setOned("none")
        setTwod("none")
        setThreed("none")
        setFourd("none")
        setFived("block")
    }
    const nineth = () => {
        setOned("none")
        setTwod("none")
        setThreed("none")
        setFourd("block")
        setFived("none")
    }
    const first = () => {

    }
    const tenth = () => {

    }


    return (
        <div className='reviews'>
            <div className='textclient'>
                <center>
                    <h1 className='iki'>What our clients say about Deriv</h1>
                </center>
                <h1 className='ikri'>What our clients say about Deriv</h1>
            </div>
            <div className='uhyyy'>
                <div className='okiy' style={{ display: oned }}>
                    <div className='review'>
                        <input className='buttt' type="button" value={"<"} onClick={first} />
                        <div className='edt'>
                            <p className='week'>
                                Weekend trades, fast deposits & withdrawals,
                            </p>
                            <p className='week'>
                                plus synthetics trading - etter than this?
                            </p>
                        </div>
                        <input className='butt' type="button" value={">"} onClick={second} />
                    </div>
                    <h4 className='ange'>Allan</h4>
                    <div className='arrows'>
                        <center>
                            <FaArrowLeft onClick={first} className="uj"/>
                            <FaArrowRight onClick={second}  className='ujy'/>
                        </center>
                    </div>
                </div>
                <div className='okiy' style={{ display: twod }}>
                    <div className='review'>
                        <input className='butt' type="button" value={"<"} onClick={third} />
                        <div className='edt'>
                            <p className='week'>
                                Low spreads on synthetics and fast withdrawal,
                            </p>
                            <p className='week'>
                                -Deriv is a good broker
                            </p>
                        </div>
                        <input className='butt' type="button" value={">"} onClick={fourth} />
                    </div>
                    <h4 className='ange'>Simon</h4>
                    <div className='arrows'>
                        <center>
                            <FaArrowLeft onClick={third}/>
                            <FaArrowRight onClick={fourth}  className='ujy'/>
                        </center>
                    </div>
                </div>
                <div className='okiy' style={{ display: threed }}>
                    <div className='review'>
                        <input className='butt' type="button" value={"<"} onClick={fifth} />
                        <div className='edt'>
                            <p className='week'>
                                It is a great platform for commodities, forex and synthetic trading,
                            </p>
                            <p className='week'>
                            </p>
                        </div>
                        <input className='butt' type="button" value={">"} onClick={sixth} />
                    </div>
                    <h4 className='ange'>Angeh</h4>
                    <div className='arrows'>
                        <center>
                            <FaArrowLeft onClick={fifth}/>
                            <FaArrowRight onClick={sixth}  className='ujy'/>
                        </center>
                    </div>
                </div>
                <div className='okiy' style={{ display: fourd }}>
                    <div className='review'>
                        <input className='butt' type="button" value={"<"} onClick={seventh} />
                        <div className='edt'>
                            <p className='week'>
                                Deriv Go is the most reliable broker - excellent,
                            </p>
                            <p className='week'>
                                customer support and fast payment.
                            </p>
                        </div>
                        <input className='butt' type="button" value={">"} onClick={eighth} />
                    </div>
                    <h4 className='ange'>Isaac</h4>
                    <div className='arrows'>
                        <center>
                            <FaArrowLeft onClick={seventh}/>
                            <FaArrowRight onClick={eighth}  className='ujy'/>
                        </center>
                    </div>
                </div>
                <div className='okiy' style={{ display: fived }}>
                    <div className='review'>
                        <input className='butt' type="button" value={"<"} onClick={nineth} />
                        <div className='edt'>
                            <p className='week'>
                                Deriv Go is a very nice app -
                            </p>
                            <p className='week'>
                                payments have never been this swift and easy
                            </p>
                        </div>
                        <input className='buttt' type="button" value={">"} onClick={tenth} />
                    </div>
                    <h4 className='ange'>O. Victor</h4>
                    <center>
                        <div className='arrows'>
                            <FaArrowLeft onClick={nineth}/>
                            <FaArrowRight onClick={tenth} className='ujyy'/>
                        </div>
                    </center>
                </div>
            </div>
        </div>
    )
}

export default Clients