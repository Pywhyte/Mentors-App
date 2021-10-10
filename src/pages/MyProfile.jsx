import React from 'react';
import Avatar from '../components/Avatar/Avatar';
import NavItems from '../components/navItems/NavItems';
import RightBar from '../components/RightSideBar/RightBar';
import "./MyProfile.css"
const MyProfile = () => {
    return (
        <div className="bkgBox">
            <div className="eclipse2"></div>
            <div className="eclipse"></div>
            <div className="eclipse3"></div>
            <div className="eclipse4"></div>
            <div className="eclipse5"></div>
            <div className="profile__box">
                <div className="profile__side">
                   <Avatar className="ava"/>
                   <div className="name">Vladimir</div>
                   <div className="surname">Yudin</div>
                   <NavItems/>             
                </div>
                <RightBar/>
                
            </div>
            

        </div>
    );
};

export default MyProfile;