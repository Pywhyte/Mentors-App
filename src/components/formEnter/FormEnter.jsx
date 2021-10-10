import React from 'react';
import MyButton from '../button/MyButton';
import MyInput from '../Input/MyInput';
import classes from "./Form.module.css"
const FormEnter = ({ children, visible, setVisible }) => {
    const rootClasses=[classes.box_col]

    if(visible){
        rootClasses.push(classes.active)
    }
    return (
        <div className={rootClasses.join(" ")}>
            <div className="box">
                <MyInput type="name" placeholder="Ваш логин..."/>          
                <MyInput type="password"  placeholder="Ваш пароль..."/>
                <MyButton>Войти</MyButton>
            </div>
        </div>
    );
};

export default FormEnter;