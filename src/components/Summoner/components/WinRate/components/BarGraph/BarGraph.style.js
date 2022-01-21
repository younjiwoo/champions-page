import styled from 'styled-components';

export const BarGraphWrapper = styled.div`
	width: 123px;
	height: 24px;
	color: #fff;
	position: relative;
	display: flex;
	align-items: center;
`;

export const BarWrapper = styled.div(
	({ winRate, lossRate }) => `
	position: absolute;
    width: 100%;
    height: 100%;
    display: grid;
	grid-template-columns: ${winRate}% ${lossRate}%;
`
);

export const BlueBar = styled.div`
	background-color: #1f8ecd;
	border-radius: 4px 0 0 4px;
`;

export const RedBar = styled.div`
	background-color: #ee5a52;
	border-radius: 0 4px 4px 0;
	text-align: right;
`;

export const BarText = styled.div`
	position: absolute;
	display: flex;
	justify-content: space-between;
	align-items: center;

	&.left {
		left: 4px;
	}

	&.right {
		right: 4px;
	}
`;
