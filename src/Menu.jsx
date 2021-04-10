import React from 'react';
import {NavLink} from 'react-router-dom';

const Menu = () => {
    return ( 
        <>
        <div className="main_div">
        <NavLink exact activeClassName="active_class" to='/'> About Us </NavLink>
        <NavLink exact activeClassName="active_class" to='/contact'> Contact Us </NavLink>
        <NavLink exact activeClassName="active_class" to='/search' >Search</NavLink> 
        <NavLink exact activeClassName="active_class" to='/user'> User </NavLink>
        <NavLink exact activeClassName="active_class" to='/service'> Services </NavLink>
       
      
        </div>
       </>
    )
}

export default Menu;