import React from 'react';
import { getWinRate } from '../../../../../../utils/gameUtils';
import { RecentItem } from './RecentItem.component';

export const RecentItemContainer = ({ recentWinRate }) => {
	let recentList = [];

	if (recentWinRate) {
		recentList = recentWinRate.map((ch, idx) => {
			const { imageUrl, name, wins, losses } = ch;

			const winRate = getWinRate(wins, losses);

			return (
				// key={idx}에서 id 대신 인덱스를 쓴 이유는, 중복되는 id가 있어서:
				<RecentItem
					recenChampion={{ imageUrl, name, winRate, wins, losses }}
					idx={idx}
					key={idx}
				/>
			);
		});
	}

	return recentList;
};
