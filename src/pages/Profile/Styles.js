import styled from "styled-components";

export const Heading = styled.h2`
  font-family: "Roboto", sans-serif;
  font-size: 4rem;
  margin-top: 1em;
  margin-bottom: 0;
  color: ${(props) => props.theme.primary};
  text-transform: capitalize;
`;

export const Desc = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 1rem;
  color: ${(props) => props.theme.caption_style};
  max-width: 400px;
  margin-bottom: 3em;
`;
