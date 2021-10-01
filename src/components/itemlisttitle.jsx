import React from 'react';
import styled from 'styled-components';

const StyledH2 = styled.div`
  padding: 0 var(--size-itemListTitle-padding);
`;

const ItemListTitle = ({ title, count }) => {
  return (
    <StyledH2>
      <h2>
        {title}({count})
      </h2>
    </StyledH2>
  );
};

export default React.memo(ItemListTitle);
