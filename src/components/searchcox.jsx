import React from 'react'

function Searchcox({search,setsearch}) {
  function per(e){
    e.preventDefault()
    setsearch("")

  }


  return (
    <form action="" onSubmit={(e)=>per(e)} className='form-search'>
        <input type="text" className='search_box' placeholder='Search' value={search} onChange={(e)=>setsearch(e.target.value)} />
    </form>
  )
}

export default Searchcox
