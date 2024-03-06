import React from 'react'
import { FaTrashAlt } from "react-icons/fa";
import updateserver from './Apirequest';
import server from './serverlink';




function Body({ allitems, setallitems, fectch,setfectvh,looding }) {
  
    


    let  checbox= async(id)=> {


        let nwearray = allitems.map((items) => items.id === id ? { ...items, checked: !items.checked } : items)
        setallitems(nwearray)
        
       
        let id_rus=nwearray.filter((a)=>a.id===id)
        let res=id_rus
        let create_url = server()
        // 'http://localhost:3500/items'
        console.log(id_rus[0].checked)
        let meth = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'

            },
            body: JSON.stringify({checked:id_rus[0].checked})
        }
        let latest_url=`${create_url}/${id}`
        console.log(latest_url)

        let responce=await updateserver(latest_url, meth)
        console.log(responce)
        setfectvh(responce)



    }


    function del(id) {


        let nwearray2 = allitems.filter((items) => items.id != id)
        setallitems(nwearray2)
        console.log(id)
        let create_url = server()
        let latest_url=`${create_url}/${id}`
        let method = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                
            }
        }

        updateserver(latest_url, method)



    }

    return (
        <div className='body'>

            {fectch && <p>Error {fectch}</p>}


            {looding && <p>...looding</p>}

            {allitems.length ? <ul className='container'>
                {allitems.map((item) => (
                    // item.length?

                    <li className='box' key={item.id}>
                        <input type="checkbox" checked={item.checked} onChange={() => checbox(item.id)} />
                        <p className='para' onDoubleClick={() => checbox(item.id)} style={(item.checked == true) ? { textDecoration: 'line-through' } : null}>{item.details}</p>
                        <button className='btn_trash' onClick={() => del(item.id)}><FaTrashAlt role='button' tabIndex="0" /></button>
                      

                    </li>
                ))}
            </ul> : <div>{!fectch && !looding && <p className='para2'>Empty</p>}</div>}


        </div>
    )

}



export default Body
