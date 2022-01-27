import styled from 'styled-components';

export const MainContentItemWrapper = styled.li(
	({ isWin }) => `
    height: 96px;
    color: #555555;
    font-size: 11px;
    margin-bottom: 8px;
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: ${isWin ? '#b0ceea' : '#d6b5b2'};
	border: 1px solid ${isWin ? '#549dc7' : '#c8817c'};

    &:last-child {
        margin-bottom: 0;
    }
`
);
