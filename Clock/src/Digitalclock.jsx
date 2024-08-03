import React, { useEffect, useState } from 'react'

const Digitalclock = () => {
    const [time ,setTime]=useState(new Date());

    useEffect(()=>{
        const IntervalId =setInterval(()=>{
            setTime(new Date());
        },1000);
        return ()=>{
            clearInterval(IntervalId)
        }
    } ,[]);
  return (
    <>
    <div className="clock-container">
        <div className="clock">
            <span>{time.toLocaleTimeString()}</span> 
        </div>
    </div>
    </>
  )
}

export default Digitalclock