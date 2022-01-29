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
  InputDiv,
  Input,
  Submit,
  AHA,
  Button,
} from "./Styles";

const SignUp = () => {
  const history = useHistory();
  const MySwal = withReactContent(Swal);
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });

  // Handle form fields
  const handleChange = (e) => {
    setUser({ ...user, [e.target.id]: e.target.value });
  };

  // Handle submition
  const handleSubmition = (e) => {
    e.preventDefault();

    fetch(`${API_URL}/signup`, {
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
            title: "You account has been created successfully",
            showConfirmButton: false,
          });
          history.push("/signin");
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

  // Go back to previous page
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
                <form onSubmit={handleSubmition}>
                  <InputDiv>
                    <Input
                      type='text'
                      placeholder='First Name'
                      id='first_name'
                      onChange={handleChange}
                    />
                  </InputDiv>
                  <InputDiv>
                    <Input
                      type='text'
                      placeholder='Last Name'
                      id='last_name'
                      onChange={handleChange}
                    />
                  </InputDiv>
                  <InputDiv>
                    <Input
                      type='email'
                      placeholder='Email'
                      id='email'
                      onChange={handleChange}
                    />
                  </InputDiv>
                  <InputDiv>
                    <Input
                      type='password'
                      placeholder='password'
                      id='password'
                      onChange={handleChange}
                    />
                  </InputDiv>
                  <Submit>Register</Submit>
                </form>
              </FormWrap>
              <AHA>
                Already have an account ? <Link to='/signin'>Login</Link>
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
