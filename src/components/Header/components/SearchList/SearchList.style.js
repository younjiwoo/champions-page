import styled from 'styled-components';

export const SearchListWrapper = styled.div`
	height: 200px;
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

export const RecentSearchesAndBookmark = styled.div`
	ul {
		list-style-type: none;
		margin: 0;
		padding: 0;
		display: grid;
		grid-template-columns: 50% 50%;
		align-items: center;
		justify-content: center;
		height: 40px;
		background: #e3e3e3;
		color: #9c9c9c;

		li {
			display: flex;
			height: 100%;
			align-items: center;
			justify-content: center;

			&.active {
				color: #4a4a4a;
				background-color: #fff;
			}

			a {
				display: flex;
				height: 100%;
				width: 100%;
				font-size: 14px;
				align-items: center;
				justify-content: center;
				text-decoration: none;
				color: inherit;
			}
		}
	}
`;
