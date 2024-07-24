import React, {useState} from 'react'
import "../styles/Schedule.css"

const Schedule = ({timetable}) => {
    const [schedule, setschedule] = useState(timetable[0])
    const [active, setactive] = useState(0)


    const handleClick = function(e){
        console.log(e.target.index)
    }
  return (
    <section  id='schedule' className='schedule-section'>
        <h2>Schedule</h2>
        <div className='schedule-box'>
            <div className='schedule-tabs'>
                {
                    timetable.map((element, index)=>{
                        let class_ = `${active === index ? "active-tab": ""}`
                        return (
                            
                            <div key={index} onClick={(e)=>{
                                setactive(index)
                                setschedule(timetable[index])
                            }} className={class_}>{element.name}</div>
                        )
                    })
                }
            </div>
            <div className='schedule-table'>
                <table>
                    <thead>
                    {
                        schedule["headers"].map((element,index)=>{
                            return (
                                <th>
                                    <span>   
                                        <span class="material-symbols-outlined">
                                            {schedule.icons[index]}
                                        </span>
                                        <span>{element}</span>
                                    </span>
                                </th>
                                            
                                )
                        })
                    }
                    </thead>
                    
                    <tbody>
                        {
                            schedule.data.map((data, i)=>{
                                                
                                return (
                                    <tr>
                                        {
                                            data.map((item, id)=>{
                                                return (
                                                    <td>{item}</td>
                                                )
                                            })
                                        }
                                    </tr>
                                )
                            })
                            
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </section>
  )
}

export default Schedule
