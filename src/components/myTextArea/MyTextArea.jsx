import React from 'react';
import cl from "./MyTextArea.module.css"
const MyTextArea = ({children, ...props}) => {
    return (
        <textarea {...props}className={cl.txt__area}>{children}</textarea>
    );
};

export default MyTextArea;