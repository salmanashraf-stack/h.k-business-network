"use client"

import React, { useState } from 'react'
import './Navbar.css'
import {BiMenuAltRight} from 'react-icons/bi'
import {RxCross2} from 'react-icons/rx'
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { Link } from 'react-scroll'

const Navbar = () => {
    const [ mobileMenuOpened, setMobileMenuOpened ] = useState(false)
    const [navStyle, setNavStyle] = useState("")
    const { scrollYProgress } = useScroll()

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        if (latest > 0.19) {
            setNavStyle("sticky")
        } else {
            setNavStyle("");
        }
    })
  return (
      <div className={`n-wrapper ${navStyle}`}>

        {/* desktop version */}
        <div className="container">
            <div className="n-container">
                {/* left side */}
                <div className="n-logo">
                    <span>H.K Business Network</span>
                </div>

                {/* right side */}
                <div className="n-right">
                    <div className="n-menu">
                        <Link to='od-wrapper' spy={true} smooth={true} >
                            <span>About</span>
                        </Link>
                        <Link to='hiw-wrapper' spy smooth offset={100}>
                            <span>Why H.K Business?</span>
                        </Link>
                        <Link to='wwi-wrapper' spy smooth>
                            <span>H.K Infrastructure</span>
                        </Link>
                        <Link to='t-wrapper' spy smooth offset={100}>
                            <span>Testimonials</span>
                        </Link>
                    </div>
                        <Link to='wwd-wrapper' spy smooth offset={100}>
                            <div className='fund-button cursor-pointer'>Become a Member</div>
                        </Link>
                    <Link to='f-wrapper' spy smooth offset={100}>
                        <div className="fund-button cursor-pointer">Subscribe</div>
                    </Link>
                </div>
            </div>
        </div>


        {/* mobile/tab version */}
        <div className="nm-container">
            {/* logo */}
            <span>H.K BUSINESS NETWORK</span>

            {/* menu icon */}
            {!mobileMenuOpened ? <BiMenuAltRight size={30}
            onClick={()=>setMobileMenuOpened(true)} style={{cursor: "pointer"}}/> : <RxCross2 size={30} style={{cursor: "pointer"}} onClick={() =>setMobileMenuOpened(false)}/>}


            {/* mobile menu */}
            <div className="nm-menu" style={{transform: mobileMenuOpened && "translateX(0%)"}}>
                <Link 
                to='od-wrapper' 
                spy={true} 
                smooth={true} 
                onClick={() => setMobileMenuOpened(false)}>
                    <span>About</span>
                </Link>
                <Link onClick={() => setMobileMenuOpened(false)} to='hiw-wrapper' spy smooth offset={100}>
                    <span>Why H.K Business?</span>
                </Link>
                <Link onClick={() => setMobileMenuOpened(false)} to='wwi-wrapper' spy smooth>
                    <span>H.K Infrastructure</span>
                </Link>
                <Link onClick={() => setMobileMenuOpened(false)} to='t-wrapper' spy smooth offset={100}>
                    <span>Testimonials</span>
                </Link>

                <Link onClick={() => setMobileMenuOpened(false)} to='wwd-wrapper' spy smooth offset={100}>
                    <div className="m-funded-button">Become a member</div>
                </Link>
                <Link onClick={() => setMobileMenuOpened(false)} to='f-wrapper' spy smooth offset={100}>
                    <div className="m-funded-button">Subscribe</div>
                </Link>
            </div>
        </div>
      </div>
  )
}

export default Navbar