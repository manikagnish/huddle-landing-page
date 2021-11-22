import styled from "styled-components";

export const StyledCta = styled.div`
  background-color: #ffff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  width: 50vw;
  margin: 0 auto;
  text-align: center;
  padding: 3em 1em;
  color: #000;

  position: absolute;
  top: -5%;
  left: 50%;

  transform: translate(-50%, -50%);

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 80vw;
  }
`;
