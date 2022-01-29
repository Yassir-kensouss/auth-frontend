import React from "react";
import Container from "../../components/container/Container";
import { ThemeProvider } from "styled-components";
import { colors } from "../../global styles/Global";
import { Card, Col, Row } from "antd";
import { isAuthenticated } from "../../auth.js/helpers";
import { Heading, Desc } from "./Styles";

const Profile = () => {
  const { email, first_name, last_name, role } = isAuthenticated().user;
  return (
    <ThemeProvider theme={colors}>
      <Container>
        <Heading>Hi, {first_name}</Heading>
        <Desc>
          Welcom to your profile, Just relax it's only you who can access this
          awesome page{" "}
        </Desc>
        <Row gutter={60}>
          <Col span={8}>
            <Card title='Full Name' bordered={false}>
              {first_name} {last_name}
            </Card>
          </Col>
          <Col span={8}>
            <Card title='Email' bordered={false}>
              {email}
            </Card>
          </Col>
          <Col span={8}>
            <Card title='Role' bordered={false}>
              {role == 0 ? "User" : "Admin"}
            </Card>
          </Col>
        </Row>
      </Container>
    </ThemeProvider>
  );
};

export default Profile;
