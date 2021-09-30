import styled from 'styled-components';

export const Container = styled.div`
  width: 350px;
  height: 600px;

  display: flex;
  flex-direction: column;
  align-items: stretch;

  box-shadow: 0 0 25px rgba(0, 0, 0, 0.25);
  background: white;

  @media screen and (max-width: 600px) {
    flex-direction: column;
    align-items: stretch;
    width: 280px;
    height: 480px;
  }
`