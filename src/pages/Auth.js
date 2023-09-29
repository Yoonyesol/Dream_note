import React, { useRef, useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-config";

import Card from "../components/Card";
import Button from "../components/Button";
import "./Auth.css";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailRef = useRef();
  const pwdRef = useRef();

  const navigate = useNavigate();

  const signIn = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      alert("회원가입에 성공하셨습니다! 로그인 해주세요.");
      emailRef.current.value = "";
      pwdRef.current.value = "";
      console.log(user);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <React.Fragment>
      <Header
        leftBtn={
          <Button
            type="light-brown"
            text={"뒤로 가기"}
            onClick={() => navigate(-1)}
          />
        }
        headText={"회원가입"}
      />
      <Card className="authentication">
        <h2>회원가입</h2>
        <hr />
        <div className="input-field">
          <h4>이메일</h4>
          <input
            type="email"
            placeholder="이메일"
            ref={emailRef}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h4>비밀번호</h4>
          <input
            type="password"
            placeholder="비밀번호"
            ref={pwdRef}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="btn-field">
            <Button text={"회원가입"} type="dark-brown" onClick={signIn} />
            <Button text={"SWICH TO 로그인"} />
          </div>
        </div>
      </Card>
    </React.Fragment>
  );
};

export default Auth;
