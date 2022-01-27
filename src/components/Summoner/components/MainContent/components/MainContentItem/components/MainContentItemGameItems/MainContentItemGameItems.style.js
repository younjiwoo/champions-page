import styled from 'styled-components';

export const ItemsWrapper = styled.div`
	width: 100px;
`;

export const Item = styled.div`
	display: inline-block;
	width: 22px;
	height: 22px;
	border-radius: 2px;
	margin: 0 4px 2px 0;
	overflow: hidden;
	position: relative;

	&:nth-child(4n) {
		margin-right: 0;
	}
`;

export const ItemImage = styled.img`
	width: 100%;
`;

export const WardTextWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 5px;
`;

export const WardImage = styled.img`
	width: 16px;
	height: 16px;
	margin-right: 4px;
`;

export const NoItem = styled.div(
	({ isWin }) => `
	height: 100%;
	width: 100%;
	background-color: ${isWin ? '#7aa5c3' : '#cb9e9a'};
`
);

export const ItemTooltipWrapper = styled.div``;
