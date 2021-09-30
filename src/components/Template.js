import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 23rem;
  height: 40rem;
  border-radius: 10px;
  box-shadow: 0 0 25px gray;
  background: #c8c1e4;
  padding-left: 1rem;
`;

const Content = styled.div``;

function Template({ children }) {
  return (
    <Container>
      <header>
        <h2>오늘 할 일</h2>
      </header>
      <Content>{children}</Content>
    </Container>
  );
}

export default Template;
