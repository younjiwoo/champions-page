import React from 'react';
import { MainContentItemSpellsContainer } from './components/MainContentItemSpells';
import { MainContentItemKdaContainer } from './components/MainContentItemKda';
import { MainContentItemTimeContainer } from './components/MainContentItemTime/MainContentItemTime.container';
import { MainContentItemWrapper, ViewMore } from './MainContentItem.style';
import { MainContentItemStatsContainer } from './components/MainContentItemStats';
import { MainContentItemGameItemsContainer } from './components/MainContentItemGameItems/MainContentItemGameItems.container';
import { MainContentItemTeamsContainer } from './components/MainContentItemTeams';

export const MainContentItem = ({ game }) => {
	// console.log('game: ', game);
	console.log('game: ', game);
	console.log('game: ', game.needRenew);
	return (
		<MainContentItemWrapper isWin={game?.isWin}>
			<MainContentItemTimeContainer game={game} />
			<MainContentItemSpellsContainer game={game} />
			<MainContentItemKdaContainer game={game} />
			<MainContentItemStatsContainer game={game} />
			<MainContentItemGameItemsContainer game={game} />
			<MainContentItemTeamsContainer
				gameId={game.gameId}
				summonerName={game.summonerName}
			/>
			<ViewMore isWin={game?.isWin} />
		</MainContentItemWrapper>
	);
};
