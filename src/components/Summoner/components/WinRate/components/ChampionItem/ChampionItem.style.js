import styled from 'styled-components';

export const ChampionItemWrapper = styled.div`
	height: 53px;
	padding: 0 15px;
	border-bottom: 1px solid #cdd2d2;
	display: grid;
	align-items: center;
	justify-content: space-between;
	grid-template-columns: 45px 80px 80px 35px;
	grid-column-gap: 10px;

	&:last-child {
		border-bottom: none;
	}
`;

export const ChampionImage = styled.img`
	width: 45px;
	height: 45px;
	border-radius: 50%;
`;

export const TopRow = styled.div`
	font-size: 13px;
	font-weight: bold;
	color: #5e5e5e;

	&.red {
		color: #c6443e;
	}

	&.green {
		color: #2daf7f;
	}

	&.blue {
		color: #1f8ecd;
	}

	&.yellow {
		color: #e19205;
	}
`;

export const BottomRow = styled.div`
	font-size: 11px;
	color: #879292;
`;
