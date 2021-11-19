// import React from 'react'
import citizens from './../data/citizens.json'

//@ts-ignore
function CitizenList(props) {
  const display: 'small' | 'big' = props.display || 'big'

  const elements = citizens.map((citizen, index) => (
    <li key={index}>
      <figure>
        <img src={citizen.image[display]} alt={citizen.name} />
        <figcaption>{citizen.name}</figcaption>
      </figure>
    </li>
  ))

  return <ul className='citizens'>{elements}</ul>
}

export default CitizenList
