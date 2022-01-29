import styled from "styled-components";

export const Wrap = styled.header`
  width: 100%;
  height: 112px;
  background-color: ${(props) => props.theme.bg_color};
`;
export const Grid = styled.div`
  display: grid;
  grid-template-columns: 20% 1fr 13%;
  height: 100%;
  align-items: center;
`;
export const Col1 = styled.div``;
export const Col2 = styled.div`
  justify-self: end;
`;
export const Nav = styled.nav``;
export const List = styled.ul`
  display: flex;
`;
export const Item = styled.li`
  a {
    font-family: "Roboto", sans-serif;
    margin-right: 1.5em;
    font-size: 0.95rem;
    font-weight: 500;
    color: ${(props) => props.theme.text_title};
    text-decoration: none;
    transition: 0.2s color ease-in-out;
  }

  &:hover {
    a {
      color: ${(props) => props.theme.primary};
    }
  }
`;
export const Col3 = styled.div`
  justify-self: end;
  .register {
    font-family: "Roboto", sans-serif;
    font-size: 0.95rem;
    font-weight: 500;
    color: white;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    background-color: ${(props) => props.theme.primary};
    padding: 0.8em 1.4em;
    border-radius: 6px;
    box-shadow: rgba(238, 149, 145, 0.1) 0px 20px 25px -5px,
      rgba(238, 149, 145, 0.04) 0px 10px 10px -5px;

    &:hover {
      background-color: #e18a86;
    }

    &:active {
      background-color: #f5adaa;
    }
  }
`;
export const Button = styled.span``;
export const SignOut = styled.span`
  font-family: "Roboto", sans-serif;
  margin-right: 1.5em;
  font-size: 0.95rem;
  font-weight: 500;
  color: ${(props) => props.theme.text_title};
  transition: 0.2s color ease-in-out;
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.primary};
  }
`;
