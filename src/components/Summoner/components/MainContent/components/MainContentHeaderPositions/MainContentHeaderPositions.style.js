import styled from 'styled-components';

export const MainContentPositions = styled.div`
	padding: 16px;
	font-size: 12px;
	color: #666;
`;

export const PositionListWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	height: 100%;
`;

export const PositionItem = styled.div`
	display: flex;
	margin-bottom: 24px;

	&:last-child {
		margin-bottom: 0;
	}
`;

export const PositionTextWrapper = styled.div`
	margin-left: 8px;
	display: flex;
	flex-direction: column;
`;

export const PositionName = styled.div`
	color: #333;
	font-size: 14px;
`;

export const PositionWinRate = styled.div`
	display: flex;
	font-size: 11px;

	.blackish {
		color: #333;
	}

	.bold {
		font-weight: bold;
	}

	.left {
		color: #1f8ecd;
		padding-right: 6px;
		border-right: 1px solid #cdd2d2;
	}

	.right {
		padding-left: 6px;
	}
`;
