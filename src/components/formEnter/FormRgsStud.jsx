import React, { useState } from 'react';
import MyButton from '../button/MyButton';
import MyInput from '../Input/MyInput';
import "../../pages/Login.css"
import classes from "./Form.module.css"
import {registration} from "../../action/user"

const FormRgsStud = ({ visible, setVisible }) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const rootClasses=[classes.box__rgss]

    if(visible){
        rootClasses.push(classes.active)
    }
    return (
        <div className={rootClasses.join(" ")}>
        <MyInput  value={email} setValue={setEmail} type="text" placeholder="Введите Email" />
        <MyInput type="email"placeholder="Email..."/>
        <MyInput type="text"placeholder="Company..."/>
        <MyInput value ={password} setValue={setPassword} type="password" placeholder="Введите пароль...."/>       
        <MyButton onClick={()=>{
                registration(email, password)
            }}>Войти</MyButton>
    </div>
    );
};

export default FormRgsStud;