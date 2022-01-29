import React from "react";
import { ThemeProvider } from "styled-components";
import { Link } from "react-router-dom";
import { colors } from "../../global styles/Global";
import { useHistory } from "react-router-dom";
import logo from "../../assets/logo.png";
import { IoCloseSharp } from "react-icons/io5";

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
                <Form>
                  <InputDiv>
                    <Input type='email' placeholder='Email' />
                  </InputDiv>
                  <InputDiv>
                    <Input type='password' placeholder='password' />
                  </InputDiv>
                  <Submit type='submit'>Register</Submit>
                </Form>
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
