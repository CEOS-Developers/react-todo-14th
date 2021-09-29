import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 360px;
  height: 600px;
  border-radius: 10px;
  box-shadow: 0 0 25px gray;
`;

function App() {
  return (
    <Wrapper>
      <Container>
        <h2>TO DO LIST</h2>
      </Container>
    </Wrapper>
  );
}

export default App;
