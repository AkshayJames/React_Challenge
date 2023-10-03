import React,{useState} from 'react'
import './Reminder.css'

function Reminder() {

    const [Reminder, setReminder] = useState([]);
    const [newReminder, setNewReminder] = useState("");


    const handleInputChange = (event)=>{
        setNewReminder(event.target.value)
    }

    const handleAddReminder =()=>{

        if(newReminder.trim()){
            setReminder([...Reminder,newReminder]) 
            setNewReminder("");
        }
    
    
        
    }

    const handleDeleteReminder = (index)=> {
        setReminder(Reminder.filter((item,itemIndex)=>itemIndex !== index))

    }
    

  return (
    <div className='container'>
     
        <h1>Reminder App</h1>
      <div className='input-container'>
        <input value={newReminder} type='text' placeholder='Enter a task' onChange={handleInputChange}></input>
        <button className='add-btn' onClick={handleAddReminder}>Add remainder</button>   
        </div>

        {Reminder.length > 0 ?(

       <ul className='reminder-list'>
       {
         Reminder.map((reminderData,index)=>(

           <li>
               {reminderData}  
               <button onClick={()=>handleDeleteReminder(index)} className='delete-btn'>Delete</button>
           </li>

         ))
       }
       </ul>) : 
       <p>No Reminders Found</p>
}
    </div> 

  )
}

export default Reminder