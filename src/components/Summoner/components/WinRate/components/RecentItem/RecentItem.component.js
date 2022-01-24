import React from 'react';
import { RecentWinRateItem } from './RecentItem.style';
import { BarGraphContainer } from '../BarGraph';

export const RecentItem = ({ recenChampion, idx }) => {
	const { imageUrl, name, winRate, wins, losses } = recenChampion;

	return (
		// 중복되는 id가 있어서 key={id}를 못 쓰고, 임시적으로 우선 idx를 씀:
		<RecentWinRateItem key={idx}>
			<img src={imageUrl} alt="챔피언 이름" />
			<span>{name}</span>
			<span className="winrate">{winRate}%</span>
			<BarGraphContainer wins={wins} losses={losses} />
		</RecentWinRateItem>
	);
};
