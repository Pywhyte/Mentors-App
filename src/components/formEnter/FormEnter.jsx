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
                <MyInput  type="text" placeholder="Введите Email"/>          
                <MyInput  type="password" placeholder="Введите пароль"/>
                <MyButton 
            ><a href="/myprofile">Enter</a></MyButton>
            </div>
        </div>
     
        
    );
};

export default FormEnter;