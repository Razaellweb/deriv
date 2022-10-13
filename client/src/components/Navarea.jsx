import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import { FaBars } from 'react-icons/fa';

const Navarea = ({setDisplaybar, setOpac}) => {

  const [scroll1, setScroll1] = useState("block")
  const [scroll2, setScroll2] = useState("none")
  const [scroll3, setScroll3] = useState("none")
  const [scroll4, setScroll4] = useState("none")
  var [counter, setCounter] = useState(1);
  var [counterr, setCounterr] = useState(1);

  const [shpa, setShpa] = useState(-5)
  const [shpb, setShpb] = useState(0)
  const [shpc, setShpc] = useState(0)
  const [shpd, setShpd] = useState(0)
  const [shpe, setShpe] = useState(0)
  const [shpf, setShpf] = useState(0)



  const [nav, setNav] = useState("none")


  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);


  useEffect(() => {
    const timer = setTimeout(() => {
      if (counter == 1) {
        setScroll1("none")
        setScroll2("block")
        setScroll3("none")
        setScroll4("none")
        counter++;
        setCounter(counter)
      }
      else if (counter == 2) {
        setScroll1("none")
        setScroll2("none")
        setScroll3("block")
        setScroll4("none")
        counter++;
        setCounter(counter)
      }
      else if (counter == 3) {
        setScroll1("none")
        setScroll2("none")
        setScroll3("none")
        setScroll4("block")
        counter++;
        setCounter(counter)
      }
      else {
        setScroll1("block")
        setScroll2("none")
        setScroll3("none")
        setScroll4("none")
        setCounter(1)
      }
    }, 3000);

    return () => clearTimeout(timer);
  })

  useEffect(() => {
    const timer = setTimeout(() => {
      if(shpa > -115){
        var newm = (shpa * 1) + (-23)
        setShpa(newm)
      }
     else {
      setShpa(-5)
     }
    }, 3000);

    return () => clearTimeout(timer);
  })


  window.addEventListener('scroll', () => {
    var scrolled = window.scrollY;

    if (scrolled === 0) {
      setNav("none")
    }
    else {
      setNav("block")
    }
  })

  const open = () => {
    setDisplaybar("block")
    setOpac("0.8")
  }
  const close = () => {
    setDisplaybar("none")
    setOpac("1")
}

  return (
    <div className='navarea'>
      <div className='navbar'>
        <FaBars className='bars' onClick={open}/>
        <div className='full' onClick={close}>
          <div className='logo'>
            <div className='logoimg'></div>
            <div><h1><span className='slash'>/</span></h1></div>
            <div><h1 className='logotext'>GET Trading</h1></div>
          </div>
          <div className='links'>
            <p>Trade</p>
            <p>Markets</p>
            <p>About Us</p>
            <p>Get Resources</p>
          </div>
        </div>
        <div><button className='btn'>Log in</button></div>
      </div>
      <div className='navbarb' style={{ display: nav }}>
        <div className='full2'>
          <div className='logo'>
            <div className='logoimg'></div>
            <div><h1><span className='slash'>/</span></h1></div>
            <div><h1 className='logotext'>GET Trading</h1></div>
          </div>
          <div className='links'>
            <p>Trade</p>
            <p>Markets</p>
            <p>About Us</p>
            <p>Get Resources</p>
          </div>
          <div><button className='btn'>Log in</button></div>
          <div className='btngg'><button className='btn4'>Create free demo account</button></div>
        </div>
      </div>
      <div className='intro' onClick={close}>
        <div className='headers'>
          <div className='texts'>
            <h1>Simple.</h1>
            <h1>Flexible.</h1>
            <h1>Reliable.</h1>
          </div>
          <div className='para'>
            <p>Trade forex, synthetics, stocks & indices, cryptocurrencies, basket indices, and commodities.</p>
          </div>
          <div className='piece'>
            <div className='letters'>
              <div className='piec' style={{ marginTop: shpa }}>
                <h1 className='shpa'>Sharp Prices</h1>
                <h1 className='shpb'>20+ years of experience</h1>
                <h1 className='shpc'>24/7 trading</h1>
                <h1 className='shpd'>Tight Spreads</h1>
                <h1 className='shpe'>100+ tradeable assets</h1>
                <h1 className='shpf'>Deriv Go</h1>
              </div>
            </div>
            <button className='btn2'>Create free demo account</button>
          </div>
        </div>
        <div className='navimg'>
          <div className='img' style={{ display: scroll1 }}></div>
          <div className='imgrf' style={{ display: scroll2 }}></div>
          <div className='imgrg' style={{ display: scroll3 }}></div>
          <div className='imgrh' style={{ display: scroll4 }}></div>
        </div>
      </div>
    </div>
  )
}

export default Navarea;