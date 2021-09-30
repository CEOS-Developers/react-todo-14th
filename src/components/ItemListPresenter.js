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
