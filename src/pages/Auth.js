import React, { useState } from "react";
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

  const navigate = useNavigate();

  const signIn = async () => {
    console.log(email, password);
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
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
            onChange={(e) => setEmail(e.target.value)}
          />
          <h4>비밀번호</h4>
          <input
            type="password"
            placeholder="비밀번호"
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
