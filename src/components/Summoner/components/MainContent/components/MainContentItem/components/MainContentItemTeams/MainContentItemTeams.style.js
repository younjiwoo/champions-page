import styled from 'styled-components';

export const MainContentItemTeamsWrapper = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	margin-left: 11px;
`;

export const TeamWrapper = styled.div``;

export const PlayerWrapper = styled.div`
	display: flex;
	margin-bottom: 2px;

	&:last-child {
		margin-bottom: 0;
	}
`;

export const PlayerName = styled.div`
	overflow: hidden;
	text-overflow: ellipsis;
	width: 57px;
	white-space: nowrap;
`;

export const PlayerImage = styled.img`
	width: 16px;
	height: 16px;
	margin-right: 3px;
	border: solid 1px #0d0819;
	box-sizing: border-box;
`;
