"use client"

import React, { useState } from 'react'

import { faSignal, faWifi, faBatteryFull } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faInstagram, faTwitter, faFacebookF } from "@fortawesome/free-brands-svg-icons";





export default function page() {

  const [temp, setTemp] = useState(1)




  const Temp1 = () => {
    return <>
      <div className="c1">
        <div className="c2"></div>


        <div className="c8">
          <span>9:30</span>

          <span >
            <FontAwesomeIcon className="c9cc" icon={faSignal} />
            <FontAwesomeIcon className="c9cc" icon={faWifi} />
            <FontAwesomeIcon className="c9cc" icon={faBatteryFull} />
          </span>
        </div>

        <div className="c3">
          Welcome Back
        </div>
        <div className="c6">
          <div onClick={() => {
            setTemp(2)
          }} className="c4">sign in</div>
          <div onClick={() => {
            setTemp(3)
          }} className="c4 c5">sign up</div>
        </div>

      </div>
    </>
  }

  const Temp2 = () => {
    return <>
      <div className="c1">
        <div className="c2"></div>
        <div className="c8">
          <span>9:30</span>

          <span >
            <FontAwesomeIcon className="c9cc" icon={faSignal} />
            <FontAwesomeIcon className="c9cc" icon={faWifi} />
            <FontAwesomeIcon className="c9cc" icon={faBatteryFull} />
          </span>
        </div>
        <div className="c3">
          Hello Sign In
        </div>
        <div className="c6">

          <div className="c4 c5">sign in</div>

          <div className='c7'>
            D'not have a account?<span onClick={() => {
              setTemp(3)
            }}>sign up</span>
          </div>
        </div>

      </div>
    </>
  }

  const Temp3 = () => {
    return <>
      <div className="c1">
        <div className="c2"></div>
        <div className="c8">
          <span>9:30</span>

          <span >
            <FontAwesomeIcon className="c9cc" icon={faSignal} />
            <FontAwesomeIcon className="c9cc" icon={faWifi} />
            <FontAwesomeIcon className="c9cc" icon={faBatteryFull} />
          </span>
        </div>
        <div className="c3">
          Create Your New Account
        </div>
        <div className="c6">

          <div className="c4 c5">sign up</div>

          <div className='c7'>
            D'not have a account?<span onClick={() => {
              setTemp(2)
            }}>sign in</span>
          </div>
        </div>

      </div>
    </>
  }

  return (
    <>




      <div className="sec1">
        {(temp == 1) ? <Temp1 /> : (temp == 2) ? <Temp2 /> : <Temp3 />}
      </div>






    </>
  )
}
