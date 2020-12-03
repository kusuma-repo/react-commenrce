import styled from 'styled-components';

export const SignInAndSignUpContainer = styled.div`
  width: 950px;
  display: flex;
  justify-content: space-between;
  margin: 30px auto;
  @media screen and (max-width: 768px) {
    display: block;
    width: 70vw;
    margin: 30px auto;
  }
`;
