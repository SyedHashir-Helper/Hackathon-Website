import React from 'react'
import {Row,Col} from 'antd'
import logo from "../assets/velo.png"
import "../styles/Header.css"
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <Row className='header-head'>
        <Col offset={1} span={4}>
            <Link to="/"><img width={200} src={logo} /></Link>
        </Col>
    </Row>
  )
}

export default Header
