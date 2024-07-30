import React from 'react'
import img1 from "../../images/full-stack.png"
import img2 from "../../images/img2.png"
import img3 from "../../images/img3.png"
import ImgText from './ImgText'
const SideBySide = () => {
    const items = [
        {
            img: img1,
            text: "Code. Create. Conquer."
        },
        {
            img: img2,
            text: "Think Big. Hack Hard."
        },
        {
            img: img3,
            text: "From Code to Creation"
        },

    ]
  return (
    <section>
        {
            items.map((element, index)=>{
                return (
                    <ImgText 
                        img={element.img}
                        text={element.text}
                        row={index%2==0}
                    />
                )
            })
        }
    </section>
  )
}

export default SideBySide
