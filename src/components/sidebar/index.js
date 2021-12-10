import React, { useState } from 'react';
import { NavLink }  from 'react-router-dom'

function Sidebar() {
  

    let [menu, useMenu] = useState([
        {icon: '/assets/img/Home.svg', link:'/'},
        {icon: '/assets/img/Discount.svg', link:'/discount'},
        {icon: '/assets/img/Graph.svg', link:'/graph'},
        {icon: '/assets/img/Message.svg', link:'/message'},
        {icon: '/assets/img/Notification.svg', link:'/notification'},
        {icon: '/assets/img/Setting.svg', link:'/settings'},
    ])

    return(
        <div className="sidebar">
           <NavLink className="logo" to="/"><img src="/assets/img/Logo.png"/></NavLink> 
           <div >
               <ul>
                   {menu.map((item)=>{
                   return(
                   <li><NavLink exact className="icon" to={item.link}><img src={item.icon}/></NavLink></li>
                   )
                   })}
               </ul>
           </div>
        </div>
    )
}
export default Sidebar;