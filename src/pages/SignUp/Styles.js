import styled from "styled-components";
import signup from "../../assets/signup.jpg";

export const Wrap = styled.div`
  background-color: ${(props) => props.theme.bg_color};
  height: 100vh;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 40% 60%;
  height: 100%;
`;
export const Col1 = styled.div``;
export const Col2 = styled.div`
  background-image: url(${signup});
  background-position: center;
  background-size: cover;
  position: relative;
  display: flex;
  align-items: center;
  z-index: 2;
  padding-left: 3em;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    background-color: #ff9a8b;
    background-image: linear-gradient(
      90deg,
      #ff9a8b 0%,
      #ff6a88 55%,
      #ff99ac 100%
    );

    opacity: 90%;
    width: 100%;
    height: 100%;
    z-index: -1;
  }

  h2 {
    font-family: "Roboto", sans-serif;
    font-size: 2.5rem;
    line-height: 1.2;
    color: white;
  }
  p {
    font-family: "Roboto", sans-serif;
    font-size: 1rem;
    line-height: 1.5;
    color: white;
    width: 50%;
    margin-top: 1.5em;
  }
`;

export const Center = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;
export const Logo = styled.img`
  width: 200px;
`;
export const FormWrap = styled.div`
  width: 70%;
  margin-top: 2em;
`;
export const Form = styled.form``;
export const Input = styled.input`
  font-family: "Roboto", sans-serif;
  font-size: 0.92rem;
  background: none;
  border: none;
  border-bottom: 0.14em solid ${(props) => props.theme.text_title};
  width: 100%;
  padding: 0.8em 1em 0.8em 0;
  outline: none;
  transition: 0.2s ease-in-out;

  &::placeholder {
    font-family: "Roboto", sans-serif;
    font-size: 0.92rem;
    font-weight: 400;
    color: #c9bdbd;
  }

  &:focus {
    border-bottom: 0.14em solid ${(props) => props.theme.primary};
    background: #f4f2f2;
    padding: 0.8em 1em;
  }
`;
export const InputDiv = styled.div`
  margin-bottom: 1.5em;
`;
export const Submit = styled.button`
  background: ${(props) => props.theme.primary};
  border: none;
  width: 100%;
  padding: 1em;
  margin-top: 1em;
  color: ${(props) => props.theme.gray};
  font-family: "Roboto", sans-serif;
  box-shadow: rgba(238, 149, 145, 0.1) 0px 20px 25px -5px,
    rgba(238, 149, 145, 0.04) 0px 10px 10px -5px;
  transition: 0.2s ease-in-out;

  &:hover {
    background-color: #e18a86;
  }

  &:active {
    background-color: #f5adaa;
  }
`;
export const Button = styled.button`
  position: absolute;
  top: 5%;
  right: 2%;
  z-index: 4;
  display: grid;
  place-items: center;
  background: ${(props) => props.theme.text_title};
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  transition: 0.12s ease-in-out;
  &:hover {
    opacity: 0.8;
  }
  &:active {
    transform: scale(0.95);
  }

  svg {
    color: white;
  }
`;

export const AHA = styled.p`
  margin: 1.5em 0;
  text-align: center;
  font-family: "Roboto", sans-serif;
  color: ${(props) => props.theme.text_title};
`;
