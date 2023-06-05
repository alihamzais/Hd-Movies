import React, { useState } from "react";
import { Input, Button } from "antd";
import { Link } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebaseAuth/Authentication";
import { useNavigate } from "react-router-dom";

function Signin() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isdisable, setIsDisable] = useState(true);
  const auth = getAuth(app);
  const navigate = useNavigate();

  const signin = () => {
    function valid() {
      setTimeout(() => {
        createUserWithEmailAndPassword(auth, email, password)
          .then((value) => {
            setTimeout(() => {
              alert("successfully Sign In");
            }, 100);
            setEmail("");
            setName("");
            setPassword("");
            navigate("/login");
          })
          .catch((err) => {
            alert(err.message.slice(10, err.message.length - 1));
          });
      }, 500);
    }
    if (name === "") {
      alert("input filed required");
      return false;
    } else if (email === "") {
      alert("input filed required");
      return false;
    } else if (password === "") {
      alert("input filed required");
      return false;
    }
    if (name.length <= 6) {
      alert("Name at list 6 character above");
    } else if (!email.includes("@gmail.com")) {
      alert("@gmail.com is required in email");
    } else if (password.length <= 7) {
      alert("Password at list 7 character above");
    } else {
      valid();
    }
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
          <h1 id="login">Sign Up</h1>
          <Input
            placeholder="type your name"
            id="input1"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              let a =
                email === ""
                  ? setIsDisable(true)
                  : password === ""
                  ? setIsDisable(true)
                  : e.target.value.length > 0
                  ? setIsDisable(false)
                  : setIsDisable(true);
              return a;
            }}
          />
          <br />
          <Input
            placeholder="type your email"
            id="input2"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              let a =
                name === ""
                  ? setIsDisable(true)
                  : password === ""
                  ? setIsDisable(true)
                  : e.target.value.length > 0
                  ? setIsDisable(false)
                  : setIsDisable(true);
              return a;
            }}
          />
          <br />
          <Input
            placeholder="type your password"
            id="input3"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);

              let a =
                email === ""
                  ? setIsDisable(true)
                  : name === ""
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
            disabled={isdisable}
            onClick={signin}
          >
            Sign Up
          </Button>
          <p id="not_have_acount">
            You do'nt have an account{" "}
            <Link style={{ textDecoration: "none" }} to="/login">
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Signin;
