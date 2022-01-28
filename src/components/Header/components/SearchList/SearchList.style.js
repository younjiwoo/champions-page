import styled from 'styled-components';

export const SearchListWrapper = styled.div`
	/* height: 320px; */
	position: absolute;
	width: 100%;
	top: 38px;
	background-color: #fff;
	border-radius: 2px;
	box-shadow: 0 2px 4px 0 rgb(0 0 0 / 50%);
`;

export const SearchListItem = styled.div`
	padding: 7px 17px;
	overflow: hidden;
	box-sizing: border-box;
	width: 100%;
	display: flex;

	&:hover {
		background-color: #e7f5fe;
	}

	img {
		width: 36px;
		height: 36px;
		margin-right: 14px;
		border-radius: 50%;
	}
`;

export const ChampionName = styled.div`
	font-size: 14px;
	color: #333;
`;

export const ChampionTierRank = styled.div`
	margin-top: 2px;
	font-size: 12px;
	color: #666;
`;
