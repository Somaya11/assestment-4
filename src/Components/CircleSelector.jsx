import './CircleSelector.css';

import React from 'react'

function CircleSelector(props) {
  return (
    <div className='CircleSelector'>
      <button className='selected' onClick={()=>props.selectedCircle1()}>CIRCLE SELECTED 1</button>
      <button onClick={()=>props.selectedCircle2()}>CIRCLE SELECTED 2</button>
      <button onClick={()=>props.selectedCircle3()}>CIRCLE SELECTED 3</button>
      <button onClick={()=>props.selectedCircle4()}>CIRCLE SELECTED 4</button>
    </div>
  )
}

export default CircleSelector