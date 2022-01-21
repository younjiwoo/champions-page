import React from 'react';
import { getWinRate } from '../../../../../../utils';
import { BarGraphContainer } from '../BarGraph';
import { ChampionListContainer } from '../ChampionList';
import {
	ChampionItem,
	ChampionImage,
	TopRow,
	BottomRow,
	RecentWinRateItem,
} from './WinRateList.style';

// 얘는 어떤 탭이 셀렉됐는지 알 필요도 없음. 그냥 리스트만 받아서 보여주기?
export const WinRateList = ({ selectedTab, champions, recentWinRate }) => {
	console.log(' champions: ', champions);
	console.log(' recentWinRate: ', recentWinRate);

	return selectedTab === 'champ' ? (
		<ChampionListContainer champions={champions} />
	) : (
		''
	);
	// recentWinRate.map((champ, idx) => {
	// 	const { imageUrl, losses, name, wins } = champ;
	// 	const winRate = getWinRate(wins, losses);

	// 	return (
	// 		// 중복되는 id가 있어서 key={id}를 못 쓰고, 임시적으로 우선 idx를 씀:
	// 		<RecentWinRateItem key={idx}>
	// 			<img src={imageUrl} alt="챔피언 이름" />
	// 			<span>{name}</span>
	// 			<span className="winrate">{winRate}%</span>
	// 			<BarGraphContainer wins={wins} losses={losses} />
	// 		</RecentWinRateItem>
	// 	);
	// })
};
