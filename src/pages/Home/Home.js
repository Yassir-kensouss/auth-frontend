import React from "react";
import { useHistory } from "react-router";
import { ThemeProvider } from "styled-components";
import Container from "../../components/container/Container";
import { colors } from "../../global styles/Global";

// Import Images
import hero from "../../assets/hero_img.png";

// Import component styles
import {
  Wrap,
  Grid,
  Col1,
  Col2,
  Features,
  Heading,
  Desc,
  Item,
  Alert,
  Img,
} from "./Styles";

const Home = () => {
  return (
    <ThemeProvider theme={colors}>
      <Wrap>
        <Container>
          <Grid>
            <Col1>
              <Heading>
                It must be{" "}
                <span className='heading-block'>
                  hard to run alone<span>.</span>
                </span>
              </Heading>
              <Desc>
                Every thing must need something else to co-exist. Likewise with
                business, Beautieslfie.id is here to help you to become a
                Beautypreneur. Whoever you!!
              </Desc>
              <Features>
                <Item>
                  <span className='outer-dot'>
                    <span className='inner-dot'></span>
                  </span>
                  <span className='feature'>Student</span>
                </Item>
                <Item>
                  <span className='outer-dot'>
                    <span className='inner-dot'></span>
                  </span>
                  <span className='feature'>Housewife</span>
                </Item>
                <Item>
                  <span className='outer-dot'>
                    <span className='inner-dot'></span>
                  </span>
                  <span className='feature'>Career Hunter</span>
                </Item>
              </Features>
              <Alert>
                <h3>1st Indonesian Beautypreneur Community</h3>
                <p>Dengan berbagai fasilitas “advance disigital platform”.</p>
              </Alert>
            </Col1>
            <Col2>
              <Img src={hero} alt='hero' title='hero' />
            </Col2>
          </Grid>
        </Container>
      </Wrap>
    </ThemeProvider>
  );
};

export default Home;
