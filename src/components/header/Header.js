import React from "react";
import { Link } from "react-router-dom";
import { ThemeProvider } from "styled-components";

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
} from "./Styles";

const Header = () => {
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
                </List>
              </Nav>
            </Col2>
            <Col3>
              <Link to='/signup' className='register'>
                <Button>Register</Button>
              </Link>
            </Col3>
          </Grid>
        </Container>
      </Wrap>
    </ThemeProvider>
  );
};

export default Header;
