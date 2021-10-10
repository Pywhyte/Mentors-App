import React,{useState} from 'react';
import MyButton from '../button/MyButton';
import MyInput from '../Input/MyInput';
import classes from "./Form.module.css"
import { useDispatch } from "react-redux"
import {login} from "../../action/user"
const FormEnter = ({ children, visible, setVisible }) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()

    const rootClasses=[classes.box_col]

    if(visible){
        rootClasses.push(classes.active)
    }
    return (
        <div className={rootClasses.join(" ")}>
            <div className="box">
                <MyInput value={email} setValue={setEmail} type="text" placeholder="Введите Email"/>          
                <MyInput value={password} setValue={setPassword} type="password" placeholder="Введите пароль"/>
                <MyButton onClick={() => dispatch(login(email, password))
            }>Войти</MyButton>
            </div>
        </div>
    );
};

export default FormEnter;