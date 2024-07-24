import React from 'react'
import Counter from './Counter'
import "../styles/CounterSec.css"

const CounterSec = () => {

    const counters = [
        {
            count: 10,
            object: 'Projects'
        },
        {
            count: 1000,
            object: 'Participants'
        },
        {
            count: 30,
            object: 'Companies'
        }

    ]

  return (
    <section className='counter-sec'>
        {
            counters.map((element, index)=>{
                return (
                    <Counter
                        key={index}
                        count={element.count}
                        object={element.object}
                    />
                )
            })
        }
    </section>
  )
}

export default CounterSec
