import React from 'react';
import MyButton from '../button/MyButton';
import MyInput from '../Input/MyInput';
import MyTextArea from '../myTextArea/MyTextArea';
import classes from "./Form.module.css"
const FormRgs = ({ children, visible, setVisible }) => {
    const rootClasses=[classes.box__rgs]

    if(visible){
        rootClasses.push(classes.active)
    }
    return (
        <div className={rootClasses.join(" ")}>
            <MyInput type="name" placeholder="Имя..."/>
            <MyInput type="email"placeholder="Email..."/>
            <MyInput type="text"placeholder="Company..."/>
            <MyInput type="password"placeholder="Password..."/>
            <MyInput type="text"placeholder="Skills..."/>
            <MyTextArea></MyTextArea>
            <MyButton className="btn">Войти</MyButton>
        </div>
    );
};

export default FormRgs;