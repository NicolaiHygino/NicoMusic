import styled from 'styled-components';

export const Container = styled.section`
  padding: 0 10px;
  padding-top: 50px;

  @media screen and (max-width: 650px) {
    padding: 30px 10px 10px 10px;
  }

  @media screen and (max-width: 550px) {
    padding: 30px 0 10px 0;
  }
`;

export const InputField = styled.input`
  position: fixed;
  top: 20px;
  width: 450px;
  color: black;
  border: 0;
  border-radius: 30px;
  padding: .8em 1em;

  @media screen and (max-width: 650px) {
    top: 0;
    left: 0;
    font-size: 1em;
    border-radius: 0;
    width: 100vw;
    color: white;
    background-color: var(--track-bg);
    padding: .8em 1em;
  }
`;

export const SearchList = styled.ul`
  padding: 10px;
  
  @media screen and (max-width: 650px) {
    padding: 10px 0;
  }
`;
