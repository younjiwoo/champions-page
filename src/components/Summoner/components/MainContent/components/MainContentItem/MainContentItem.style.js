import styled from 'styled-components';

export const MainContentItemWrapper = styled.li(
	({ isWin }) => `
    height: 96px;
    color: #555555;
    font-size: 11px;
    margin-bottom: 8px;
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: ${isWin ? '#b0ceea' : '#d6b5b2'};
	border: 1px solid ${isWin ? '#549dc7' : '#c8817c'};

    &:last-child {
        margin-bottom: 0;
    }
`
);

export const GameImageTextWrapper = styled.div`
	border: solid 1px red;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const GameImageWrapper = styled.div`
	display: flex;
	flex-direction: row;
	margin-bottom: 9px;
`;

export const SpellImageWrapper = styled.div`
	margin-left: 6px;
	width: 48px;

	img {
		width: 22px;
		height: 22px;
		border-radius: 2px;
		margin: 0 4px 2px 0;

		&:nth-child(2n) {
			margin-right: 0;
		}
	}
`;

export const ChampionImage = styled.img`
	width: 46px;
	height: 46px;
	border-radius: 50%;
`;

export const KdaWrapper = styled.div`
	border: solid 1px red;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const KdaString = styled.div`
	margin-bottom: 6px;
	font-size: 15px;
`;

export const Kda = styled.div`
	margin-bottom: 7px;

	.blackish {
		color: #333;
	}
`;

export const StatsWrapper = styled.div`
	border: solid 1px red;
	text-align: center;

	div {
		margin-bottom: 6px;

		&:last-child {
			margin-bottom: 0;
		}
	}
`;

export const ItemsWrapper = styled.div`
	width: 100px;

	img {
		width: 22px;
		height: 22px;
		border-radius: 2px;
		margin: 0 4px 2px 0;

		&:nth-child(4n) {
			margin-right: 0;
		}
	}
`;
