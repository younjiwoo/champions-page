import React from 'react';
import { ChampionItemContainer } from '../ChampionItem/ChampionItem.container';
import { RecentItemContainer } from '../RecentItem';

// 얘는 어떤 탭이 셀렉됐는지 알 필요도 없음. 그냥 리스트만 받아서 보여주기?
export const WinRateList = ({ selectedTab, champions, recentWinRate }) => {
	// console.log(' champions: ', champions);
	// console.log(' recentWinRate: ', recentWinRate);

	return selectedTab === 'champ' ? (
		<ChampionItemContainer champions={champions} />
	) : (
		<RecentItemContainer recentWinRate={recentWinRate} />
	);
};
