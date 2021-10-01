import styled from 'styled-components';

export const ListHeader = styled.h3`
    margin-left: 15px;
    display: flex;
`
export const ListContainer = styled.ul`
    flex: 1;
    margin-left: 15px;
    margin-right: 15px;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;

    /* Hide scrollbar for Chrome, Safari and Opera */
    &::-webkit-scrollbar {
        display: none;
    }
`

export const DeleteBtn = styled.button`
    width: 20px;
    height: 20px;
    visibility: hidden;
`
export const List = styled.li`
    display: flex;
    flex-direction: row;
    justify-content:space-between;
    margin-top:5px;
    margin-bottom:5px;

    &:hover .delete-button{
        visibility: visible;
    }
`