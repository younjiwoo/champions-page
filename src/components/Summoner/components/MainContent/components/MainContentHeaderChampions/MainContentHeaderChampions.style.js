import styled from 'styled-components';

export const MainContentChampions = styled.div`
	border-right: solid 1px #cdd2d2;
	padding: 16px;
`;

export const ChampionItem = styled.div`
	height: 34px;
	display: flex;
	align-items: center;
	margin-bottom: 12px;

	&:last-child {
		margin-bottom: 0;
	}

	img {
		height: 100%;
		margin-right: 8px;
		border-radius: 50%;
	}
`;

export const ChampionTextWrapper = styled.div`
	display: flex;
	flex-direction: column;
	font-size: 11px;
`;

export const ChampionName = styled.div`
	font-size: 14px;
`;

export const ChampionStats = styled.div`
	display: flex;

	.left {
		padding-right: 6px;
		border-right: 1px solid #cdd2d2;

		.bold {
			font-weight: bold;
		}
	}

	.right {
		padding-left: 6px;
		font-weight: bold;
	}

	.red {
		color: #c6443e;
	}

	.green {
		color: #2daf7f;
	}

	.blue {
		color: #1f8ecd;
	}

	.yellow {
		color: #e19205;
	}
`;

export const NoChampion = styled.div`
	color: #999;
	font-size: 11px;
`;
