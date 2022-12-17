import React from 'react'

const ColorShow = (props) => {
  return (

    <div style={{marginLeft:"39%", marginTop:"1%", display:"flex", flexDirection:"row"}}>
        {
      props.data.map((item,id)=> <div key = {id} style={{width:item.width, height:item.height, backgroundColor:item.color, marginTop:"10px",marginLeft:"10px" }} ></div>)
        }
    </div>
  )
}

export default ColorShow

