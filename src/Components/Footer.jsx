import React from 'react'
import logo from "../assets/velo.png"
import "../styles/Footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faFacebook, faTwitter, faInstagram, faDev } from '@fortawesome/free-brands-svg-icons';
import { faUserTie, faHandshake, faDollarSign, faHandsHelping, faGavel, faHome, faCalendarAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {

    const options = [
        {
            name: "Home",
            link: "#",
            icon: <FontAwesomeIcon icon={faHome} />
        },
        {
            name: "Schedule",
            link: "#",
            icon: <FontAwesomeIcon icon={faCalendarAlt} />
        },
        {
            name: "Sponsor",
            link: "#",
            icon: <FontAwesomeIcon icon={faDollarSign} />
        },
        {
            name: "Partner",
            link: "#",
            icon: <FontAwesomeIcon icon={faHandshake} />
        },
        {
            name: "Contact",
            link: "#",
            icon: <FontAwesomeIcon icon={faEnvelope} />
        },
    ]

    const become = [
        {
            name: "Mentor",
            link: "#",
            icon: <FontAwesomeIcon icon={faUserTie} />
        },
        {
            name: "Partner",
            link: "#",
            icon: <FontAwesomeIcon icon={faHandshake} />
        },
        {
            name: "Sponsor",
            link: "#",
            icon: <FontAwesomeIcon icon={faDollarSign} />
        },
        {
            name: "Volunteer",
            link: "#",
            icon: <FontAwesomeIcon icon={faHandsHelping} />
        },
        {
            name: "Judge",
            link: "#",
            icon: <FontAwesomeIcon icon={faGavel} />
        },
    ]

    const socials = [
        {
            name: "LinkedIn",
            link: "#",
            icon: <FontAwesomeIcon icon={faLinkedin} />
        },
        {
            name: "Instagram",
            link: "#",
            icon: <FontAwesomeIcon icon={faInstagram} />
        },
        {
            name: "Facebook",
            link: "#",
            icon: <FontAwesomeIcon icon={faFacebook} />
        },
        {
            name: "Dev Post",
            link: "#",
            icon: <FontAwesomeIcon icon={faDev} />
        },
        {
            name: "X (Twitter)",
            link: "#",
            icon: <FontAwesomeIcon icon={faTwitter} />
        },
    ]
  return (
    <section className='footer'>
        <div className='footer-logo'>
            <img src={logo} width={200} />
        </div>
        <div className='footer-options'>
            {
                options.map((element, index)=>{
                    return (
                        <a key={
                            index
                        } href={element.link}><span>{element.icon}</span>{element.name}</a>
                    )
                })
            }
        </div>
        <div className='footer-options'>
            {
                become.map((element, index)=>{
                    return (
                        <a key={
                            index
                        } href={element.link}><span>{element.icon}</span>Become a {element.name}</a>
                    )
                })
            }
        </div>
        <div className='footer-options'>
            {
                socials.map((element, index)=>{
                    return (
                        <a key={
                            index
                        } href={element.link}><span>{element.icon}</span>{element.name}</a>
                    )
                })
            }
        </div>
        <div>
            <button>Register</button>
        </div>
    </section>
  )
}

export default Footer
