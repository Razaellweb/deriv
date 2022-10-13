import React, { useState } from 'react'
import { useEffect } from 'react'

const Market = () => {

    const [marg, setMarg] = useState(0)

    useEffect(() => {
        const timer = setTimeout(() => {
          var fr = (marg*1)-(290*1)
          setMarg(fr)
        }, 3000);
    
        return () => clearTimeout(timer);
      })
    

    return (
        <div className='market'>
            <center>
                <h1 className='header'>Markets</h1>
            </center>
            <div className='itemz'>
                <div className='marketitems' style={{marginLeft: marg}}>
                    <div className='synth'>
                        <h1 className='text'>Synthetic Indices</h1>
                        <p></p>
                        <div className='synthetic'></div>
                    </div>
                    <div className='Forex'>
                        <h1 className='text'>Forex</h1>
                        <p></p>
                        <div className='forex'></div>
                    </div>
                    <div className='Crypto'>
                        <h1 className='text'>Crypto Currencies</h1>
                        <p></p>
                        <div className='crypto'></div>
                    </div>
                    <div className='Basket'>
                        <h1 className='text'>Basket Indices</h1>
                        <p></p>
                        <div className='basket'></div>
                    </div>
                    <div className='Commodity'>
                        <h1 className='text'>Commodities</h1>
                        <p></p>
                        <div className='commodity'></div>
                    </div>
                    <div className='Stocks'>
                        <h1 className='text'>Stock & Indices</h1>
                        <p></p>
                        <div className='stocks'></div>
                    </div>
                    <div className='synth'>
                        <h1 className='text'>Synthetic Indices</h1>
                        <p></p>
                        <div className='synthetic'></div>
                    </div>
                    <div className='Forex'>
                        <h1 className='text'>Forex</h1>
                        <p></p>
                        <div className='forex'></div>
                    </div>
                    <div className='Crypto'>
                        <h1 className='text'>Crypto Currencies</h1>
                        <p></p>
                        <div className='crypto'></div>
                    </div>
                    <div className='Basket'>
                        <h1 className='text'>Basket Indices</h1>
                        <p></p>
                        <div className='basket'></div>
                    </div>
                    <div className='Commodity'>
                        <h1 className='text'>Commodities</h1>
                        <p></p>
                        <div className='commodity'></div>
                    </div>
                    <div className='Stocks'>
                        <h1 className='text'>Stock & Indices</h1>
                        <p></p>
                        <div className='stocks'></div>
                    </div>
                    <div className='synth'>
                        <h1 className='text'>Synthetic Indices</h1>
                        <p></p>
                        <div className='synthetic'></div>
                    </div>
                    <div className='Forex'>
                        <h1 className='text'>Forex</h1>
                        <p></p>
                        <div className='forex'></div>
                    </div>
                    <div className='Crypto'>
                        <h1 className='text'>Crypto Currencies</h1>
                        <p></p>
                        <div className='crypto'></div>
                    </div>
                    <div className='Basket'>
                        <h1 className='text'>Basket Indices</h1>
                        <p></p>
                        <div className='basket'></div>
                    </div>
                    <div className='Commodity'>
                        <h1 className='text'>Commodities</h1>
                        <p></p>
                        <div className='commodity'></div>
                    </div>
                    <div className='Stocks'>
                        <h1 className='text'>Stock & Indices</h1>
                        <p></p>
                        <div className='stocks'></div>
                    </div>
                    <div className='synth'>
                        <h1 className='text'>Synthetic Indices</h1>
                        <p></p>
                        <div className='synthetic'></div>
                    </div>
                    <div className='Forex'>
                        <h1 className='text'>Forex</h1>
                        <p></p>
                        <div className='forex'></div>
                    </div>
                    <div className='Crypto'>
                        <h1 className='text'>Crypto Currencies</h1>
                        <p></p>
                        <div className='crypto'></div>
                    </div>
                    <div className='Basket'>
                        <h1 className='text'>Basket Indices</h1>
                        <p></p>
                        <div className='basket'></div>
                    </div>
                    <div className='Commodity'>
                        <h1 className='text'>Commodities</h1>
                        <p></p>
                        <div className='commodity'></div>
                    </div>
                    <div className='Stocks'>
                        <h1 className='text'>Stock & Indices</h1>
                        <p></p>
                        <div className='stocks'></div>
                    </div>
                    <div className='synth'>
                        <h1 className='text'>Synthetic Indices</h1>
                        <p></p>
                        <div className='synthetic'></div>
                    </div>
                    <div className='Forex'>
                        <h1 className='text'>Forex</h1>
                        <p></p>
                        <div className='forex'></div>
                    </div>
                    <div className='Crypto'>
                        <h1 className='text'>Crypto Currencies</h1>
                        <p></p>
                        <div className='crypto'></div>
                    </div>
                    <div className='Basket'>
                        <h1 className='text'>Basket Indices</h1>
                        <p></p>
                        <div className='basket'></div>
                    </div>
                    <div className='Commodity'>
                        <h1 className='text'>Commodities</h1>
                        <p></p>
                        <div className='commodity'></div>
                    </div>
                    <div className='Stocks'>
                        <h1 className='text'>Stock & Indices</h1>
                        <p></p>
                        <div className='stocks'></div>
                    </div>
                    <div className='synth'>
                        <h1 className='text'>Synthetic Indices</h1>
                        <p></p>
                        <div className='synthetic'></div>
                    </div>
                    <div className='Forex'>
                        <h1 className='text'>Forex</h1>
                        <p></p>
                        <div className='forex'></div>
                    </div>
                    <div className='Crypto'>
                        <h1 className='text'>Crypto Currencies</h1>
                        <p></p>
                        <div className='crypto'></div>
                    </div>
                    <div className='Basket'>
                        <h1 className='text'>Basket Indices</h1>
                        <p></p>
                        <div className='basket'></div>
                    </div>
                    <div className='Commodity'>
                        <h1 className='text'>Commodities</h1>
                        <p></p>
                        <div className='commodity'></div>
                    </div>
                    <div className='Stocks'>
                        <h1 className='text'>Stock & Indices</h1>
                        <p></p>
                        <div className='stocks'></div>
                    </div>
                    <div className='synth'>
                        <h1 className='text'>Synthetic Indices</h1>
                        <p></p>
                        <div className='synthetic'></div>
                    </div>
                    <div className='Forex'>
                        <h1 className='text'>Forex</h1>
                        <p></p>
                        <div className='forex'></div>
                    </div>
                    <div className='Crypto'>
                        <h1 className='text'>Crypto Currencies</h1>
                        <p></p>
                        <div className='crypto'></div>
                    </div>
                    <div className='Basket'>
                        <h1 className='text'>Basket Indices</h1>
                        <p></p>
                        <div className='basket'></div>
                    </div>
                    <div className='Commodity'>
                        <h1 className='text'>Commodities</h1>
                        <p></p>
                        <div className='commodity'></div>
                    </div>
                    <div className='Stocks'>
                        <h1 className='text'>Stock & Indices</h1>
                        <p></p>
                        <div className='stocks'></div>
                    </div>
                    <div className='synth'>
                        <h1 className='text'>Synthetic Indices</h1>
                        <p></p>
                        <div className='synthetic'></div>
                    </div>
                    <div className='Forex'>
                        <h1 className='text'>Forex</h1>
                        <p></p>
                        <div className='forex'></div>
                    </div>
                    <div className='Crypto'>
                        <h1 className='text'>Crypto Currencies</h1>
                        <p></p>
                        <div className='crypto'></div>
                    </div>
                    <div className='Basket'>
                        <h1 className='text'>Basket Indices</h1>
                        <p></p>
                        <div className='basket'></div>
                    </div>
                    <div className='Commodity'>
                        <h1 className='text'>Commodities</h1>
                        <p></p>
                        <div className='commodity'></div>
                    </div>
                    <div className='Stocks'>
                        <h1 className='text'>Stock & Indices</h1>
                        <p></p>
                        <div className='stocks'></div>
                    </div>
                    <div className='synth'>
                        <h1 className='text'>Synthetic Indices</h1>
                        <p></p>
                        <div className='synthetic'></div>
                    </div>
                    <div className='Forex'>
                        <h1 className='text'>Forex</h1>
                        <p></p>
                        <div className='forex'></div>
                    </div>
                    <div className='Crypto'>
                        <h1 className='text'>Crypto Currencies</h1>
                        <p></p>
                        <div className='crypto'></div>
                    </div>
                    <div className='Basket'>
                        <h1 className='text'>Basket Indices</h1>
                        <p></p>
                        <div className='basket'></div>
                    </div>
                    <div className='Commodity'>
                        <h1 className='text'>Commodities</h1>
                        <p></p>
                        <div className='commodity'></div>
                    </div>
                    <div className='Stocks'>
                        <h1 className='text'>Stock & Indices</h1>
                        <p></p>
                        <div className='stocks'></div>
                    </div>
                    <div className='synth'>
                        <h1 className='text'>Synthetic Indices</h1>
                        <p></p>
                        <div className='synthetic'></div>
                    </div>
                    <div className='Forex'>
                        <h1 className='text'>Forex</h1>
                        <p></p>
                        <div className='forex'></div>
                    </div>
                    <div className='Crypto'>
                        <h1 className='text'>Crypto Currencies</h1>
                        <p></p>
                        <div className='crypto'></div>
                    </div>
                    <div className='Basket'>
                        <h1 className='text'>Basket Indices</h1>
                        <p></p>
                        <div className='basket'></div>
                    </div>
                    <div className='Commodity'>
                        <h1 className='text'>Commodities</h1>
                        <p></p>
                        <div className='commodity'></div>
                    </div>
                    <div className='Stocks'>
                        <h1 className='text'>Stock & Indices</h1>
                        <p></p>
                        <div className='stocks'></div>
                    </div>
                    <div className='synth'>
                        <h1 className='text'>Synthetic Indices</h1>
                        <p></p>
                        <div className='synthetic'></div>
                    </div>
                    <div className='Forex'>
                        <h1 className='text'>Forex</h1>
                        <p></p>
                        <div className='forex'></div>
                    </div>
                    <div className='Crypto'>
                        <h1 className='text'>Crypto Currencies</h1>
                        <p></p>
                        <div className='crypto'></div>
                    </div>
                    <div className='Basket'>
                        <h1 className='text'>Basket Indices</h1>
                        <p></p>
                        <div className='basket'></div>
                    </div>
                    <div className='Commodity'>
                        <h1 className='text'>Commodities</h1>
                        <p></p>
                        <div className='commodity'></div>
                    </div>
                    <div className='Stocks'>
                        <h1 className='text'>Stock & Indices</h1>
                        <p></p>
                        <div className='stocks'></div>
                    </div>
                    <div className='synth'>
                        <h1 className='text'>Synthetic Indices</h1>
                        <p></p>
                        <div className='synthetic'></div>
                    </div>
                    <div className='Forex'>
                        <h1 className='text'>Forex</h1>
                        <p></p>
                        <div className='forex'></div>
                    </div>
                    <div className='Crypto'>
                        <h1 className='text'>Crypto Currencies</h1>
                        <p></p>
                        <div className='crypto'></div>
                    </div>
                    <div className='Basket'>
                        <h1 className='text'>Basket Indices</h1>
                        <p></p>
                        <div className='basket'></div>
                    </div>
                    <div className='Commodity'>
                        <h1 className='text'>Commodities</h1>
                        <p></p>
                        <div className='commodity'></div>
                    </div>
                    <div className='Stocks'>
                        <h1 className='text'>Stock & Indices</h1>
                        <p></p>
                        <div className='stocks'></div>
                    </div>
                    <div className='synth'>
                        <h1 className='text'>Synthetic Indices</h1>
                        <p></p>
                        <div className='synthetic'></div>
                    </div>
                    <div className='Forex'>
                        <h1 className='text'>Forex</h1>
                        <p></p>
                        <div className='forex'></div>
                    </div>
                    <div className='Crypto'>
                        <h1 className='text'>Crypto Currencies</h1>
                        <p></p>
                        <div className='crypto'></div>
                    </div>
                    <div className='Basket'>
                        <h1 className='text'>Basket Indices</h1>
                        <p></p>
                        <div className='basket'></div>
                    </div>
                    <div className='Commodity'>
                        <h1 className='text'>Commodities</h1>
                        <p></p>
                        <div className='commodity'></div>
                    </div>
                    <div className='Stocks'>
                        <h1 className='text'>Stock & Indices</h1>
                        <p></p>
                        <div className='stocks'></div>
                    </div>
                    <div className='synth'>
                        <h1 className='text'>Synthetic Indices</h1>
                        <p></p>
                        <div className='synthetic'></div>
                    </div>
                    <div className='Forex'>
                        <h1 className='text'>Forex</h1>
                        <p></p>
                        <div className='forex'></div>
                    </div>
                    <div className='Crypto'>
                        <h1 className='text'>Crypto Currencies</h1>
                        <p></p>
                        <div className='crypto'></div>
                    </div>
                    <div className='Basket'>
                        <h1 className='text'>Basket Indices</h1>
                        <p></p>
                        <div className='basket'></div>
                    </div>
                    <div className='Commodity'>
                        <h1 className='text'>Commodities</h1>
                        <p></p>
                        <div className='commodity'></div>
                    </div>
                    <div className='Stocks'>
                        <h1 className='text'>Stock & Indices</h1>
                        <p></p>
                        <div className='stocks'></div>
                    </div>
                    <div className='synth'>
                        <h1 className='text'>Synthetic Indices</h1>
                        <p></p>
                        <div className='synthetic'></div>
                    </div>
                    <div className='Forex'>
                        <h1 className='text'>Forex</h1>
                        <p></p>
                        <div className='forex'></div>
                    </div>
                    <div className='Crypto'>
                        <h1 className='text'>Crypto Currencies</h1>
                        <p></p>
                        <div className='crypto'></div>
                    </div>
                    <div className='Basket'>
                        <h1 className='text'>Basket Indices</h1>
                        <p></p>
                        <div className='basket'></div>
                    </div>
                    <div className='Commodity'>
                        <h1 className='text'>Commodities</h1>
                        <p></p>
                        <div className='commodity'></div>
                    </div>
                    <div className='Stocks'>
                        <h1 className='text'>Stock & Indices</h1>
                        <p></p>
                        <div className='stocks'></div>
                    </div>
                    <div className='synth'>
                        <h1 className='text'>Synthetic Indices</h1>
                        <p></p>
                        <div className='synthetic'></div>
                    </div>
                    <div className='Forex'>
                        <h1 className='text'>Forex</h1>
                        <p></p>
                        <div className='forex'></div>
                    </div>
                    <div className='Crypto'>
                        <h1 className='text'>Crypto Currencies</h1>
                        <p></p>
                        <div className='crypto'></div>
                    </div>
                    <div className='Basket'>
                        <h1 className='text'>Basket Indices</h1>
                        <p></p>
                        <div className='basket'></div>
                    </div>
                    <div className='Commodity'>
                        <h1 className='text'>Commodities</h1>
                        <p></p>
                        <div className='commodity'></div>
                    </div>
                    <div className='Stocks'>
                        <h1 className='text'>Stock & Indices</h1>
                        <p></p>
                        <div className='stocks'></div>
                    </div>
                    <div className='synth'>
                        <h1 className='text'>Synthetic Indices</h1>
                        <p></p>
                        <div className='synthetic'></div>
                    </div>
                    <div className='Forex'>
                        <h1 className='text'>Forex</h1>
                        <p></p>
                        <div className='forex'></div>
                    </div>
                    <div className='Crypto'>
                        <h1 className='text'>Crypto Currencies</h1>
                        <p></p>
                        <div className='crypto'></div>
                    </div>
                    <div className='Basket'>
                        <h1 className='text'>Basket Indices</h1>
                        <p></p>
                        <div className='basket'></div>
                    </div>
                    <div className='Commodity'>
                        <h1 className='text'>Commodities</h1>
                        <p></p>
                        <div className='commodity'></div>
                    </div>
                    <div className='Stocks'>
                        <h1 className='text'>Stock & Indices</h1>
                        <p></p>
                        <div className='stocks'></div>
                    </div>
                    <div className='synth'>
                        <h1 className='text'>Synthetic Indices</h1>
                        <p></p>
                        <div className='synthetic'></div>
                    </div>
                    <div className='Forex'>
                        <h1 className='text'>Forex</h1>
                        <p></p>
                        <div className='forex'></div>
                    </div>
                    <div className='Crypto'>
                        <h1 className='text'>Crypto Currencies</h1>
                        <p></p>
                        <div className='crypto'></div>
                    </div>
                    <div className='Basket'>
                        <h1 className='text'>Basket Indices</h1>
                        <p></p>
                        <div className='basket'></div>
                    </div>
                    <div className='Commodity'>
                        <h1 className='text'>Commodities</h1>
                        <p></p>
                        <div className='commodity'></div>
                    </div>
                    <div className='Stocks'>
                        <h1 className='text'>Stock & Indices</h1>
                        <p></p>
                        <div className='stocks'></div>
                    </div>
                    <div className='synth'>
                        <h1 className='text'>Synthetic Indices</h1>
                        <p></p>
                        <div className='synthetic'></div>
                    </div>
                    <div className='Forex'>
                        <h1 className='text'>Forex</h1>
                        <p></p>
                        <div className='forex'></div>
                    </div>
                    <div className='Crypto'>
                        <h1 className='text'>Crypto Currencies</h1>
                        <p></p>
                        <div className='crypto'></div>
                    </div>
                    <div className='Basket'>
                        <h1 className='text'>Basket Indices</h1>
                        <p></p>
                        <div className='basket'></div>
                    </div>
                    <div className='Commodity'>
                        <h1 className='text'>Commodities</h1>
                        <p></p>
                        <div className='commodity'></div>
                    </div>
                    <div className='Stocks'>
                        <h1 className='text'>Stock & Indices</h1>
                        <p></p>
                        <div className='stocks'></div>
                    </div>
                    <div className='synth'>
                        <h1 className='text'>Synthetic Indices</h1>
                        <p></p>
                        <div className='synthetic'></div>
                    </div>
                    <div className='Forex'>
                        <h1 className='text'>Forex</h1>
                        <p></p>
                        <div className='forex'></div>
                    </div>
                    <div className='Crypto'>
                        <h1 className='text'>Crypto Currencies</h1>
                        <p></p>
                        <div className='crypto'></div>
                    </div>
                    <div className='Basket'>
                        <h1 className='text'>Basket Indices</h1>
                        <p></p>
                        <div className='basket'></div>
                    </div>
                    <div className='Commodity'>
                        <h1 className='text'>Commodities</h1>
                        <p></p>
                        <div className='commodity'></div>
                    </div>
                    <div className='Stocks'>
                        <h1 className='text'>Stock & Indices</h1>
                        <p></p>
                        <div className='stocks'></div>
                    </div>
                    <div className='synth'>
                        <h1 className='text'>Synthetic Indices</h1>
                        <p></p>
                        <div className='synthetic'></div>
                    </div>
                    <div className='Forex'>
                        <h1 className='text'>Forex</h1>
                        <p></p>
                        <div className='forex'></div>
                    </div>
                    <div className='Crypto'>
                        <h1 className='text'>Crypto Currencies</h1>
                        <p></p>
                        <div className='crypto'></div>
                    </div>
                    <div className='Basket'>
                        <h1 className='text'>Basket Indices</h1>
                        <p></p>
                        <div className='basket'></div>
                    </div>
                    <div className='Commodity'>
                        <h1 className='text'>Commodities</h1>
                        <p></p>
                        <div className='commodity'></div>
                    </div>
                    <div className='Stocks'>
                        <h1 className='text'>Stock & Indices</h1>
                        <p></p>
                        <div className='stocks'></div>
                    </div>
                    <div className='synth'>
                        <h1 className='text'>Synthetic Indices</h1>
                        <p></p>
                        <div className='synthetic'></div>
                    </div>
                    <div className='Forex'>
                        <h1 className='text'>Forex</h1>
                        <p></p>
                        <div className='forex'></div>
                    </div>
                    <div className='Crypto'>
                        <h1 className='text'>Crypto Currencies</h1>
                        <p></p>
                        <div className='crypto'></div>
                    </div>
                    <div className='Basket'>
                        <h1 className='text'>Basket Indices</h1>
                        <p></p>
                        <div className='basket'></div>
                    </div>
                    <div className='Commodity'>
                        <h1 className='text'>Commodities</h1>
                        <p></p>
                        <div className='commodity'></div>
                    </div>
                    <div className='Stocks'>
                        <h1 className='text'>Stock & Indices</h1>
                        <p></p>
                        <div className='stocks'></div>
                    </div>
                    <div className='synth'>
                        <h1 className='text'>Synthetic Indices</h1>
                        <p></p>
                        <div className='synthetic'></div>
                    </div>
                    <div className='Forex'>
                        <h1 className='text'>Forex</h1>
                        <p></p>
                        <div className='forex'></div>
                    </div>
                    <div className='Crypto'>
                        <h1 className='text'>Crypto Currencies</h1>
                        <p></p>
                        <div className='crypto'></div>
                    </div>
                    <div className='Basket'>
                        <h1 className='text'>Basket Indices</h1>
                        <p></p>
                        <div className='basket'></div>
                    </div>
                    <div className='Commodity'>
                        <h1 className='text'>Commodities</h1>
                        <p></p>
                        <div className='commodity'></div>
                    </div>
                    <div className='Stocks'>
                        <h1 className='text'>Stock & Indices</h1>
                        <p></p>
                        <div className='stocks'></div>
                    </div>
                    <div className='synth'>
                        <h1 className='text'>Synthetic Indices</h1>
                        <p></p>
                        <div className='synthetic'></div>
                    </div>
                    <div className='Forex'>
                        <h1 className='text'>Forex</h1>
                        <p></p>
                        <div className='forex'></div>
                    </div>
                    <div className='Crypto'>
                        <h1 className='text'>Crypto Currencies</h1>
                        <p></p>
                        <div className='crypto'></div>
                    </div>
                    <div className='Basket'>
                        <h1 className='text'>Basket Indices</h1>
                        <p></p>
                        <div className='basket'></div>
                    </div>
                    <div className='Commodity'>
                        <h1 className='text'>Commodities</h1>
                        <p></p>
                        <div className='commodity'></div>
                    </div>
                    <div className='Stocks'>
                        <h1 className='text'>Stock & Indices</h1>
                        <p></p>
                        <div className='stocks'></div>
                    </div>
                    <div className='synth'>
                        <h1 className='text'>Synthetic Indices</h1>
                        <p></p>
                        <div className='synthetic'></div>
                    </div>
                    <div className='Forex'>
                        <h1 className='text'>Forex</h1>
                        <p></p>
                        <div className='forex'></div>
                    </div>
                    <div className='Crypto'>
                        <h1 className='text'>Crypto Currencies</h1>
                        <p></p>
                        <div className='crypto'></div>
                    </div>
                    <div className='Basket'>
                        <h1 className='text'>Basket Indices</h1>
                        <p></p>
                        <div className='basket'></div>
                    </div>
                    <div className='Commodity'>
                        <h1 className='text'>Commodities</h1>
                        <p></p>
                        <div className='commodity'></div>
                    </div>
                    <div className='Stocks'>
                        <h1 className='text'>Stock & Indices</h1>
                        <p></p>
                        <div className='stocks'></div>
                    </div>
                    <div className='synth'>
                        <h1 className='text'>Synthetic Indices</h1>
                        <p></p>
                        <div className='synthetic'></div>
                    </div>
                    <div className='Forex'>
                        <h1 className='text'>Forex</h1>
                        <p></p>
                        <div className='forex'></div>
                    </div>
                    <div className='Crypto'>
                        <h1 className='text'>Crypto Currencies</h1>
                        <p></p>
                        <div className='crypto'></div>
                    </div>
                    <div className='Basket'>
                        <h1 className='text'>Basket Indices</h1>
                        <p></p>
                        <div className='basket'></div>
                    </div>
                    <div className='Commodity'>
                        <h1 className='text'>Commodities</h1>
                        <p></p>
                        <div className='commodity'></div>
                    </div>
                    <div className='Stocks'>
                        <h1 className='text'>Stock & Indices</h1>
                        <p></p>
                        <div className='stocks'></div>
                    </div>
                    <div className='synth'>
                        <h1 className='text'>Synthetic Indices</h1>
                        <p></p>
                        <div className='synthetic'></div>
                    </div>
                    <div className='Forex'>
                        <h1 className='text'>Forex</h1>
                        <p></p>
                        <div className='forex'></div>
                    </div>
                    <div className='Crypto'>
                        <h1 className='text'>Crypto Currencies</h1>
                        <p></p>
                        <div className='crypto'></div>
                    </div>
                    <div className='Basket'>
                        <h1 className='text'>Basket Indices</h1>
                        <p></p>
                        <div className='basket'></div>
                    </div>
                    <div className='Commodity'>
                        <h1 className='text'>Commodities</h1>
                        <p></p>
                        <div className='commodity'></div>
                    </div>
                    <div className='Stocks'>
                        <h1 className='text'>Stock & Indices</h1>
                        <p></p>
                        <div className='stocks'></div>
                    </div>
                    <div className='synth'>
                        <h1 className='text'>Synthetic Indices</h1>
                        <p></p>
                        <div className='synthetic'></div>
                    </div>
                    <div className='Forex'>
                        <h1 className='text'>Forex</h1>
                        <p></p>
                        <div className='forex'></div>
                    </div>
                    <div className='Crypto'>
                        <h1 className='text'>Crypto Currencies</h1>
                        <p></p>
                        <div className='crypto'></div>
                    </div>
                    <div className='Basket'>
                        <h1 className='text'>Basket Indices</h1>
                        <p></p>
                        <div className='basket'></div>
                    </div>
                    <div className='Commodity'>
                        <h1 className='text'>Commodities</h1>
                        <p></p>
                        <div className='commodity'></div>
                    </div>
                    <div className='Stocks'>
                        <h1 className='text'>Stock & Indices</h1>
                        <p></p>
                        <div className='stocks'></div>
                    </div>
                    <div className='synth'>
                        <h1 className='text'>Synthetic Indices</h1>
                        <p></p>
                        <div className='synthetic'></div>
                    </div>
                    <div className='Forex'>
                        <h1 className='text'>Forex</h1>
                        <p></p>
                        <div className='forex'></div>
                    </div>
                    <div className='Crypto'>
                        <h1 className='text'>Crypto Currencies</h1>
                        <p></p>
                        <div className='crypto'></div>
                    </div>
                    <div className='Basket'>
                        <h1 className='text'>Basket Indices</h1>
                        <p></p>
                        <div className='basket'></div>
                    </div>
                    <div className='Commodity'>
                        <h1 className='text'>Commodities</h1>
                        <p></p>
                        <div className='commodity'></div>
                    </div>
                    <div className='Stocks'>
                        <h1 className='text'>Stock & Indices</h1>
                        <p></p>
                        <div className='stocks'></div>
                    </div>
                    <div className='synth'>
                        <h1 className='text'>Synthetic Indices</h1>
                        <p></p>
                        <div className='synthetic'></div>
                    </div>
                    <div className='Forex'>
                        <h1 className='text'>Forex</h1>
                        <p></p>
                        <div className='forex'></div>
                    </div>
                    <div className='Crypto'>
                        <h1 className='text'>Crypto Currencies</h1>
                        <p></p>
                        <div className='crypto'></div>
                    </div>
                    <div className='Basket'>
                        <h1 className='text'>Basket Indices</h1>
                        <p></p>
                        <div className='basket'></div>
                    </div>
                    <div className='Commodity'>
                        <h1 className='text'>Commodities</h1>
                        <p></p>
                        <div className='commodity'></div>
                    </div>
                    <div className='Stocks'>
                        <h1 className='text'>Stock & Indices</h1>
                        <p></p>
                        <div className='stocks'></div>
                    </div>
                    <div className='synth'>
                        <h1 className='text'>Synthetic Indices</h1>
                        <p></p>
                        <div className='synthetic'></div>
                    </div>
                    <div className='Forex'>
                        <h1 className='text'>Forex</h1>
                        <p></p>
                        <div className='forex'></div>
                    </div>
                    <div className='Crypto'>
                        <h1 className='text'>Crypto Currencies</h1>
                        <p></p>
                        <div className='crypto'></div>
                    </div>
                    <div className='Basket'>
                        <h1 className='text'>Basket Indices</h1>
                        <p></p>
                        <div className='basket'></div>
                    </div>
                    <div className='Commodity'>
                        <h1 className='text'>Commodities</h1>
                        <p></p>
                        <div className='commodity'></div>
                    </div>
                    <div className='Stocks'>
                        <h1 className='text'>Stock & Indices</h1>
                        <p></p>
                        <div className='stocks'></div>
                    </div>
                    <div className='synth'>
                        <h1 className='text'>Synthetic Indices</h1>
                        <p></p>
                        <div className='synthetic'></div>
                    </div>
                    <div className='Forex'>
                        <h1 className='text'>Forex</h1>
                        <p></p>
                        <div className='forex'></div>
                    </div>
                    <div className='Crypto'>
                        <h1 className='text'>Crypto Currencies</h1>
                        <p></p>
                        <div className='crypto'></div>
                    </div>
                    <div className='Basket'>
                        <h1 className='text'>Basket Indices</h1>
                        <p></p>
                        <div className='basket'></div>
                    </div>
                    <div className='Commodity'>
                        <h1 className='text'>Commodities</h1>
                        <p></p>
                        <div className='commodity'></div>
                    </div>
                    <div className='Stocks'>
                        <h1 className='text'>Stock & Indices</h1>
                        <p></p>
                        <div className='stocks'></div>
                    </div>
                    <div className='synth'>
                        <h1 className='text'>Synthetic Indices</h1>
                        <p></p>
                        <div className='synthetic'></div>
                    </div>
                    <div className='Forex'>
                        <h1 className='text'>Forex</h1>
                        <p></p>
                        <div className='forex'></div>
                    </div>
                    <div className='Crypto'>
                        <h1 className='text'>Crypto Currencies</h1>
                        <p></p>
                        <div className='crypto'></div>
                    </div>
                    <div className='Basket'>
                        <h1 className='text'>Basket Indices</h1>
                        <p></p>
                        <div className='basket'></div>
                    </div>
                    <div className='Commodity'>
                        <h1 className='text'>Commodities</h1>
                        <p></p>
                        <div className='commodity'></div>
                    </div>
                    <div className='Stocks'>
                        <h1 className='text'>Stock & Indices</h1>
                        <p></p>
                        <div className='stocks'></div>
                    </div>
                    <div className='synth'>
                        <h1 className='text'>Synthetic Indices</h1>
                        <p></p>
                        <div className='synthetic'></div>
                    </div>
                    <div className='Forex'>
                        <h1 className='text'>Forex</h1>
                        <p></p>
                        <div className='forex'></div>
                    </div>
                    <div className='Crypto'>
                        <h1 className='text'>Crypto Currencies</h1>
                        <p></p>
                        <div className='crypto'></div>
                    </div>
                    <div className='Basket'>
                        <h1 className='text'>Basket Indices</h1>
                        <p></p>
                        <div className='basket'></div>
                    </div>
                    <div className='Commodity'>
                        <h1 className='text'>Commodities</h1>
                        <p></p>
                        <div className='commodity'></div>
                    </div>
                    <div className='Stocks'>
                        <h1 className='text'>Stock & Indices</h1>
                        <p></p>
                        <div className='stocks'></div>
                    </div>
                    <div className='synth'>
                        <h1 className='text'>Synthetic Indices</h1>
                        <p></p>
                        <div className='synthetic'></div>
                    </div>
                    <div className='Forex'>
                        <h1 className='text'>Forex</h1>
                        <p></p>
                        <div className='forex'></div>
                    </div>
                    <div className='Crypto'>
                        <h1 className='text'>Crypto Currencies</h1>
                        <p></p>
                        <div className='crypto'></div>
                    </div>
                    <div className='Basket'>
                        <h1 className='text'>Basket Indices</h1>
                        <p></p>
                        <div className='basket'></div>
                    </div>
                    <div className='Commodity'>
                        <h1 className='text'>Commodities</h1>
                        <p></p>
                        <div className='commodity'></div>
                    </div>
                    <div className='Stocks'>
                        <h1 className='text'>Stock & Indices</h1>
                        <p></p>
                        <div className='stocks'></div>
                    </div>
                    <div className='synth'>
                        <h1 className='text'>Synthetic Indices</h1>
                        <p></p>
                        <div className='synthetic'></div>
                    </div>
                    <div className='Forex'>
                        <h1 className='text'>Forex</h1>
                        <p></p>
                        <div className='forex'></div>
                    </div>
                    <div className='Crypto'>
                        <h1 className='text'>Crypto Currencies</h1>
                        <p></p>
                        <div className='crypto'></div>
                    </div>
                    <div className='Basket'>
                        <h1 className='text'>Basket Indices</h1>
                        <p></p>
                        <div className='basket'></div>
                    </div>
                    <div className='Commodity'>
                        <h1 className='text'>Commodities</h1>
                        <p></p>
                        <div className='commodity'></div>
                    </div>
                    <div className='Stocks'>
                        <h1 className='text'>Stock & Indices</h1>
                        <p></p>
                        <div className='stocks'></div>
                    </div>
                    <div className='synth'>
                        <h1 className='text'>Synthetic Indices</h1>
                        <p></p>
                        <div className='synthetic'></div>
                    </div>
                    <div className='Forex'>
                        <h1 className='text'>Forex</h1>
                        <p></p>
                        <div className='forex'></div>
                    </div>
                    <div className='Crypto'>
                        <h1 className='text'>Crypto Currencies</h1>
                        <p></p>
                        <div className='crypto'></div>
                    </div>
                    <div className='Basket'>
                        <h1 className='text'>Basket Indices</h1>
                        <p></p>
                        <div className='basket'></div>
                    </div>
                    <div className='Commodity'>
                        <h1 className='text'>Commodities</h1>
                        <p></p>
                        <div className='commodity'></div>
                    </div>
                    <div className='Stocks'>
                        <h1 className='text'>Stock & Indices</h1>
                        <p></p>
                        <div className='stocks'></div>
                    </div>
                    <div className='synth'>
                        <h1 className='text'>Synthetic Indices</h1>
                        <p></p>
                        <div className='synthetic'></div>
                    </div>
                    <div className='Forex'>
                        <h1 className='text'>Forex</h1>
                        <p></p>
                        <div className='forex'></div>
                    </div>
                    <div className='Crypto'>
                        <h1 className='text'>Crypto Currencies</h1>
                        <p></p>
                        <div className='crypto'></div>
                    </div>
                    <div className='Basket'>
                        <h1 className='text'>Basket Indices</h1>
                        <p></p>
                        <div className='basket'></div>
                    </div>
                    <div className='Commodity'>
                        <h1 className='text'>Commodities</h1>
                        <p></p>
                        <div className='commodity'></div>
                    </div>
                    <div className='Stocks'>
                        <h1 className='text'>Stock & Indices</h1>
                        <p></p>
                        <div className='stocks'></div>
                    </div>
                    <div className='synth'>
                        <h1 className='text'>Synthetic Indices</h1>
                        <p></p>
                        <div className='synthetic'></div>
                    </div>
                    <div className='Forex'>
                        <h1 className='text'>Forex</h1>
                        <p></p>
                        <div className='forex'></div>
                    </div>
                    <div className='Crypto'>
                        <h1 className='text'>Crypto Currencies</h1>
                        <p></p>
                        <div className='crypto'></div>
                    </div>
                    <div className='Basket'>
                        <h1 className='text'>Basket Indices</h1>
                        <p></p>
                        <div className='basket'></div>
                    </div>
                    <div className='Commodity'>
                        <h1 className='text'>Commodities</h1>
                        <p></p>
                        <div className='commodity'></div>
                    </div>
                    <div className='Stocks'>
                        <h1 className='text'>Stock & Indices</h1>
                        <p></p>
                        <div className='stocks'></div>
                    </div>
                    <div className='synth'>
                        <h1 className='text'>Synthetic Indices</h1>
                        <p></p>
                        <div className='synthetic'></div>
                    </div>
                    <div className='Forex'>
                        <h1 className='text'>Forex</h1>
                        <p></p>
                        <div className='forex'></div>
                    </div>
                    <div className='Crypto'>
                        <h1 className='text'>Crypto Currencies</h1>
                        <p></p>
                        <div className='crypto'></div>
                    </div>
                    <div className='Basket'>
                        <h1 className='text'>Basket Indices</h1>
                        <p></p>
                        <div className='basket'></div>
                    </div>
                    <div className='Commodity'>
                        <h1 className='text'>Commodities</h1>
                        <p></p>
                        <div className='commodity'></div>
                    </div>
                    <div className='Stocks'>
                        <h1 className='text'>Stock & Indices</h1>
                        <p></p>
                        <div className='stocks'></div>
                    </div>
                    <div className='synth'>
                        <h1 className='text'>Synthetic Indices</h1>
                        <p></p>
                        <div className='synthetic'></div>
                    </div>
                    <div className='Forex'>
                        <h1 className='text'>Forex</h1>
                        <p></p>
                        <div className='forex'></div>
                    </div>
                    <div className='Crypto'>
                        <h1 className='text'>Crypto Currencies</h1>
                        <p></p>
                        <div className='crypto'></div>
                    </div>
                    <div className='Basket'>
                        <h1 className='text'>Basket Indices</h1>
                        <p></p>
                        <div className='basket'></div>
                    </div>
                    <div className='Commodity'>
                        <h1 className='text'>Commodities</h1>
                        <p></p>
                        <div className='commodity'></div>
                    </div>
                    <div className='Stocks'>
                        <h1 className='text'>Stock & Indices</h1>
                        <p></p>
                        <div className='stocks'></div>
                    </div>
                    <div className='synth'>
                        <h1 className='text'>Synthetic Indices</h1>
                        <p></p>
                        <div className='synthetic'></div>
                    </div>
                    <div className='Forex'>
                        <h1 className='text'>Forex</h1>
                        <p></p>
                        <div className='forex'></div>
                    </div>
                    <div className='Crypto'>
                        <h1 className='text'>Crypto Currencies</h1>
                        <p></p>
                        <div className='crypto'></div>
                    </div>
                    <div className='Basket'>
                        <h1 className='text'>Basket Indices</h1>
                        <p></p>
                        <div className='basket'></div>
                    </div>
                    <div className='Commodity'>
                        <h1 className='text'>Commodities</h1>
                        <p></p>
                        <div className='commodity'></div>
                    </div>
                    <div className='Stocks'>
                        <h1 className='text'>Stock & Indices</h1>
                        <p></p>
                        <div className='stocks'></div>
                    </div>
                    <div className='synth'>
                        <h1 className='text'>Synthetic Indices</h1>
                        <p></p>
                        <div className='synthetic'></div>
                    </div>
                    <div className='Forex'>
                        <h1 className='text'>Forex</h1>
                        <p></p>
                        <div className='forex'></div>
                    </div>
                    <div className='Crypto'>
                        <h1 className='text'>Crypto Currencies</h1>
                        <p></p>
                        <div className='crypto'></div>
                    </div>
                    <div className='Basket'>
                        <h1 className='text'>Basket Indices</h1>
                        <p></p>
                        <div className='basket'></div>
                    </div>
                    <div className='Commodity'>
                        <h1 className='text'>Commodities</h1>
                        <p></p>
                        <div className='commodity'></div>
                    </div>
                    <div className='Stocks'>
                        <h1 className='text'>Stock & Indices</h1>
                        <p></p>
                        <div className='stocks'></div>
                    </div>
                    <div className='synth'>
                        <h1 className='text'>Synthetic Indices</h1>
                        <p></p>
                        <div className='synthetic'></div>
                    </div>
                    <div className='Forex'>
                        <h1 className='text'>Forex</h1>
                        <p></p>
                        <div className='forex'></div>
                    </div>
                    <div className='Crypto'>
                        <h1 className='text'>Crypto Currencies</h1>
                        <p></p>
                        <div className='crypto'></div>
                    </div>
                    <div className='Basket'>
                        <h1 className='text'>Basket Indices</h1>
                        <p></p>
                        <div className='basket'></div>
                    </div>
                    <div className='Commodity'>
                        <h1 className='text'>Commodities</h1>
                        <p></p>
                        <div className='commodity'></div>
                    </div>
                    <div className='Stocks'>
                        <h1 className='text'>Stock & Indices</h1>
                        <p></p>
                        <div className='stocks'></div>
                    </div>
                    <div className='synth'>
                        <h1 className='text'>Synthetic Indices</h1>
                        <p></p>
                        <div className='synthetic'></div>
                    </div>
                    <div className='Forex'>
                        <h1 className='text'>Forex</h1>
                        <p></p>
                        <div className='forex'></div>
                    </div>
                    <div className='Crypto'>
                        <h1 className='text'>Crypto Currencies</h1>
                        <p></p>
                        <div className='crypto'></div>
                    </div>
                    <div className='Basket'>
                        <h1 className='text'>Basket Indices</h1>
                        <p></p>
                        <div className='basket'></div>
                    </div>
                    <div className='Commodity'>
                        <h1 className='text'>Commodities</h1>
                        <p></p>
                        <div className='commodity'></div>
                    </div>
                    <div className='Stocks'>
                        <h1 className='text'>Stock & Indices</h1>
                        <p></p>
                        <div className='stocks'></div>
                    </div>
                    <div className='synth'>
                        <h1 className='text'>Synthetic Indices</h1>
                        <p></p>
                        <div className='synthetic'></div>
                    </div>
                    <div className='Forex'>
                        <h1 className='text'>Forex</h1>
                        <p></p>
                        <div className='forex'></div>
                    </div>
                    <div className='Crypto'>
                        <h1 className='text'>Crypto Currencies</h1>
                        <p></p>
                        <div className='crypto'></div>
                    </div>
                    <div className='Basket'>
                        <h1 className='text'>Basket Indices</h1>
                        <p></p>
                        <div className='basket'></div>
                    </div>
                    <div className='Commodity'>
                        <h1 className='text'>Commodities</h1>
                        <p></p>
                        <div className='commodity'></div>
                    </div>
                    <div className='Stocks'>
                        <h1 className='text'>Stock & Indices</h1>
                        <p></p>
                        <div className='stocks'></div>
                    </div>
                    <div className='synth'>
                        <h1 className='text'>Synthetic Indices</h1>
                        <p></p>
                        <div className='synthetic'></div>
                    </div>
                    <div className='Forex'>
                        <h1 className='text'>Forex</h1>
                        <p></p>
                        <div className='forex'></div>
                    </div>
                    <div className='Crypto'>
                        <h1 className='text'>Crypto Currencies</h1>
                        <p></p>
                        <div className='crypto'></div>
                    </div>
                    <div className='Basket'>
                        <h1 className='text'>Basket Indices</h1>
                        <p></p>
                        <div className='basket'></div>
                    </div>
                    <div className='Commodity'>
                        <h1 className='text'>Commodities</h1>
                        <p></p>
                        <div className='commodity'></div>
                    </div>
                    <div className='Stocks'>
                        <h1 className='text'>Stock & Indices</h1>
                        <p></p>
                        <div className='stocks'></div>
                    </div>
                    <div className='synth'>
                        <h1 className='text'>Synthetic Indices</h1>
                        <p></p>
                        <div className='synthetic'></div>
                    </div>
                    <div className='Forex'>
                        <h1 className='text'>Forex</h1>
                        <p></p>
                        <div className='forex'></div>
                    </div>
                    <div className='Crypto'>
                        <h1 className='text'>Crypto Currencies</h1>
                        <p></p>
                        <div className='crypto'></div>
                    </div>
                    <div className='Basket'>
                        <h1 className='text'>Basket Indices</h1>
                        <p></p>
                        <div className='basket'></div>
                    </div>
                    <div className='Commodity'>
                        <h1 className='text'>Commodities</h1>
                        <p></p>
                        <div className='commodity'></div>
                    </div>
                    <div className='Stocks'>
                        <h1 className='text'>Stock & Indices</h1>
                        <p></p>
                        <div className='stocks'></div>
                    </div>
                    <div className='synth'>
                        <h1 className='text'>Synthetic Indices</h1>
                        <p></p>
                        <div className='synthetic'></div>
                    </div>
                    <div className='Forex'>
                        <h1 className='text'>Forex</h1>
                        <p></p>
                        <div className='forex'></div>
                    </div>
                    <div className='Crypto'>
                        <h1 className='text'>Crypto Currencies</h1>
                        <p></p>
                        <div className='crypto'></div>
                    </div>
                    <div className='Basket'>
                        <h1 className='text'>Basket Indices</h1>
                        <p></p>
                        <div className='basket'></div>
                    </div>
                    <div className='Commodity'>
                        <h1 className='text'>Commodities</h1>
                        <p></p>
                        <div className='commodity'></div>
                    </div>
                    <div className='Stocks'>
                        <h1 className='text'>Stock & Indices</h1>
                        <p></p>
                        <div className='stocks'></div>
                    </div>
                    <div className='synth'>
                        <h1 className='text'>Synthetic Indices</h1>
                        <p></p>
                        <div className='synthetic'></div>
                    </div>
                    <div className='Forex'>
                        <h1 className='text'>Forex</h1>
                        <p></p>
                        <div className='forex'></div>
                    </div>
                    <div className='Crypto'>
                        <h1 className='text'>Crypto Currencies</h1>
                        <p></p>
                        <div className='crypto'></div>
                    </div>
                    <div className='Basket'>
                        <h1 className='text'>Basket Indices</h1>
                        <p></p>
                        <div className='basket'></div>
                    </div>
                    <div className='Commodity'>
                        <h1 className='text'>Commodities</h1>
                        <p></p>
                        <div className='commodity'></div>
                    </div>
                    <div className='Stocks'>
                        <h1 className='text'>Stock & Indices</h1>
                        <p></p>
                        <div className='stocks'></div>
                    </div>
                    <div className='synth'>
                        <h1 className='text'>Synthetic Indices</h1>
                        <p></p>
                        <div className='synthetic'></div>
                    </div>
                    <div className='Forex'>
                        <h1 className='text'>Forex</h1>
                        <p></p>
                        <div className='forex'></div>
                    </div>
                    <div className='Crypto'>
                        <h1 className='text'>Crypto Currencies</h1>
                        <p></p>
                        <div className='crypto'></div>
                    </div>
                    <div className='Basket'>
                        <h1 className='text'>Basket Indices</h1>
                        <p></p>
                        <div className='basket'></div>
                    </div>
                    <div className='Commodity'>
                        <h1 className='text'>Commodities</h1>
                        <p></p>
                        <div className='commodity'></div>
                    </div>
                    <div className='Stocks'>
                        <h1 className='text'>Stock & Indices</h1>
                        <p></p>
                        <div className='stocks'></div>
                    </div>
                    <div className='synth'>
                        <h1 className='text'>Synthetic Indices</h1>
                        <p></p>
                        <div className='synthetic'></div>
                    </div>
                    <div className='Forex'>
                        <h1 className='text'>Forex</h1>
                        <p></p>
                        <div className='forex'></div>
                    </div>
                    <div className='Crypto'>
                        <h1 className='text'>Crypto Currencies</h1>
                        <p></p>
                        <div className='crypto'></div>
                    </div>
                    <div className='Basket'>
                        <h1 className='text'>Basket Indices</h1>
                        <p></p>
                        <div className='basket'></div>
                    </div>
                    <div className='Commodity'>
                        <h1 className='text'>Commodities</h1>
                        <p></p>
                        <div className='commodity'></div>
                    </div>
                    <div className='Stocks'>
                        <h1 className='text'>Stock & Indices</h1>
                        <p></p>
                        <div className='stocks'></div>
                    </div>
                    <div className='synth'>
                        <h1 className='text'>Synthetic Indices</h1>
                        <p></p>
                        <div className='synthetic'></div>
                    </div>
                    <div className='Forex'>
                        <h1 className='text'>Forex</h1>
                        <p></p>
                        <div className='forex'></div>
                    </div>
                    <div className='Crypto'>
                        <h1 className='text'>Crypto Currencies</h1>
                        <p></p>
                        <div className='crypto'></div>
                    </div>
                    <div className='Basket'>
                        <h1 className='text'>Basket Indices</h1>
                        <p></p>
                        <div className='basket'></div>
                    </div>
                    <div className='Commodity'>
                        <h1 className='text'>Commodities</h1>
                        <p></p>
                        <div className='commodity'></div>
                    </div>
                    <div className='Stocks'>
                        <h1 className='text'>Stock & Indices</h1>
                        <p></p>
                        <div className='stocks'></div>
                    </div>
                    <div className='synth'>
                        <h1 className='text'>Synthetic Indices</h1>
                        <p></p>
                        <div className='synthetic'></div>
                    </div>
                    <div className='Forex'>
                        <h1 className='text'>Forex</h1>
                        <p></p>
                        <div className='forex'></div>
                    </div>
                    <div className='Crypto'>
                        <h1 className='text'>Crypto Currencies</h1>
                        <p></p>
                        <div className='crypto'></div>
                    </div>
                    <div className='Basket'>
                        <h1 className='text'>Basket Indices</h1>
                        <p></p>
                        <div className='basket'></div>
                    </div>
                    <div className='Commodity'>
                        <h1 className='text'>Commodities</h1>
                        <p></p>
                        <div className='commodity'></div>
                    </div>
                    <div className='Stocks'>
                        <h1 className='text'>Stock & Indices</h1>
                        <p></p>
                        <div className='stocks'></div>
                    </div>
                    <div className='synth'>
                        <h1 className='text'>Synthetic Indices</h1>
                        <p></p>
                        <div className='synthetic'></div>
                    </div>
                    <div className='Forex'>
                        <h1 className='text'>Forex</h1>
                        <p></p>
                        <div className='forex'></div>
                    </div>
                    <div className='Crypto'>
                        <h1 className='text'>Crypto Currencies</h1>
                        <p></p>
                        <div className='crypto'></div>
                    </div>
                    <div className='Basket'>
                        <h1 className='text'>Basket Indices</h1>
                        <p></p>
                        <div className='basket'></div>
                    </div>
                    <div className='Commodity'>
                        <h1 className='text'>Commodities</h1>
                        <p></p>
                        <div className='commodity'></div>
                    </div>
                    <div className='Stocks'>
                        <h1 className='text'>Stock & Indices</h1>
                        <p></p>
                        <div className='stocks'></div>
                    </div>
                    <div className='synth'>
                        <h1 className='text'>Synthetic Indices</h1>
                        <p></p>
                        <div className='synthetic'></div>
                    </div>
                    <div className='Forex'>
                        <h1 className='text'>Forex</h1>
                        <p></p>
                        <div className='forex'></div>
                    </div>
                    <div className='Crypto'>
                        <h1 className='text'>Crypto Currencies</h1>
                        <p></p>
                        <div className='crypto'></div>
                    </div>
                    <div className='Basket'>
                        <h1 className='text'>Basket Indices</h1>
                        <p></p>
                        <div className='basket'></div>
                    </div>
                    <div className='Commodity'>
                        <h1 className='text'>Commodities</h1>
                        <p></p>
                        <div className='commodity'></div>
                    </div>
                    <div className='Stocks'>
                        <h1 className='text'>Stock & Indices</h1>
                        <p></p>
                        <div className='stocks'></div>
                    </div>
                    <div className='synth'>
                        <h1 className='text'>Synthetic Indices</h1>
                        <p></p>
                        <div className='synthetic'></div>
                    </div>
                    <div className='Forex'>
                        <h1 className='text'>Forex</h1>
                        <p></p>
                        <div className='forex'></div>
                    </div>
                    <div className='Crypto'>
                        <h1 className='text'>Crypto Currencies</h1>
                        <p></p>
                        <div className='crypto'></div>
                    </div>
                    <div className='Basket'>
                        <h1 className='text'>Basket Indices</h1>
                        <p></p>
                        <div className='basket'></div>
                    </div>
                    <div className='Commodity'>
                        <h1 className='text'>Commodities</h1>
                        <p></p>
                        <div className='commodity'></div>
                    </div>
                    <div className='Stocks'>
                        <h1 className='text'>Stock & Indices</h1>
                        <p></p>
                        <div className='stocks'></div>
                    </div>
                    <div className='synth'>
                        <h1 className='text'>Synthetic Indices</h1>
                        <p></p>
                        <div className='synthetic'></div>
                    </div>
                    <div className='Forex'>
                        <h1 className='text'>Forex</h1>
                        <p></p>
                        <div className='forex'></div>
                    </div>
                    <div className='Crypto'>
                        <h1 className='text'>Crypto Currencies</h1>
                        <p></p>
                        <div className='crypto'></div>
                    </div>
                    <div className='Basket'>
                        <h1 className='text'>Basket Indices</h1>
                        <p></p>
                        <div className='basket'></div>
                    </div>
                    <div className='Commodity'>
                        <h1 className='text'>Commodities</h1>
                        <p></p>
                        <div className='commodity'></div>
                    </div>
                    <div className='Stocks'>
                        <h1 className='text'>Stock & Indices</h1>
                        <p></p>
                        <div className='stocks'></div>
                    </div>
                    <div className='synth'>
                        <h1 className='text'>Synthetic Indices</h1>
                        <p></p>
                        <div className='synthetic'></div>
                    </div>
                    <div className='Forex'>
                        <h1 className='text'>Forex</h1>
                        <p></p>
                        <div className='forex'></div>
                    </div>
                    <div className='Crypto'>
                        <h1 className='text'>Crypto Currencies</h1>
                        <p></p>
                        <div className='crypto'></div>
                    </div>
                    <div className='Basket'>
                        <h1 className='text'>Basket Indices</h1>
                        <p></p>
                        <div className='basket'></div>
                    </div>
                    <div className='Commodity'>
                        <h1 className='text'>Commodities</h1>
                        <p></p>
                        <div className='commodity'></div>
                    </div>
                    <div className='Stocks'>
                        <h1 className='text'>Stock & Indices</h1>
                        <p></p>
                        <div className='stocks'></div>
                    </div>
                    <div className='synth'>
                        <h1 className='text'>Synthetic Indices</h1>
                        <p></p>
                        <div className='synthetic'></div>
                    </div>
                    <div className='Forex'>
                        <h1 className='text'>Forex</h1>
                        <p></p>
                        <div className='forex'></div>
                    </div>
                    <div className='Crypto'>
                        <h1 className='text'>Crypto Currencies</h1>
                        <p></p>
                        <div className='crypto'></div>
                    </div>
                    <div className='Basket'>
                        <h1 className='text'>Basket Indices</h1>
                        <p></p>
                        <div className='basket'></div>
                    </div>
                    <div className='Commodity'>
                        <h1 className='text'>Commodities</h1>
                        <p></p>
                        <div className='commodity'></div>
                    </div>
                    <div className='Stocks'>
                        <h1 className='text'>Stock & Indices</h1>
                        <p></p>
                        <div className='stocks'></div>
                    </div>
                    <div className='synth'>
                        <h1 className='text'>Synthetic Indices</h1>
                        <p></p>
                        <div className='synthetic'></div>
                    </div>
                    <div className='Forex'>
                        <h1 className='text'>Forex</h1>
                        <p></p>
                        <div className='forex'></div>
                    </div>
                    <div className='Crypto'>
                        <h1 className='text'>Crypto Currencies</h1>
                        <p></p>
                        <div className='crypto'></div>
                    </div>
                    <div className='Basket'>
                        <h1 className='text'>Basket Indices</h1>
                        <p></p>
                        <div className='basket'></div>
                    </div>
                    <div className='Commodity'>
                        <h1 className='text'>Commodities</h1>
                        <p></p>
                        <div className='commodity'></div>
                    </div>
                    <div className='Stocks'>
                        <h1 className='text'>Stock & Indices</h1>
                        <p></p>
                        <div className='stocks'></div>
                    </div>
                    <div className='synth'>
                        <h1 className='text'>Synthetic Indices</h1>
                        <p></p>
                        <div className='synthetic'></div>
                    </div>
                    <div className='Forex'>
                        <h1 className='text'>Forex</h1>
                        <p></p>
                        <div className='forex'></div>
                    </div>
                    <div className='Crypto'>
                        <h1 className='text'>Crypto Currencies</h1>
                        <p></p>
                        <div className='crypto'></div>
                    </div>
                    <div className='Basket'>
                        <h1 className='text'>Basket Indices</h1>
                        <p></p>
                        <div className='basket'></div>
                    </div>
                    <div className='Commodity'>
                        <h1 className='text'>Commodities</h1>
                        <p></p>
                        <div className='commodity'></div>
                    </div>
                    <div className='Stocks'>
                        <h1 className='text'>Stock & Indices</h1>
                        <p></p>
                        <div className='stocks'></div>
                    </div>
                    <div className='synth'>
                        <h1 className='text'>Synthetic Indices</h1>
                        <p></p>
                        <div className='synthetic'></div>
                    </div>
                    <div className='Forex'>
                        <h1 className='text'>Forex</h1>
                        <p></p>
                        <div className='forex'></div>
                    </div>
                    <div className='Crypto'>
                        <h1 className='text'>Crypto Currencies</h1>
                        <p></p>
                        <div className='crypto'></div>
                    </div>
                    <div className='Basket'>
                        <h1 className='text'>Basket Indices</h1>
                        <p></p>
                        <div className='basket'></div>
                    </div>
                    <div className='Commodity'>
                        <h1 className='text'>Commodities</h1>
                        <p></p>
                        <div className='commodity'></div>
                    </div>
                    <div className='Stocks'>
                        <h1 className='text'>Stock & Indices</h1>
                        <p></p>
                        <div className='stocks'></div>
                    </div>
                    <div className='synth'>
                        <h1 className='text'>Synthetic Indices</h1>
                        <p></p>
                        <div className='synthetic'></div>
                    </div>
                    <div className='Forex'>
                        <h1 className='text'>Forex</h1>
                        <p></p>
                        <div className='forex'></div>
                    </div>
                    <div className='Crypto'>
                        <h1 className='text'>Crypto Currencies</h1>
                        <p></p>
                        <div className='crypto'></div>
                    </div>
                    <div className='Basket'>
                        <h1 className='text'>Basket Indices</h1>
                        <p></p>
                        <div className='basket'></div>
                    </div>
                    <div className='Commodity'>
                        <h1 className='text'>Commodities</h1>
                        <p></p>
                        <div className='commodity'></div>
                    </div>
                    <div className='Stocks'>
                        <h1 className='text'>Stock & Indices</h1>
                        <p></p>
                        <div className='stocks'></div>
                    </div>
                    <div className='synth'>
                        <h1 className='text'>Synthetic Indices</h1>
                        <p></p>
                        <div className='synthetic'></div>
                    </div>
                    <div className='Forex'>
                        <h1 className='text'>Forex</h1>
                        <p></p>
                        <div className='forex'></div>
                    </div>
                    <div className='Crypto'>
                        <h1 className='text'>Crypto Currencies</h1>
                        <p></p>
                        <div className='crypto'></div>
                    </div>
                    <div className='Basket'>
                        <h1 className='text'>Basket Indices</h1>
                        <p></p>
                        <div className='basket'></div>
                    </div>
                    <div className='Commodity'>
                        <h1 className='text'>Commodities</h1>
                        <p></p>
                        <div className='commodity'></div>
                    </div>
                    <div className='Stocks'>
                        <h1 className='text'>Stock & Indices</h1>
                        <p></p>
                        <div className='stocks'></div>
                    </div>
                    <div className='synth'>
                        <h1 className='text'>Synthetic Indices</h1>
                        <p></p>
                        <div className='synthetic'></div>
                    </div>
                    <div className='Forex'>
                        <h1 className='text'>Forex</h1>
                        <p></p>
                        <div className='forex'></div>
                    </div>
                    <div className='Crypto'>
                        <h1 className='text'>Crypto Currencies</h1>
                        <p></p>
                        <div className='crypto'></div>
                    </div>
                    <div className='Basket'>
                        <h1 className='text'>Basket Indices</h1>
                        <p></p>
                        <div className='basket'></div>
                    </div>
                    <div className='Commodity'>
                        <h1 className='text'>Commodities</h1>
                        <p></p>
                        <div className='commodity'></div>
                    </div>
                    <div className='Stocks'>
                        <h1 className='text'>Stock & Indices</h1>
                        <p></p>
                        <div className='stocks'></div>
                    </div>
                    <div className='synth'>
                        <h1 className='text'>Synthetic Indices</h1>
                        <p></p>
                        <div className='synthetic'></div>
                    </div>
                    <div className='Forex'>
                        <h1 className='text'>Forex</h1>
                        <p></p>
                        <div className='forex'></div>
                    </div>
                    <div className='Crypto'>
                        <h1 className='text'>Crypto Currencies</h1>
                        <p></p>
                        <div className='crypto'></div>
                    </div>
                    <div className='Basket'>
                        <h1 className='text'>Basket Indices</h1>
                        <p></p>
                        <div className='basket'></div>
                    </div>
                    <div className='Commodity'>
                        <h1 className='text'>Commodities</h1>
                        <p></p>
                        <div className='commodity'></div>
                    </div>
                    <div className='Stocks'>
                        <h1 className='text'>Stock & Indices</h1>
                        <p></p>
                        <div className='stocks'></div>
                    </div>
                    <div className='synth'>
                        <h1 className='text'>Synthetic Indices</h1>
                        <p></p>
                        <div className='synthetic'></div>
                    </div>
                    <div className='Forex'>
                        <h1 className='text'>Forex</h1>
                        <p></p>
                        <div className='forex'></div>
                    </div>
                    <div className='Crypto'>
                        <h1 className='text'>Crypto Currencies</h1>
                        <p></p>
                        <div className='crypto'></div>
                    </div>
                    <div className='Basket'>
                        <h1 className='text'>Basket Indices</h1>
                        <p></p>
                        <div className='basket'></div>
                    </div>
                    <div className='Commodity'>
                        <h1 className='text'>Commodities</h1>
                        <p></p>
                        <div className='commodity'></div>
                    </div>
                    <div className='Stocks'>
                        <h1 className='text'>Stock & Indices</h1>
                        <p></p>
                        <div className='stocks'></div>
                    </div>
                    <div className='synth'>
                        <h1 className='text'>Synthetic Indices</h1>
                        <p></p>
                        <div className='synthetic'></div>
                    </div>
                    <div className='Forex'>
                        <h1 className='text'>Forex</h1>
                        <p></p>
                        <div className='forex'></div>
                    </div>
                    <div className='Crypto'>
                        <h1 className='text'>Crypto Currencies</h1>
                        <p></p>
                        <div className='crypto'></div>
                    </div>
                    <div className='Basket'>
                        <h1 className='text'>Basket Indices</h1>
                        <p></p>
                        <div className='basket'></div>
                    </div>
                    <div className='Commodity'>
                        <h1 className='text'>Commodities</h1>
                        <p></p>
                        <div className='commodity'></div>
                    </div>
                    <div className='Stocks'>
                        <h1 className='text'>Stock & Indices</h1>
                        <p></p>
                        <div className='stocks'></div>
                    </div>
                    <div className='synth'>
                        <h1 className='text'>Synthetic Indices</h1>
                        <p></p>
                        <div className='synthetic'></div>
                    </div>
                    <div className='Forex'>
                        <h1 className='text'>Forex</h1>
                        <p></p>
                        <div className='forex'></div>
                    </div>
                    <div className='Crypto'>
                        <h1 className='text'>Crypto Currencies</h1>
                        <p></p>
                        <div className='crypto'></div>
                    </div>
                    <div className='Basket'>
                        <h1 className='text'>Basket Indices</h1>
                        <p></p>
                        <div className='basket'></div>
                    </div>
                    <div className='Commodity'>
                        <h1 className='text'>Commodities</h1>
                        <p></p>
                        <div className='commodity'></div>
                    </div>
                    <div className='Stocks'>
                        <h1 className='text'>Stock & Indices</h1>
                        <p></p>
                        <div className='stocks'></div>
                    </div>
                    <div className='synth'>
                        <h1 className='text'>Synthetic Indices</h1>
                        <p></p>
                        <div className='synthetic'></div>
                    </div>
                    <div className='Forex'>
                        <h1 className='text'>Forex</h1>
                        <p></p>
                        <div className='forex'></div>
                    </div>
                    <div className='Crypto'>
                        <h1 className='text'>Crypto Currencies</h1>
                        <p></p>
                        <div className='crypto'></div>
                    </div>
                    <div className='Basket'>
                        <h1 className='text'>Basket Indices</h1>
                        <p></p>
                        <div className='basket'></div>
                    </div>
                    <div className='Commodity'>
                        <h1 className='text'>Commodities</h1>
                        <p></p>
                        <div className='commodity'></div>
                    </div>
                    <div className='Stocks'>
                        <h1 className='text'>Stock & Indices</h1>
                        <p></p>
                        <div className='stocks'></div>
                    </div>
                    <div className='synth'>
                        <h1 className='text'>Synthetic Indices</h1>
                        <p></p>
                        <div className='synthetic'></div>
                    </div>
                    <div className='Forex'>
                        <h1 className='text'>Forex</h1>
                        <p></p>
                        <div className='forex'></div>
                    </div>
                    <div className='Crypto'>
                        <h1 className='text'>Crypto Currencies</h1>
                        <p></p>
                        <div className='crypto'></div>
                    </div>
                    <div className='Basket'>
                        <h1 className='text'>Basket Indices</h1>
                        <p></p>
                        <div className='basket'></div>
                    </div>
                    <div className='Commodity'>
                        <h1 className='text'>Commodities</h1>
                        <p></p>
                        <div className='commodity'></div>
                    </div>
                    <div className='Stocks'>
                        <h1 className='text'>Stock & Indices</h1>
                        <p></p>
                        <div className='stocks'></div>
                    </div>
                    <div className='synth'>
                        <h1 className='text'>Synthetic Indices</h1>
                        <p></p>
                        <div className='synthetic'></div>
                    </div>
                    <div className='Forex'>
                        <h1 className='text'>Forex</h1>
                        <p></p>
                        <div className='forex'></div>
                    </div>
                    <div className='Crypto'>
                        <h1 className='text'>Crypto Currencies</h1>
                        <p></p>
                        <div className='crypto'></div>
                    </div>
                    <div className='Basket'>
                        <h1 className='text'>Basket Indices</h1>
                        <p></p>
                        <div className='basket'></div>
                    </div>
                    <div className='Commodity'>
                        <h1 className='text'>Commodities</h1>
                        <p></p>
                        <div className='commodity'></div>
                    </div>
                    <div className='Stocks'>
                        <h1 className='text'>Stock & Indices</h1>
                        <p></p>
                        <div className='stocks'></div>
                    </div>
                    <div className='synth'>
                        <h1 className='text'>Synthetic Indices</h1>
                        <p></p>
                        <div className='synthetic'></div>
                    </div>
                    <div className='Forex'>
                        <h1 className='text'>Forex</h1>
                        <p></p>
                        <div className='forex'></div>
                    </div>
                    <div className='Crypto'>
                        <h1 className='text'>Crypto Currencies</h1>
                        <p></p>
                        <div className='crypto'></div>
                    </div>
                    <div className='Basket'>
                        <h1 className='text'>Basket Indices</h1>
                        <p></p>
                        <div className='basket'></div>
                    </div>
                    <div className='Commodity'>
                        <h1 className='text'>Commodities</h1>
                        <p></p>
                        <div className='commodity'></div>
                    </div>
                    <div className='Stocks'>
                        <h1 className='text'>Stock & Indices</h1>
                        <p></p>
                        <div className='stocks'></div>
                    </div>
                    <div className='synth'>
                        <h1 className='text'>Synthetic Indices</h1>
                        <p></p>
                        <div className='synthetic'></div>
                    </div>
                    <div className='Forex'>
                        <h1 className='text'>Forex</h1>
                        <p></p>
                        <div className='forex'></div>
                    </div>
                    <div className='Crypto'>
                        <h1 className='text'>Crypto Currencies</h1>
                        <p></p>
                        <div className='crypto'></div>
                    </div>
                    <div className='Basket'>
                        <h1 className='text'>Basket Indices</h1>
                        <p></p>
                        <div className='basket'></div>
                    </div>
                    <div className='Commodity'>
                        <h1 className='text'>Commodities</h1>
                        <p></p>
                        <div className='commodity'></div>
                    </div>
                    <div className='Stocks'>
                        <h1 className='text'>Stock & Indices</h1>
                        <p></p>
                        <div className='stocks'></div>
                    </div>
                    <div className='synth'>
                        <h1 className='text'>Synthetic Indices</h1>
                        <p></p>
                        <div className='synthetic'></div>
                    </div>
                    <div className='Forex'>
                        <h1 className='text'>Forex</h1>
                        <p></p>
                        <div className='forex'></div>
                    </div>
                    <div className='Crypto'>
                        <h1 className='text'>Crypto Currencies</h1>
                        <p></p>
                        <div className='crypto'></div>
                    </div>
                    <div className='Basket'>
                        <h1 className='text'>Basket Indices</h1>
                        <p></p>
                        <div className='basket'></div>
                    </div>
                    <div className='Commodity'>
                        <h1 className='text'>Commodities</h1>
                        <p></p>
                        <div className='commodity'></div>
                    </div>
                    <div className='Stocks'>
                        <h1 className='text'>Stock & Indices</h1>
                        <p></p>
                        <div className='stocks'></div>
                    </div>
                    <div className='synth'>
                        <h1 className='text'>Synthetic Indices</h1>
                        <p></p>
                        <div className='synthetic'></div>
                    </div>
                    <div className='Forex'>
                        <h1 className='text'>Forex</h1>
                        <p></p>
                        <div className='forex'></div>
                    </div>
                    <div className='Crypto'>
                        <h1 className='text'>Crypto Currencies</h1>
                        <p></p>
                        <div className='crypto'></div>
                    </div>
                    <div className='Basket'>
                        <h1 className='text'>Basket Indices</h1>
                        <p></p>
                        <div className='basket'></div>
                    </div>
                    <div className='Commodity'>
                        <h1 className='text'>Commodities</h1>
                        <p></p>
                        <div className='commodity'></div>
                    </div>
                    <div className='Stocks'>
                        <h1 className='text'>Stock & Indices</h1>
                        <p></p>
                        <div className='stocks'></div>
                    </div>
                    <div className='synth'>
                        <h1 className='text'>Synthetic Indices</h1>
                        <p></p>
                        <div className='synthetic'></div>
                    </div>
                    <div className='Forex'>
                        <h1 className='text'>Forex</h1>
                        <p></p>
                        <div className='forex'></div>
                    </div>
                    <div className='Crypto'>
                        <h1 className='text'>Crypto Currencies</h1>
                        <p></p>
                        <div className='crypto'></div>
                    </div>
                    <div className='Basket'>
                        <h1 className='text'>Basket Indices</h1>
                        <p></p>
                        <div className='basket'></div>
                    </div>
                    <div className='Commodity'>
                        <h1 className='text'>Commodities</h1>
                        <p></p>
                        <div className='commodity'></div>
                    </div>
                    <div className='Stocks'>
                        <h1 className='text'>Stock & Indices</h1>
                        <p></p>
                        <div className='stocks'></div>
                    </div>
                    <div className='synth'>
                        <h1 className='text'>Synthetic Indices</h1>
                        <p></p>
                        <div className='synthetic'></div>
                    </div>
                    <div className='Forex'>
                        <h1 className='text'>Forex</h1>
                        <p></p>
                        <div className='forex'></div>
                    </div>
                    <div className='Crypto'>
                        <h1 className='text'>Crypto Currencies</h1>
                        <p></p>
                        <div className='crypto'></div>
                    </div>
                    <div className='Basket'>
                        <h1 className='text'>Basket Indices</h1>
                        <p></p>
                        <div className='basket'></div>
                    </div>
                    <div className='Commodity'>
                        <h1 className='text'>Commodities</h1>
                        <p></p>
                        <div className='commodity'></div>
                    </div>
                    <div className='Stocks'>
                        <h1 className='text'>Stock & Indices</h1>
                        <p></p>
                        <div className='stocks'></div>
                    </div>
                    <div className='synth'>
                        <h1 className='text'>Synthetic Indices</h1>
                        <p></p>
                        <div className='synthetic'></div>
                    </div>
                    <div className='Forex'>
                        <h1 className='text'>Forex</h1>
                        <p></p>
                        <div className='forex'></div>
                    </div>
                    <div className='Crypto'>
                        <h1 className='text'>Crypto Currencies</h1>
                        <p></p>
                        <div className='crypto'></div>
                    </div>
                    <div className='Basket'>
                        <h1 className='text'>Basket Indices</h1>
                        <p></p>
                        <div className='basket'></div>
                    </div>
                    <div className='Commodity'>
                        <h1 className='text'>Commodities</h1>
                        <p></p>
                        <div className='commodity'></div>
                    </div>
                    <div className='Stocks'>
                        <h1 className='text'>Stock & Indices</h1>
                        <p></p>
                        <div className='stocks'></div>
                    </div>
                    <div className='synth'>
                        <h1 className='text'>Synthetic Indices</h1>
                        <p></p>
                        <div className='synthetic'></div>
                    </div>
                    <div className='Forex'>
                        <h1 className='text'>Forex</h1>
                        <p></p>
                        <div className='forex'></div>
                    </div>
                    <div className='Crypto'>
                        <h1 className='text'>Crypto Currencies</h1>
                        <p></p>
                        <div className='crypto'></div>
                    </div>
                    <div className='Basket'>
                        <h1 className='text'>Basket Indices</h1>
                        <p></p>
                        <div className='basket'></div>
                    </div>
                    <div className='Commodity'>
                        <h1 className='text'>Commodities</h1>
                        <p></p>
                        <div className='commodity'></div>
                    </div>
                    <div className='Stocks'>
                        <h1 className='text'>Stock & Indices</h1>
                        <p></p>
                        <div className='stocks'></div>
                    </div>
                    <div className='synth'>
                        <h1 className='text'>Synthetic Indices</h1>
                        <p></p>
                        <div className='synthetic'></div>
                    </div>
                    <div className='Forex'>
                        <h1 className='text'>Forex</h1>
                        <p></p>
                        <div className='forex'></div>
                    </div>
                    <div className='Crypto'>
                        <h1 className='text'>Crypto Currencies</h1>
                        <p></p>
                        <div className='crypto'></div>
                    </div>
                    <div className='Basket'>
                        <h1 className='text'>Basket Indices</h1>
                        <p></p>
                        <div className='basket'></div>
                    </div>
                    <div className='Commodity'>
                        <h1 className='text'>Commodities</h1>
                        <p></p>
                        <div className='commodity'></div>
                    </div>
                    <div className='Stocks'>
                        <h1 className='text'>Stock & Indices</h1>
                        <p></p>
                        <div className='stocks'></div>
                    </div>
                    <div className='synth'>
                        <h1 className='text'>Synthetic Indices</h1>
                        <p></p>
                        <div className='synthetic'></div>
                    </div>
                    <div className='Forex'>
                        <h1 className='text'>Forex</h1>
                        <p></p>
                        <div className='forex'></div>
                    </div>
                    <div className='Crypto'>
                        <h1 className='text'>Crypto Currencies</h1>
                        <p></p>
                        <div className='crypto'></div>
                    </div>
                    <div className='Basket'>
                        <h1 className='text'>Basket Indices</h1>
                        <p></p>
                        <div className='basket'></div>
                    </div>
                    <div className='Commodity'>
                        <h1 className='text'>Commodities</h1>
                        <p></p>
                        <div className='commodity'></div>
                    </div>
                    <div className='Stocks'>
                        <h1 className='text'>Stock & Indices</h1>
                        <p></p>
                        <div className='stocks'></div>
                    </div>
                    <div className='synth'>
                        <h1 className='text'>Synthetic Indices</h1>
                        <p></p>
                        <div className='synthetic'></div>
                    </div>
                    <div className='Forex'>
                        <h1 className='text'>Forex</h1>
                        <p></p>
                        <div className='forex'></div>
                    </div>
                    <div className='Crypto'>
                        <h1 className='text'>Crypto Currencies</h1>
                        <p></p>
                        <div className='crypto'></div>
                    </div>
                    <div className='Basket'>
                        <h1 className='text'>Basket Indices</h1>
                        <p></p>
                        <div className='basket'></div>
                    </div>
                    <div className='Commodity'>
                        <h1 className='text'>Commodities</h1>
                        <p></p>
                        <div className='commodity'></div>
                    </div>
                    <div className='Stocks'>
                        <h1 className='text'>Stock & Indices</h1>
                        <p></p>
                        <div className='stocks'></div>
                    </div>
                    <div className='synth'>
                        <h1 className='text'>Synthetic Indices</h1>
                        <p></p>
                        <div className='synthetic'></div>
                    </div>
                    <div className='Forex'>
                        <h1 className='text'>Forex</h1>
                        <p></p>
                        <div className='forex'></div>
                    </div>
                    <div className='Crypto'>
                        <h1 className='text'>Crypto Currencies</h1>
                        <p></p>
                        <div className='crypto'></div>
                    </div>
                    <div className='Basket'>
                        <h1 className='text'>Basket Indices</h1>
                        <p></p>
                        <div className='basket'></div>
                    </div>
                    <div className='Commodity'>
                        <h1 className='text'>Commodities</h1>
                        <p></p>
                        <div className='commodity'></div>
                    </div>
                    <div className='Stocks'>
                        <h1 className='text'>Stock & Indices</h1>
                        <p></p>
                        <div className='stocks'></div>
                    </div>
                    <div className='synth'>
                        <h1 className='text'>Synthetic Indices</h1>
                        <p></p>
                        <div className='synthetic'></div>
                    </div>
                    <div className='Forex'>
                        <h1 className='text'>Forex</h1>
                        <p></p>
                        <div className='forex'></div>
                    </div>
                    <div className='Crypto'>
                        <h1 className='text'>Crypto Currencies</h1>
                        <p></p>
                        <div className='crypto'></div>
                    </div>
                    <div className='Basket'>
                        <h1 className='text'>Basket Indices</h1>
                        <p></p>
                        <div className='basket'></div>
                    </div>
                    <div className='Commodity'>
                        <h1 className='text'>Commodities</h1>
                        <p></p>
                        <div className='commodity'></div>
                    </div>
                    <div className='Stocks'>
                        <h1 className='text'>Stock & Indices</h1>
                        <p></p>
                        <div className='stocks'></div>
                    </div>
                    <div className='synth'>
                        <h1 className='text'>Synthetic Indices</h1>
                        <p></p>
                        <div className='synthetic'></div>
                    </div>
                    <div className='Forex'>
                        <h1 className='text'>Forex</h1>
                        <p></p>
                        <div className='forex'></div>
                    </div>
                    <div className='Crypto'>
                        <h1 className='text'>Crypto Currencies</h1>
                        <p></p>
                        <div className='crypto'></div>
                    </div>
                    <div className='Basket'>
                        <h1 className='text'>Basket Indices</h1>
                        <p></p>
                        <div className='basket'></div>
                    </div>
                    <div className='Commodity'>
                        <h1 className='text'>Commodities</h1>
                        <p></p>
                        <div className='commodity'></div>
                    </div>
                    <div className='Stocks'>
                        <h1 className='text'>Stock & Indices</h1>
                        <p></p>
                        <div className='stocks'></div>
                    </div>
                    <div className='synth'>
                        <h1 className='text'>Synthetic Indices</h1>
                        <p></p>
                        <div className='synthetic'></div>
                    </div>
                    <div className='Forex'>
                        <h1 className='text'>Forex</h1>
                        <p></p>
                        <div className='forex'></div>
                    </div>
                    <div className='Crypto'>
                        <h1 className='text'>Crypto Currencies</h1>
                        <p></p>
                        <div className='crypto'></div>
                    </div>
                    <div className='Basket'>
                        <h1 className='text'>Basket Indices</h1>
                        <p></p>
                        <div className='basket'></div>
                    </div>
                    <div className='Commodity'>
                        <h1 className='text'>Commodities</h1>
                        <p></p>
                        <div className='commodity'></div>
                    </div>
                    <div className='Stocks'>
                        <h1 className='text'>Stock & Indices</h1>
                        <p></p>
                        <div className='stocks'></div>
                    </div>
                    <div className='synth'>
                        <h1 className='text'>Synthetic Indices</h1>
                        <p></p>
                        <div className='synthetic'></div>
                    </div>
                    <div className='Forex'>
                        <h1 className='text'>Forex</h1>
                        <p></p>
                        <div className='forex'></div>
                    </div>
                    <div className='Crypto'>
                        <h1 className='text'>Crypto Currencies</h1>
                        <p></p>
                        <div className='crypto'></div>
                    </div>
                    <div className='Basket'>
                        <h1 className='text'>Basket Indices</h1>
                        <p></p>
                        <div className='basket'></div>
                    </div>
                    <div className='Commodity'>
                        <h1 className='text'>Commodities</h1>
                        <p></p>
                        <div className='commodity'></div>
                    </div>
                    <div className='Stocks'>
                        <h1 className='text'>Stock & Indices</h1>
                        <p></p>
                        <div className='stocks'></div>
                    </div>
                    <div className='synth'>
                        <h1 className='text'>Synthetic Indices</h1>
                        <p></p>
                        <div className='synthetic'></div>
                    </div>
                    <div className='Forex'>
                        <h1 className='text'>Forex</h1>
                        <p></p>
                        <div className='forex'></div>
                    </div>
                    <div className='Crypto'>
                        <h1 className='text'>Crypto Currencies</h1>
                        <p></p>
                        <div className='crypto'></div>
                    </div>
                    <div className='Basket'>
                        <h1 className='text'>Basket Indices</h1>
                        <p></p>
                        <div className='basket'></div>
                    </div>
                    <div className='Commodity'>
                        <h1 className='text'>Commodities</h1>
                        <p></p>
                        <div className='commodity'></div>
                    </div>
                    <div className='Stocks'>
                        <h1 className='text'>Stock & Indices</h1>
                        <p></p>
                        <div className='stocks'></div>
                    </div>
                    <div className='synth'>
                        <h1 className='text'>Synthetic Indices</h1>
                        <p></p>
                        <div className='synthetic'></div>
                    </div>
                    <div className='Forex'>
                        <h1 className='text'>Forex</h1>
                        <p></p>
                        <div className='forex'></div>
                    </div>
                    <div className='Crypto'>
                        <h1 className='text'>Crypto Currencies</h1>
                        <p></p>
                        <div className='crypto'></div>
                    </div>
                    <div className='Basket'>
                        <h1 className='text'>Basket Indices</h1>
                        <p></p>
                        <div className='basket'></div>
                    </div>
                    <div className='Commodity'>
                        <h1 className='text'>Commodities</h1>
                        <p></p>
                        <div className='commodity'></div>
                    </div>
                    <div className='Stocks'>
                        <h1 className='text'>Stock & Indices</h1>
                        <p></p>
                        <div className='stocks'></div>
                    </div>
                    <div className='synth'>
                        <h1 className='text'>Synthetic Indices</h1>
                        <p></p>
                        <div className='synthetic'></div>
                    </div>
                    <div className='Forex'>
                        <h1 className='text'>Forex</h1>
                        <p></p>
                        <div className='forex'></div>
                    </div>
                    <div className='Crypto'>
                        <h1 className='text'>Crypto Currencies</h1>
                        <p></p>
                        <div className='crypto'></div>
                    </div>
                    <div className='Basket'>
                        <h1 className='text'>Basket Indices</h1>
                        <p></p>
                        <div className='basket'></div>
                    </div>
                    <div className='Commodity'>
                        <h1 className='text'>Commodities</h1>
                        <p></p>
                        <div className='commodity'></div>
                    </div>
                    <div className='Stocks'>
                        <h1 className='text'>Stock & Indices</h1>
                        <p></p>
                        <div className='stocks'></div>
                    </div>
                    <div className='synth'>
                        <h1 className='text'>Synthetic Indices</h1>
                        <p></p>
                        <div className='synthetic'></div>
                    </div>
                    <div className='Forex'>
                        <h1 className='text'>Forex</h1>
                        <p></p>
                        <div className='forex'></div>
                    </div>
                    <div className='Crypto'>
                        <h1 className='text'>Crypto Currencies</h1>
                        <p></p>
                        <div className='crypto'></div>
                    </div>
                    <div className='Basket'>
                        <h1 className='text'>Basket Indices</h1>
                        <p></p>
                        <div className='basket'></div>
                    </div>
                    <div className='Commodity'>
                        <h1 className='text'>Commodities</h1>
                        <p></p>
                        <div className='commodity'></div>
                    </div>
                    <div className='Stocks'>
                        <h1 className='text'>Stock & Indices</h1>
                        <p></p>
                        <div className='stocks'></div>
                    </div>
                    <div className='synth'>
                        <h1 className='text'>Synthetic Indices</h1>
                        <p></p>
                        <div className='synthetic'></div>
                    </div>
                    <div className='Forex'>
                        <h1 className='text'>Forex</h1>
                        <p></p>
                        <div className='forex'></div>
                    </div>
                    <div className='Crypto'>
                        <h1 className='text'>Crypto Currencies</h1>
                        <p></p>
                        <div className='crypto'></div>
                    </div>
                    <div className='Basket'>
                        <h1 className='text'>Basket Indices</h1>
                        <p></p>
                        <div className='basket'></div>
                    </div>
                    <div className='Commodity'>
                        <h1 className='text'>Commodities</h1>
                        <p></p>
                        <div className='commodity'></div>
                    </div>
                    <div className='Stocks'>
                        <h1 className='text'>Stock & Indices</h1>
                        <p></p>
                        <div className='stocks'></div>
                    </div>
                    <div className='synth'>
                        <h1 className='text'>Synthetic Indices</h1>
                        <p></p>
                        <div className='synthetic'></div>
                    </div>
                    <div className='Forex'>
                        <h1 className='text'>Forex</h1>
                        <p></p>
                        <div className='forex'></div>
                    </div>
                    <div className='Crypto'>
                        <h1 className='text'>Crypto Currencies</h1>
                        <p></p>
                        <div className='crypto'></div>
                    </div>
                    <div className='Basket'>
                        <h1 className='text'>Basket Indices</h1>
                        <p></p>
                        <div className='basket'></div>
                    </div>
                    <div className='Commodity'>
                        <h1 className='text'>Commodities</h1>
                        <p></p>
                        <div className='commodity'></div>
                    </div>
                    <div className='Stocks'>
                        <h1 className='text'>Stock & Indices</h1>
                        <p></p>
                        <div className='stocks'></div>
                    </div>
                    <div className='synth'>
                        <h1 className='text'>Synthetic Indices</h1>
                        <p></p>
                        <div className='synthetic'></div>
                    </div>
                    <div className='Forex'>
                        <h1 className='text'>Forex</h1>
                        <p></p>
                        <div className='forex'></div>
                    </div>
                    <div className='Crypto'>
                        <h1 className='text'>Crypto Currencies</h1>
                        <p></p>
                        <div className='crypto'></div>
                    </div>
                    <div className='Basket'>
                        <h1 className='text'>Basket Indices</h1>
                        <p></p>
                        <div className='basket'></div>
                    </div>
                    <div className='Commodity'>
                        <h1 className='text'>Commodities</h1>
                        <p></p>
                        <div className='commodity'></div>
                    </div>
                    <div className='Stocks'>
                        <h1 className='text'>Stock & Indices</h1>
                        <p></p>
                        <div className='stocks'></div>
                    </div>
                    <div className='synth'>
                        <h1 className='text'>Synthetic Indices</h1>
                        <p></p>
                        <div className='synthetic'></div>
                    </div>
                    <div className='Forex'>
                        <h1 className='text'>Forex</h1>
                        <p></p>
                        <div className='forex'></div>
                    </div>
                    <div className='Crypto'>
                        <h1 className='text'>Crypto Currencies</h1>
                        <p></p>
                        <div className='crypto'></div>
                    </div>
                    <div className='Basket'>
                        <h1 className='text'>Basket Indices</h1>
                        <p></p>
                        <div className='basket'></div>
                    </div>
                    <div className='Commodity'>
                        <h1 className='text'>Commodities</h1>
                        <p></p>
                        <div className='commodity'></div>
                    </div>
                    <div className='Stocks'>
                        <h1 className='text'>Stock & Indices</h1>
                        <p></p>
                        <div className='stocks'></div>
                    </div>
                    <div className='synth'>
                        <h1 className='text'>Synthetic Indices</h1>
                        <p></p>
                        <div className='synthetic'></div>
                    </div>
                    <div className='Forex'>
                        <h1 className='text'>Forex</h1>
                        <p></p>
                        <div className='forex'></div>
                    </div>
                    <div className='Crypto'>
                        <h1 className='text'>Crypto Currencies</h1>
                        <p></p>
                        <div className='crypto'></div>
                    </div>
                    <div className='Basket'>
                        <h1 className='text'>Basket Indices</h1>
                        <p></p>
                        <div className='basket'></div>
                    </div>
                    <div className='Commodity'>
                        <h1 className='text'>Commodities</h1>
                        <p></p>
                        <div className='commodity'></div>
                    </div>
                    <div className='Stocks'>
                        <h1 className='text'>Stock & Indices</h1>
                        <p></p>
                        <div className='stocks'></div>
                    </div>
                    <div className='synth'>
                        <h1 className='text'>Synthetic Indices</h1>
                        <p></p>
                        <div className='synthetic'></div>
                    </div>
                    <div className='Forex'>
                        <h1 className='text'>Forex</h1>
                        <p></p>
                        <div className='forex'></div>
                    </div>
                    <div className='Crypto'>
                        <h1 className='text'>Crypto Currencies</h1>
                        <p></p>
                        <div className='crypto'></div>
                    </div>
                    <div className='Basket'>
                        <h1 className='text'>Basket Indices</h1>
                        <p></p>
                        <div className='basket'></div>
                    </div>
                    <div className='Commodity'>
                        <h1 className='text'>Commodities</h1>
                        <p></p>
                        <div className='commodity'></div>
                    </div>
                    <div className='Stocks'>
                        <h1 className='text'>Stock & Indices</h1>
                        <p></p>
                        <div className='stocks'></div>
                    </div>
                    <div className='synth'>
                        <h1 className='text'>Synthetic Indices</h1>
                        <p></p>
                        <div className='synthetic'></div>
                    </div>
                    <div className='Forex'>
                        <h1 className='text'>Forex</h1>
                        <p></p>
                        <div className='forex'></div>
                    </div>
                    <div className='Crypto'>
                        <h1 className='text'>Crypto Currencies</h1>
                        <p></p>
                        <div className='crypto'></div>
                    </div>
                    <div className='Basket'>
                        <h1 className='text'>Basket Indices</h1>
                        <p></p>
                        <div className='basket'></div>
                    </div>
                    <div className='Commodity'>
                        <h1 className='text'>Commodities</h1>
                        <p></p>
                        <div className='commodity'></div>
                    </div>
                    <div className='Stocks'>
                        <h1 className='text'>Stock & Indices</h1>
                        <p></p>
                        <div className='stocks'></div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Market