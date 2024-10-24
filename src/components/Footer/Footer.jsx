import React from 'react'
import './Footer.css'
import EmailBox from '../EmailBox/EmailBox'
import { Link } from "react-scroll"

const Footer = () => {
  return (
    <div className='f-wrapper'>
      <div className="container">
        <div className="f-container">
            <span className='title'>subscribe to our newsletter!</span>
            <EmailBox/>

            <hr />
            <div className='f-menu'>
                <p className='mx-auto text-center px-2'>H.K Business Network © 2024 All Rights Reserved Design By SCIT FORTE</p>
            </div>

        </div>
      </div>
    </div>
  )
}

export default Footer