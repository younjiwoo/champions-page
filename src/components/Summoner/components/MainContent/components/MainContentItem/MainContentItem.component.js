import React from 'react';
import { MainContentItemSpellsContainer } from './components/MainContentItemSpells';
import { MainContentItemKdaContainer } from './components/MainContentItemKda';
import { MainContentItemTimeContainer } from './components/MainContentItemTime/MainContentItemTime.container';
import { MainContentItemWrapper } from './MainContentItem.style';
import { MainContentItemStatsContainer } from './components/MainContentItemStats';
import { MainContentItemGameItemsContainer } from './components/MainContentItemGameItems/MainContentItemGameItems.container';

export const MainContentItem = ({ game }) => {
	return (
		<MainContentItemWrapper isWin={game?.isWin}>
			<MainContentItemTimeContainer game={game} />
			<MainContentItemSpellsContainer game={game} />
			<MainContentItemKdaContainer game={game} />
			<MainContentItemStatsContainer game={game} />
			<MainContentItemGameItemsContainer game={game} />
		</MainContentItemWrapper>
	);
};
