import './Circles.css';

import React from 'react'

function Circles(props) {
  return (
    <div className='Circles'>
      
      <div className='selected' onClick={()=>props.selectedCircle1()}>1</div>
      <div onClick={()=>props.selectedCircle2()}>2</div>
      <div onClick={()=>props.selectedCircle3()}>3</div>
      <div onClick={()=>props.selectedCircle4()}>4</div>
      

    </div>
   
  )
}

export default Circles