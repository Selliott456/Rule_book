
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


const Spells = () => {
const [data, updateData] = useState({})
const [spell, updateSpell] = useState('')
useEffect(() => {
    axios.get(`https://www.dnd5eapi.co/api/spells`)
      .then(resp => {
        updateData(resp.data)
        console.log(resp.data)
      })
  }, [])

function handleSelect(e){
  updateSpell(e.target.value)
  console.log(e.target.value)
}

if(!data){
  return<h3>loading!</h3>
} else {
return <div>
  <h1>Spells</h1>
  <div>
    <select onChange={handleSelect}>
    {data.results && data.results.map((result, index) => {
      return <option  key={index} value={result.url}> {result.index} </option>
    })}
    </select>
  </div>
  </div>
}
}

export default Spells