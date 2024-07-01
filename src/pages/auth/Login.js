import React, { useState } from 'react';
import './css/Login.css';
import {useNavigate} from "react-router-dom";

const Login = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const navigate = useNavigate()
    const moveMain=()=>{
        navigate('/classroom')
    }
    const handleLoginClick = () => {
        setIsExpanded(true);
    };

    return (
        <div className={`login-wrap ${isExpanded ? 'expanded' : ''}`}>
            <div className="login-form">
                <div className="login-form-logo">
                    <h1>
                        <span>E</span>
                        <span>Y</span>
                        <span>E</span>
                        <span>S</span>
                        <span>O</span>
                        <span>N</span>
                        <span>Y</span>
                        <span>O</span>
                        <span>U</span>
                    </h1>
                </div>
                <div className="login-form-box">
                    {!isExpanded && (
                        <>
                            <button
                                className="login-form-box-login-btn"
                                onClick={handleLoginClick}
                            >
                                로그인
                            </button>
                            <button className="login-form-box-register-btn">회원가입</button>
                        </>
                    )}
                    <div className="login-inputs">
                        <input type="text" placeholder="아이디" className="login-id" />
                        <input type="password" placeholder="비밀번호" className="login-password" />
                        <button className="login-submit-btn" onClick={moveMain}>로그인</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
