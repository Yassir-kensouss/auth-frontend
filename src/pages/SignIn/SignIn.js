import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { Link } from "react-router-dom";
import { colors } from "../../global styles/Global";
import { useHistory } from "react-router-dom";
import logo from "../../assets/logo.png";
import { IoCloseSharp } from "react-icons/io5";
import { API_URL } from "../../config";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

// Import components tyles
import {
  Wrap,
  Col1,
  Col2,
  Grid,
  Center,
  Logo,
  FormWrap,
  Form,
  InputDiv,
  Input,
  Submit,
  AHA,
  Button,
} from "./Styles";

const SignUp = () => {
  const history = useHistory();

  // initialize alert component
  const MySwal = withReactContent(Swal);
  // User state
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  // Handle form fields
  const handleChange = (e) => {
    setUser({ ...user, [e.target.id]: e.target.value });
  };

  // Handle submition
  const handleSignIn = (e) => {
    e.preventDefault();

    fetch(`${API_URL}/signin`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          MySwal.fire({
            icon: "error",
            title: res.error,
            showConfirmButton: false,
          });
        } else {
          MySwal.fire({
            icon: "success",
            title: "You are logged In ",
            showConfirmButton: false,
          });

          localStorage.setItem("infos", JSON.stringify(res));

          history.push("/");
          setTimeout(() => {
            window.location.reload();
          }, 1000);
        }
      })
      .catch((err) => {
        MySwal.fire({
          icon: "error",
          title: "Please Recheck your form (email must be unique)",
          showConfirmButton: false,
        });
      });
  };

  const handleClick = () => {
    history.goBack();
  };
  return (
    <ThemeProvider theme={colors}>
      <Wrap>
        <Grid>
          <Col1>
            <Center>
              <Logo src={logo} />
              <FormWrap>
                <form onSubmit={handleSignIn}>
                  <InputDiv>
                    <Input
                      onChange={handleChange}
                      type='email'
                      placeholder='Email'
                      id='email'
                    />
                  </InputDiv>
                  <InputDiv>
                    <Input
                      onChange={handleChange}
                      type='password'
                      placeholder='password'
                      id='password'
                    />
                  </InputDiv>
                  <Submit type='submit'>Register</Submit>
                </form>
              </FormWrap>
              <AHA>
                Create an account for free ? <Link to='/signup'>Register</Link>
              </AHA>
            </Center>
          </Col1>
          <Col2>
            <div>
              <h2>
                Master Mind Better.
                <br /> Succeed Together
              </h2>
              <p>
                Every thing must need something else to co-exist. Likewise with
                business, Beautieslfie.id is here to help you to become a
                Beautypreneur.
              </p>
            </div>
          </Col2>
        </Grid>
        <Button onClick={handleClick}>
          <IoCloseSharp />
        </Button>
      </Wrap>
    </ThemeProvider>
  );
};

export default SignUp;
