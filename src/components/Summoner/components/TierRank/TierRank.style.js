import styled from 'styled-components';

export const TierRankWrapper = styled.section(
	({ isSoloRank }) => `
	border-radius: 2px;
	border: solid 1px #cdd2d2;
	background-color: #f2f2f2;
	display: grid;
	grid-template-columns: 35% 65%;
	height: ${isSoloRank ? '124px' : '98px'};
	box-sizing: border-box;
	font-size: 12px;
	color: #879292;

	img {
		width: ${isSoloRank ? '104px' : '64px'};
		height: ${isSoloRank ? '104px' : '64px'};
	}

	.rank-img {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.rank-info {
		display: flex;
		flex-direction: column;
		justify-content: center;
		line-height: 1.4;
	}
	
	.rank-tier {
		color: #1f8ecd;
		font-size: ${isSoloRank ? '15px' : '13px'};
  		font-weight: bold;
	}

	.rank-lp {
		color: #555e5e;
		font-weight: bold;
	}
`
);

export const BarTrack = styled.div(
	({ bgcolor }) => `
    width: 100%;
    height: 20px;
    border-radius: 75px;
    background-color: ${bgcolor};
    margin-bottom:8px;
`
);
