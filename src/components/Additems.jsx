import React from 'react'
import { useRef } from 'react';
import { AiOutlinePlus } from "react-icons/ai";

const Additems = ({input,setinput,prevent}) => {
    let use=useRef()
   

    return (
        <form action="" onSubmit={(e)=>prevent(e)} className='form_input    '>
            <input  ref={use} type="text" value={input} onChange={(e)=>setinput(e.target.value)}  placeholder='Add Items' />
            <button type="submit" onClick={()=>use.current.focus()}><AiOutlinePlus /> </button>
        </form>
    )
}

export default Additems
