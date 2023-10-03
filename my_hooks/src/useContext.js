import React,{createContext, useState} from 'react'
import OtherContext from './OtherContext';

export const appContext = createContext();

function AppUseCont() {
    const [data, setdata] = useState(0)
  return (
    <div>
        <appContext.Provider value={{data,setdata}}>
            {data}
            <OtherContext/>
        </appContext.Provider>
    </div>
  )
}

export default AppUseCont