import React from 'react';
import MyButton from '../button/MyButton';

const Header = () => {
    return (
        <div>
            <MyButton onClick={()=>{}}>Student</MyButton>
            <MyButton>Mentor</MyButton>
            <MyButton>Log In</MyButton>
        </div>
    );
};

export default Header;