import React from 'react'

const ColorShow = (props) => {
  return (

    <div>
        {
      props.data.map((item,id)=> <div style={{width:'50px', height:'50px', backgroundColor:item, display:"flex"}} ></div>)
        }
    </div>
  )
}

export default ColorShow

