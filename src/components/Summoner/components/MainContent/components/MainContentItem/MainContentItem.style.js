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
    justify-content: space-between;
    background-color: ${isWin ? '#b0ceea' : '#d6b5b2'};
	border: 1px solid ${isWin ? '#549dc7' : '#c8817c'};

    &:last-child {
        margin-bottom: 0;
    }
`
);

export const ViewMore = styled.div(
	({ isWin }) => `
    width: 30px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: end;
    background-color: ${isWin ? '#7fb0e1' : '#e89c95'};
	border: 1px solid ${isWin ? '#549dc7' : '#c8817c'};
`
);
