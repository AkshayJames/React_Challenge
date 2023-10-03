import React,{useEffect,useState} from "react"

function Effect() {
    const [alarm, setAlarm] = useState(null);

    useEffect(() => {
      console.log("alarn is ringing");
    }, [alarm])
     
  return (
    <div>
        <button onClick={()=>setAlarm(true)}>
            Alarm Ring
        </button>
    </div>
    
  )
}

export default Effect