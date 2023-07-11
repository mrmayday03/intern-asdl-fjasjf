import React from 'react'
import './DashBoardNav.css'
import downChevron from '../../assets/icons/scroll arrow.svg';


const DashBoardNav = () => {
  return (
    <>
        <div className="nav">
        
            <div className="scan-detail">
                <p>Last Scan 07.11.2027</p>
                <p>05:34 PM</p>
                <p>Store ID -7943</p>
               
            </div>
            <span id='line'></span>
            <div className="user">
                <p className='role'>Store Supervisor</p>
                <img className='downChevron' src={downChevron} alt="" />
                <p>John Doe</p>
                <span id="round"> </span>
            </div>

            

        </div>
    

    </>
  )
}

export default DashBoardNav