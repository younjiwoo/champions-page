import styled from 'styled-components';

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

export const ItemListWrapper = styled.div`
	font-size: 12px;
	color: #666;
`;
