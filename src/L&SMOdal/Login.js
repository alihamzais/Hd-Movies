import React, { useEffect, useState } from "react";
import { Input, Button } from "antd";
import { Link } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebaseAuth/Authentication";
import { useNavigate } from "react-router-dom";
import { apiData } from "../MobxStore.js/MobxTree";

function Login() {
  useEffect(() => {
    apiData.newapicall();
  }, []);
  apiData.data.map((item) => {
    console.log(item, "newapicall////////////");
  });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isdisable, setIsDisable] = useState(true);
  const auth = getAuth(app);
  const navigate = useNavigate();
  const login = () => {
    if (email === "") {
      alert("input filed required");
      return false;
    } else if (password === "") {
      alert("input filed required");
      return false;
    }
    signInWithEmailAndPassword(auth, email, password)
      .then((value) => {
        alert("Successfully SignIn");
        apiData.getUserName(email);
        navigate("/");
      })
      .catch((err) => {
        alert(err.message.slice(10, err.message.length - 1));
      });
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: "#FEFFF7",
        }}
      >
        <Link to="/">
          <div
            style={{
              fontSize: "20px",
              position: "absolute",
              left: "20%",
              top: "5vh",
              color: "#343a40",
              cursor: "pointer",
            }}
          >
            Home
          </div>
        </Link>
        <div className="Login_back_page">
          <h1 id="login">Login</h1>
          <label htmlFor="input1">Input 1:</label>
          <br />
          <Input
            placeholder="type your email"
            type="email"
            id="input1"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              let a =
                password === ""
                  ? setIsDisable(true)
                  : e.target.value.length > 0
                  ? setIsDisable(false)
                  : setIsDisable(true);
              return a;
            }}
          />
          <br />
          <label htmlFor="input2">Input 2:</label>
          <br />

          <Input
            placeholder="type your password"
            id="input2"
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              let a =
                email === ""
                  ? setIsDisable(true)
                  : e.target.value.length > 0
                  ? setIsDisable(false)
                  : setIsDisable(true);
              return a;
            }}
          />
          <br />
          <Button
            type="primary"
            block
            id="login_btn"
            htmlType="submit"
            disabled={isdisable}
            onClick={login}
          >
            Login
          </Button>
          <p id="not_have_acount">
            You do'nt have an account{" "}
            <Link style={{ textDecoration: "none" }} to="/signin">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;
