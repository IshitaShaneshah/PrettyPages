import React from 'react'
import "../CSS/Temp.css"
import openbook from "../photos/openbook.jpg"
const Temp = () => {
  
  return (
    <div>
      <div className='book'>
        <div className='page'>
            <div >
              <img src={openbook}/>
            </div>
        </div>
         <div className='page-2'>
            <div className='page2-text'>
              
            </div>
        </div>
      </div>
    </div>
  )
}

export default Temp