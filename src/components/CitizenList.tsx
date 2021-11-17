// import React from 'react'
import citizens from './../data/citizens.json'

//@ts-ignore
function CitizenList(props) {
  const style: 'small' | 'big' = props.style || 'big'

  const elements = citizens.map((citizen, index) => (
    <li key={index}>
      <figure>
        <img src={citizen.image[style]} alt={citizen.name} />
        <figcaption>{citizen.name}</figcaption>
      </figure>
    </li>
  ))

  return <ul>{elements}</ul>
}

export default CitizenList
