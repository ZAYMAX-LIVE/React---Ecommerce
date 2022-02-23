import React from 'react'
import { useParams } from 'react-router-dom'

const CardFull = (props) => {
  console.log(props.post)
  const {name} = useParams()
  return (
    <main className='cardFull'>
      {props.post.filter(post => post.name === name).map(post=>(
        <section className='productFull'>
          <h1>{post.name}</h1>
        </section>
      ))}
    </main>
  )
}

export default CardFull