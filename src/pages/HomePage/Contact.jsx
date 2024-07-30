import React from 'react'
import "../../styles/Contact.css"

const Contact = () => {
  return (
    <section id='contact' className='contact-section'>
        <h2>Contact us</h2>

        <form>
            <div className='contact-item'>
                <span class="material-symbols-outlined contact-icon">
                    badge
                </span>
                <input className='contact-input' type="text" placeholder='Name'/>
            </div>
            <div className='contact-item'>
                <span class="material-symbols-outlined contact-icon">
                    alternate_email
                </span>
                <input className='contact-input' type="text" placeholder='Email'/>
            </div>
            <div className='contact-item'>
                <span class="material-symbols-outlined contact-icon">
                    call
                </span>
                <input className='contact-input' type="text" placeholder='Contact'/>
            </div>
            <div className='contact-item'>
                <textarea className='contact-input' type="text" placeholder='Leave us a message !'/>
            </div>
            <button>
                <span class="material-symbols-outlined">
                    send
                </span>
            </button>
        </form>
    </section>
  )
}

export default Contact
