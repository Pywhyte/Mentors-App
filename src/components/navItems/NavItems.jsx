import React from 'react';
import cl from "./NavItems.module.css"
import logo from "../../Images/star.png"
import heart from "../../Images/heart.png"
import user from "../../Images/user.png"
import play from "../../Images/play.png"

const NavItems = () => {
    return (
        <div className={cl.nav__items}>
            <div className={cl.item}>
                <img className={cl.img} src={logo} />
                <a className={cl.click} href="/mentors">Mentors</a>  </div>
            <div className={cl.item}>
                <img className={cl.img} src={play} />
                My Courses</div>
            <div className={cl.item}>
                <img className={cl.img} src={heart} />
                Wishlist</div>
            <div  className={cl.item}>
                <img className={cl.img} src={user} />
                Account</div>
        </div>
    );
};

export default NavItems;