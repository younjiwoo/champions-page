import React from 'react';
import { ChampionItemContainer } from '../ChampionItem/ChampionItem.container';
import { RecentItemContainer } from '../RecentItem';

export const WinRateList = ({ selectedTab, champions, recentWinRate }) => {
	return selectedTab === 'champ' ? (
		<ChampionItemContainer champions={champions} />
	) : (
		<RecentItemContainer recentWinRate={recentWinRate} />
	);
};
