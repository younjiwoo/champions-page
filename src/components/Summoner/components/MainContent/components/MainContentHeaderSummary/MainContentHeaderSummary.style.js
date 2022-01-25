import styled from 'styled-components';

export const MainContentSummary = styled.div`
	border-right: solid 1px #cdd2d2;
	display: flex;
	align-items: center;
	justify-content: space-around;
`;

export const GameWinsLosses = styled.div`
	font-size: 12px;
	color: #666;
	margin-bottom: 14px;
`;

export const PieChartBox = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const KdaBox = styled.div`
	font-size: 11px;
	display: flex;
	flex-direction: column;
	align-items: center;

	.red {
		color: #c6443e;
	}
`;

export const KdaString = styled.div`
	font-weight: bold;
	margin-bottom: 6px;
`;

export const Kda = styled.div`
	font-size: 16px;

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

	.bold {
		font-weight: bold;
		margin-right: 5px;
	}
`;
