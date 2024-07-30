import React from 'react'
import "../../styles/Subscription.css"

const Subscription = () => {
  return (
    <div className='subscription'>
        
        <input type='text' placeholder='Email' className='' />
        <button type='submit'>
            <span class="material-symbols-outlined">
                notifications
            </span>
            
            <span>Subscribe</span>
        </button>
    </div>
  )
}

export default Subscription
