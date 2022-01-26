import styled from 'styled-components';

export const GameTimeWrapper = styled.div`
	border: solid 1px red;
	height: 100%;
	width: 66px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	text-align: center;

	.title {
		margin-bottom: 4px;
	}
`;

export const Bar = styled.div(
	({ isWin }) => `
width: 27px;
margin: 5px auto;
border-bottom: solid 1px ${isWin ? '#94b9d6' : '#d0a6a5'};
`
);

export const GameTimeTop = styled.div``;

export const GameTimeBottom = styled.div`
	.blue {
		color: #2c709b;
	}
`;
