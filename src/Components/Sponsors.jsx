import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/Sponsor.css"




const Sponsors = ({title, sponsors}) => {


    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", background: "black", borderRadius: "50%" }}
            onClick={onClick}
          />
        );
      }
      
      function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", background: "black", borderRadius: "50%"}}
            onClick={onClick}
          />
        );
      }



    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };

  return (
    <section className='slider-sec' id={title}>
        <h2>
            {title}
        </h2>
        <div className='slider'>

        <Slider {...settings}>
            {
                sponsors.map((element, index)=>{
                    return (
                        <div key={index} className='slider-item'>
                            <img src={element} style={{
                                width: "100%",
                                height: "100%",
                            }} />
                        </div>
                    )
                })
            }
            
      </Slider>
        </div>
    </section>
  )
}

export default Sponsors
