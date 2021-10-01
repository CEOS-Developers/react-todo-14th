import React from 'react';
import styled from 'styled-components';

const StyledLi = styled.li`
  display: flex;
  justify-content: space-between;
`;
const Item = ({ content }) => {
  return (
    <StyledLi>
      <span>{content}</span>
      <button>
        <i className="fas fa-trash"></i>
      </button>
    </StyledLi>
  );
};

export default Item;
