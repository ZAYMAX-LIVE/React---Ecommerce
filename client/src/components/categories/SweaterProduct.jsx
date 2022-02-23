import React from 'react'
import { Link } from 'react-router-dom'
const SweaterProduct = (props) => {
  return (
    <div className="productsBlock">
      Sweater
        {props.posts.map((post) => (
          <Link to={`/card/${post.name}`}>
            <div className="prod" key={post.id}>
              <img src={post.img2} alt="" srcset="" />
              <div className="textProd">
                  <h1>{post.name}</h1>
                  <p>{post.price}$</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
  )
}

export default SweaterProduct