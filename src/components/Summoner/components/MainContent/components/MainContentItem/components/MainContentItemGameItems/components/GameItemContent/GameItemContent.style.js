import styled from 'styled-components';

export const Item = styled.div`
	overflow: hidden;
	height: 100%;
	width: 100%;
	border-radius: 2px;
`;

export const ItemImage = styled.img`
	width: 100%;
`;

export const NoItem = styled.div(
	({ isWin }) => `
	height: 100%;
	width: 100%;
	background-color: ${isWin ? '#7aa5c3' : '#cb9e9a'};
`
);

export const ItemTooltipWrapper = styled.div`
	display: inline-block;
	width: 22px;
	height: 22px;
	margin: 0 4px 2px 0;
	position: relative;

	&:nth-child(4n) {
		margin-right: 0;
	}
`;
