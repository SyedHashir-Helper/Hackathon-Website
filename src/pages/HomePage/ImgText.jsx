import React from 'react'
import code from "../../images/full-stack.png"
import "../../styles/ImgText.css"
const ImgText = ({img, text, row}) => {

    const rowStyle = {}
  return (
    <div className='imgtext-box' style={{
        flexDirection: `${row ? 'row' : 'row-reverse'}`,
    }}>
        <div className='imgtext-img' 

            style={{
                background: `${row ? 'linear-gradient(33deg, rgb(17, 0, 168) 33%, rgb(76, 0, 252) 50%, rgba(76, 0, 252,1) 50%)' : ""}`
            }}
        >
            <img src={img} width={300} />
        </div>
        <div className='imgtext-text'>
            {text}
        </div>
    </div>
  )
}

export default ImgText
