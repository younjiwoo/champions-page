import styled from 'styled-components';

export const RecentWinRateItem = styled.div`
	height: 48px;
	padding: 0 15px;
	border-bottom: 1px solid #cdd2d2;
	display: grid;
	align-items: center;
	justify-content: space-between;
	grid-template-columns: 32px 60px 30px 123px;
	grid-column-gap: 10px;
	font-size: 13px;
	color: #5e5e5e;
	font-weight: bold;

	&:last-child {
		border-bottom: none;
	}

	img {
		width: 100%;
		border-radius: 50%;
	}

	.winrate {
		color: #879292;
	}
`;
