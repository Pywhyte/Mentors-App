import React from 'react';
import MyButton from '../button/MyButton';
import MyInput from '../Input/MyInput';
import "../../pages/Login.css"
import classes from "./Form.module.css"

const FormRgsStud = ({ visible, setVisible }) => {
    const rootClasses=[classes.box__rgss]

    if(visible){
        rootClasses.push(classes.active)
    }
    return (
        <div className={rootClasses.join(" ")}>
        <MyInput type="name" placeholder="Имя..."/>
        <MyInput type="email"placeholder="Email..."/>
        <MyInput type="text"placeholder="Company..."/>
        <MyInput type="password"placeholder="Password..."/>
        
        
        <MyButton >Войти</MyButton>
    </div>
    );
};

export default FormRgsStud;