import React from 'react'
import menu from '../img/menu.png'

const Header = () => {
  return (
   <header>
       <div className="menu">
           <img src={menu} alt="" srcset="" />
       </div>
       <div className="logo">
           <h1>ZAYMAX.</h1>
           <nav>
               <button>Login</button>
           </nav>
       </div>
   </header>
  )
}

export default Header