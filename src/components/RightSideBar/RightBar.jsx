import React from 'react';
import cl from "./RightBar.module.css"
import search from "../../Images/search.png"
import MyInput from '../Input/MyInput';
import js from "../../Images/javascript.png"
import react from "../../Images/react.png"
import python from "../../Images/python.png"
import MyButton from '../button/MyButton';
import { Link } from 'react-router-dom';

const CourseList = {
    course: [
        { id: 1, name: "JavaScript", img: js },
        { id: 2, name: "React", img: react },
        { id: 3, name: "Python", img: python },
        { id: 4, name: "Django", img: python },

    ]
}

const Course = (props) => {
    return (
        <div className={cl.course}>
            <img src={props.img} />
            <div className={cl.prName}>{props.name}</div>
        </div>
    )
}
let CourseItem = (props) => {
    let courseItem = props.CourseList.course.map(item => <Course name={item.name} img={item.img} />)
    return (
       
            <div className={cl.course__item}>
                {courseItem}
            </div>
        


    )
}

const Search = () => {
    return (
        <div className={cl.search}>
            <MyInput />
            <img src={search} alt="" />
        </div>
    )
}

const RightBar = () => {
    return (
        <div className={cl.rightbar}>
            <div>Courses</div>
            <div className={cl.btn}>
           
            </div>
            
            <Search />
            <div clasName={cl.course__list}>
            <CourseItem CourseList={CourseList} />
            </div>
           
        </div>
    );
};

export default RightBar;