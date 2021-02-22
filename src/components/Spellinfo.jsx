import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Spellinfo = (props) =>{

const [data, updateData] = useState({})
const spell = props.location.state.spell
console.log(spell)

useEffect(() => {
  axios.get(`https://www.dnd5eapi.co${spell}`)
    .then(resp => {
      updateData(resp.data)
      console.log(resp.data)
    })
}, [])

return<h1>{data.index}</h1>
}



export default Spellinfo