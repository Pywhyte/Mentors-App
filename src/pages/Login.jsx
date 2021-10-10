import React, { useState } from 'react';
import MyButton from '../components/button/MyButton';
import FormEnter from '../components/formEnter/FormEnter';
import FormRgs from '../components/formEnter/formRgs';
import FormRgsStud from '../components/formEnter/FormRgsStud';
import "./Login.css"
import { useContext } from 'react';
import { authContext } from '../context/context';

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [rgs, setRgst] = useState(false)
    const [rgss, setRgss] = useState(false)
    const [enter, setEnter] = useState(true)
    const formEnter = () => {
        setEnter(true)
        setRgss(false)
        setRgst(false)
    }
    const formRgs = () => {
        setEnter(false)
        setRgss(false)
        setRgst(true)
    }
    const formRgStudent = () => {
        setEnter(false)
        setRgss(true)
        setRgst(false)
    }

    

    return (
        <>
            <div className="container">
                <div className="sidebar">
                    <div className="bkgCol">
                        <div>
                            <MyButton onClick={() => { formRgStudent() }}>
                                Student</MyButton>
                            <MyButton onClick={() => { formRgs() }}>
                                Mentor</MyButton>
                            <MyButton onClick={() => { formEnter() }}>
                                Log In</MyButton>
                        </div>
                        <FormEnter visible={enter} />
                        <FormRgsStud visible={rgss} />
                        <form >

                            <FormRgs  visible={rgs} />
                        </form>

                    </div>
                </div>
                <div class="main-slide">
                    <div className="bkgImg"
                    ></div>
                </div>
            </div>
        </>
    );
};

export default Login;






