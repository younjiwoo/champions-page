import styled from 'styled-components';

export const SummonerProfileWrapper = styled.div`
	width: 1100px;
	margin: 0 auto;
	padding: 0 20px;
	box-sizing: border-box;
`;

export const PrevTiers = styled.ul`
	list-style: none;
	display: inline-block;
	margin: 15px 0 10px;
	padding: 0;
`;

export const Tier = styled.li`
	border: 1px solid gray;
	background-color: #e0e3e3;
	border: solid 1px #d0d3d4;
	border-radius: 2px;
	font-size: 11px;
	color: #657070;
	display: inline-block;
	padding: 3px;
	margin-right: 7px;

	.font-bold {
		font-weight: bold;
	}
`;

export const SummonerProfileContent = styled.div`
	display: flex;
	flex-direction: row;
`;

export const SummonerProfileImg = styled.div`
	width: 120px;
	height: 120px;
	position: relative;
	overflow: hidden;

	img {
		position: absolute;
		background-repeat: no-repeat;
		margin: 0 auto;

		&.user-img {
			height: 100px;
			width: 100px;
			top: 10px;
			left: 10px;
			background-size: cover;
		}

		&.border-img {
		}
	}
`;

export const SummonerProfileText = styled.div`
	margin-left: 17px;
`;

export const SummonerUsername = styled.div`
	font-size: 20px;
	font-weight: bold;
	margin-bottom: 4px;
`;

export const SummonerLadderRanking = styled.div`
	color: slategray;
	font-size: 11px;
`;
