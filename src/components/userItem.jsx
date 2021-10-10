import React from 'react';
import { useHistory } from 'react-router';
import MyButton from './button/MyButton';
import "./Styles.css"
import ava from "../Images/user.png"

const UserItem = (props) => {


    const router = useHistory()

    return (
        <div className="user">
            <div  className="user__navbar">
            <img className="user__avatar" src="https://pbs.twimg.com/media/DYfwnKOXUAEgTc2.jpg" alt="logo" width="90" height="90"/>
            </div>
            <div className="user__content">
                <strong className="item__1"> {props.post.name}</strong>
                <div  className="item__1">
                    {props.post.email}
                </div>
                <div  className="item__1">{props.post.company.name}</div>
                <div  className="item__1">{props.post.company.catchPhrase}</div>
            </div>
            <div className="user__btns">
                <MyButton
                    onClick={() => router.push(`/posts/${props.post.id}`)}>
                    Связаться
                </MyButton>
                
            </div>
        </div>
    );
};

export default UserItem;