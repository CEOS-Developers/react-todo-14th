import React from 'react';
import Item from './item';
import styled from 'styled-components';
const StyledUl = styled.div`
  overflow-y: scroll;
  height: 80%;
`;

const ItemList = ({ itemList, type, updateItemList }) => {
  return (
    <StyledUl>
      <ul>
        {/* itemList가 undefined면 에러
        데이터가 없어도 리액트는 렌더링이 실행됨*/}
        {itemList &&
          itemList.map(
            (element) =>
              element.state === type && (
                <Item
                  key={element.id}
                  id={element.id}
                  content={element.content}
                  state={type}
                  updateItemList={updateItemList}
                  itemList={itemList}
                ></Item>
              )
          )}
      </ul>
    </StyledUl>
  );
};

export default React.memo(ItemList);
