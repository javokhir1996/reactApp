import React, { useState } from 'react';
import { NavLink }  from 'react-router-dom'
const Sidebar = ()=>{

    let [menulist, setMenuList] = useState([
        {icon: '/assets/img/home.svg', url: '/'},
        {icon: '/assets/img/discount.svg', url: '/discount'},
        {icon: '/assets/img/dashboard.svg', url: '/dashboard'},
        {icon: '/assets/img/message.svg', url: '/message'},
        {icon: '/assets/img/notification.svg', url: '/notification'},
        {icon: '/assets/img/setting.svg', url: '/settings'},
        {icon: '/assets/img/logout.svg', url: '/logout'},
    ])
    
    return(
        <nav className="main_sidebar">
            <NavLink to="/" className="logo" ><img src="/assets/img/logo.svg" /> </NavLink>
            <ul className="menu_list">
                {
                    menulist.map((item, key) => <li key={key}><NavLink className="link_item" exact activeClassName="active"  to={item.url}><img src={item.icon} /></NavLink></li>)
                }
            </ul>
        </nav>
    ) 
}

export default Sidebar;

