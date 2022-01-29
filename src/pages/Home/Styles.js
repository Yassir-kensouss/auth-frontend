import styled from "styled-components";

export const Wrap = styled.section`
  width: 100%;
  height: 90vh;
  background-color: ${(props) => props.theme.bg_color};
  padding: 3em 0;
`;
export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 1em;
  }
`;
export const Col1 = styled.div``;
export const Col2 = styled.div``;
export const Heading = styled.h1`
  font-size: 4.375rem;
  font-family: "Roboto", sans-serif;
  font-weight: 600;
  color: ${(props) => props.theme.text_title};

  .heading-block {
    display: block;
    span {
      color: ${(props) => props.theme.primary};
    }
  }
`;
export const Desc = styled.p`
  font-size: 1rem;
  font-family: "Roboto", sans-serif;
  color: ${(props) => props.theme.caption_style};
  line-height: 1.75;
  margin-top: 1.875em;
`;
export const Features = styled.ul`
  display: flex;
  margin-top: 2.5em;
`;
export const Item = styled.li`
  margin-right: 3em;
  display: flex;
  align-items: center;
  font-size: 1rem;
  font-family: "Roboto", sans-serif;
  color: ${(props) => props.theme.caption_style};
  .outer-dot {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background-color: rgba(238, 149, 145, 0.32);
    margin-right: 0.5em;
    display: grid;
    place-items: center;
    .inner-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: rgba(238, 149, 145, 1);
    }
  }
`;
export const Img = styled.img``;
export const Alert = styled.aside`
  display: inline-block;
  background-color: ${(props) => props.theme.primary};
  padding: 1.5em 2em;
  border-radius: 10px;
  margin-top: 2.5em;
  box-shadow: rgba(238, 149, 145, 0.4) 0px 20px 25px -5px,
    rgba(238, 149, 145, 0.08) 0px 10px 10px -5px;

  h3 {
    font-size: 1.25em;
    font-family: "Roboto", sans-serif;
    color: ${(props) => props.theme.gray};
    font-weight: 500;
  }

  p {
    font-size: 0.875em;
    font-family: "Roboto", sans-serif;
    color: ${(props) => props.theme.gray};
    font-weight: 400;
    margin-top: 0.8em;
  }
`;
