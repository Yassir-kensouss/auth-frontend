import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { API_URL } from "../../config";
import { isAuthenticated } from "../../auth.js/helpers";

// Import Global Styles
import { colors } from "../../global styles/Global";

// Import components
import Container from "../container/Container";

// Import Images
import logo from "../../assets/logo.png";

// Import component styles
import {
  Wrap,
  Grid,
  Col1,
  Col2,
  Col3,
  Button,
  Nav,
  List,
  Item,
  SignOut,
} from "./Styles";

const Header = () => {
  // initialize alert component
  const MySwal = withReactContent(Swal);

  const history = useHistory();

  const signout = () => {
    fetch(`${API_URL}/signout`)
      .then(() => {
        MySwal.fire({
          icon: "success",
          title: "You Logged Out!!",
          showConfirmButton: false,
        });

        localStorage.removeItem("infos");
        history.push("/signin");
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      })
      .catch();
  };

  return (
    <ThemeProvider theme={colors}>
      <Wrap>
        <Container>
          <Grid>
            <Col1>
              <Link to='/'>
                <img src={logo} alt='logo' title='logo' />
              </Link>
            </Col1>
            <Col2>
              <Nav>
                <List>
                  <Item>
                    <Link to='#'>Home</Link>
                  </Item>
                  <Item>
                    <Link to='#'>Beautypreneur</Link>
                  </Item>
                  <Item>
                    <Link to='#'>Brand Partner</Link>
                  </Item>
                  {isAuthenticated() && (
                    <Item>
                      <SignOut onClick={signout}>Sign Out</SignOut>
                    </Item>
                  )}
                </List>
              </Nav>
            </Col2>
            <Col3>
              {isAuthenticated() ? (
                <Link to='/user/profile' className='register'>
                  <Button>Profile</Button>
                </Link>
              ) : (
                <Link to='/signup' className='register'>
                  <Button>Register</Button>
                </Link>
              )}
            </Col3>
          </Grid>
        </Container>
      </Wrap>
    </ThemeProvider>
  );
};

export default Header;
