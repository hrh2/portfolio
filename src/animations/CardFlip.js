import React from 'react'
import './CardFlip.css'
import { FiFacebook } from 'react-icons/fi'
export default function CardFlip() {
  return (
    <div className='cardBox'>
        <div className='card'>
            <div className='card-front'>
                Facebook
            </div>
            <div className='card-back'>
                <FiFacebook size={"2em"} className='facebook'/>
            </div>
        </div>
    </div>
  )
}
