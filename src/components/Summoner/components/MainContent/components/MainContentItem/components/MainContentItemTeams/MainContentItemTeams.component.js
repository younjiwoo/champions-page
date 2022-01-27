import React from 'react';
import {
	MainContentItemTeamsWrapper,
	TeamWrapper,
	PlayerWrapper,
	PlayerName,
	PlayerImage,
} from './MainContentItemTeams.style';

export const MainContentItemTeams = ({ teams }) => {
	return (
		<MainContentItemTeamsWrapper>
			{teams?.map((team) => {
				const { teamId, players } = team;

				return (
					<TeamWrapper key={teamId}>
						{players.map((player) => {
							return (
								<PlayerWrapper key={player.summonerId}>
									<PlayerImage
										src={player.champion.imageUrl}
										alt={player.summonerName}
									/>
									<PlayerName>
										{player.summonerName}
									</PlayerName>
								</PlayerWrapper>
							);
						})}
					</TeamWrapper>
				);
			})}
		</MainContentItemTeamsWrapper>
	);
};
