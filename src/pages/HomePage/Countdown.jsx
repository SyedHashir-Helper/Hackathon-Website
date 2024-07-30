import React, {useState, useEffect} from 'react'
import {Row, Col} from 'antd'
import "../../styles/Countdown.css"

const Countdown = ({md}) => {

    const [seconds, setseconds] = useState(0)
    const [minutes, setminutes] = useState(0)
    const [hours, sethours] = useState(0)
    const [days, setdays] = useState(0)

    const deadline = "June 30, 2025"
    
    const getTime = ()=>{
        const time = Date.parse(deadline) - Date.now()
        setdays(Math.floor(time/(1000*60*60*24)))
        sethours(Math.floor(time/(1000*60*60)%24))
        setminutes(Math.floor(time/(1000*60)%60))
        setseconds(Math.floor((time/1000) % 60))
    }

    useEffect(() => {
      const interval = setInterval(()=> getTime(), 1000)
    
      return () => {
        clearInterval(interval)
      }
    }, [])
    
  return (
    <Row justify={'center'} align={'middle'} gutter={10} className='countdown-section'>
        <Col xs={5} md={md} className='countdown-col' >
            <div className='countdown-count'>
                <h1>{days < 10 ? "0"+ days: days}</h1>
            </div>
            <div className='countdown-item'>
                Days
            </div>
        </Col>

        <Col className='colons'>
            :
        </Col>
        
        <Col xs={5} md={md} className='countdown-col'>
            <div className='countdown-count'>
                <h1>{hours < 10 ? "0"+ hours: hours}</h1>
            </div>
            <div className='countdown-item'>
                Hours
            </div>
        </Col>

        <Col className='colons'>
            :
        </Col>
        
        <Col xs={5} md={md} className='countdown-col'>
            <div className='countdown-count'>
                <h1>{minutes < 10 ? "0"+ minutes: minutes}</h1>
            </div>
            <div className='countdown-item'>
                Minutes
            </div>
        </Col>

        <Col className='colons'>
            :
        </Col>
        
        <Col xs={5} md={md} className='countdown-col'>
            <div className='countdown-count'>
                <h1>{seconds < 10 ? "0"+ seconds: seconds}</h1>
            </div>
            <div className='countdown-item'>
                Seconds
            </div>
        </Col>
    </Row>
  )
}

export default Countdown
