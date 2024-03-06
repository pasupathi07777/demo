import { useState, useRef, useEffect } from 'react';
import './App.css';
import Body from './components/body';
import Foooter from './components/foooter';
import Header from './components/header';
import Additems from './components/Additems';
import Searchcox from './components/searchcox';
import updateserver from './components/Apirequest';
import server from './components/serverlink';











function App() {


  let app_nanme = "to do list"



  // -------------------------------------

  let [allitems, setallitems] = useState([])
  let [input, setinput] = useState("")
  let [search, setsearch] = useState("")
  // to create local server ip 3500n -w path 
  let [fectch, setfectvh] = useState(null)
  let [looding, setlooding] = useState(true)

 

 



  let LINK = 'http://localhost:3500/items'
  let requst;

  useEffect(() => {

    let fun_1k = async () => {
      try {
        let fetch_link = await fetch(server())
        if (!fetch_link.ok) throw Error("data not found")
        requst = await fetch_link.json()

        setallitems(requst)

        setfectvh(null)
      }
      catch (err) {
        console.log(err.message)
        setfectvh(err.message)

      } finally {
        setlooding(false)

      }
    }


    let time = () => {
      fun_1k()

    }
    // time()
    setTimeout(time, 3000)







  }, [])


  let create_box = async (a) => {



   
    let id = (allitems.length===0)?String(0):String(allitems[allitems.length - 1].id + 1)
    
     console.log(id)
   
    console.log(id)


    let details = a
    let checked = false
    let arr = { id, details, checked }
    console.log(arr)
    let arr2 = [...allitems, arr]
    setallitems(arr2)

    let create_url = server()
    let meth = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'

      },
      body: JSON.stringify(arr)
    }

    let update_report = await updateserver(create_url, meth)
    console.log(update_report)
    if (update_report) {
      setfectvh(update_report)
    }




  }
  useEffect(() => {


  }, [allitems])


  function prevent(e) {

    e.preventDefault()
    if (!input) return
    setinput("")
    create_box(input)
  }
  let footer_lines = `${allitems.length} items in list `



  return (
    <div className="App">
      <Header app_nanme={app_nanme} />

      <Additems input={input} setinput={setinput} prevent={prevent} />
      <Searchcox search={search} setsearch={setsearch} />

      <Body allitems={allitems.filter(item => (item.details).includes(search))} setallitems={setallitems} fectch={fectch} setfectvh={setfectvh} looding={looding} />


      <Foooter footer_lines={footer_lines} />

    </div>
  );
}

export default App;

// {id:1,checked:true,details:"play cricket"},{id:2,checked:false,details:"play cricket"}
 