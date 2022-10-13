import React from 'react'

const Signin = () => {
    return (
        <div className='signin'>
            <div className='formred'>

                <div className='form'>
                    <h2 className='fh1'>Join over 1 million traders worldwide</h2>
                    <p className='fp1'>Sign up for your demo account now.</p>
                    <div className='hflex'>
                        <fieldset className='okiju'><legend>E-mail</legend>
                            <input type={"text"} className="inpt" placeholder='Email' />
                        </fieldset>
                        <input type={"button"} value={"Sign up"} className="btwn" />
                    </div>
                    <div className='yflex'>
                        <input type={"checkbox"} />
                        <h4 className='yeft'>I agree to the <span className='terms'>terms and conditions</span></h4>
                    </div>
                    <p className='up'>or sign up with</p>
                    <div className='ijuimg'>
                        <div className='okayimg'>

                        </div>
                        <div className='okayimg1'>

                        </div>
                        <div className='okayimg2'>

                        </div>
                        <div className='okayimg3'>

                        </div>
                    </div>
                </div>
                <div className='ijhuy'>
                    <div className='taste'>
                        <h1 className='hyg'> Get a taste of the</h1>
                        <h1>Deriv experience</h1>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Signin