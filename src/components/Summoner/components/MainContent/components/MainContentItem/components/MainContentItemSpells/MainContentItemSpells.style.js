import styled from 'styled-components';

export const GameImageTextWrapper = styled.div`
	width: 100px;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const GameImageWrapper = styled.div`
	display: flex;
	flex-direction: row;
	margin-bottom: 9px;
`;

export const SpellImage = styled.img`
	width: 22px;
	height: 22px;
	border-radius: 2px;
	margin: 0 4px 2px 0;

	&:nth-child(2n) {
		margin-right: 0;
	}
`;

export const SpellImageWrapper = styled.div`
	margin-left: 6px;
	width: 48px;
`;

export const ChampionImage = styled.img`
	width: 46px;
	height: 46px;
	border-radius: 50%;
`;
