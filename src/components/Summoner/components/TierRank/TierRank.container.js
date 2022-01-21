import React, { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import { useSummoner } from '../../../../store/summoner-context';
import { TierRank } from './TierRank.component';

export const TierRankContainer = () => {
	const [soloRank, setSoloRank] = useState(null);
	const [freeRank, setFreeRank] = useState(null);
	const { summoner } = useSummoner();

	useEffect(() => {
		if (summoner && summoner.leagues) {
			const { leagues } = summoner;

			leagues.forEach((league, idx) => {
				const { tierRank, wins, losses } = league;
				const { imageUrl, tier, shortString, lp, name } = tierRank;

				const tierText = `${tier} ${shortString.replaceAll(
					/[a-z]/gi,
					''
				)}`;
				const winRateWithDecimals = (wins / (wins + losses)) * 100;
				const winRate = Math.trunc(winRateWithDecimals);

				const rankData = {
					imageUrl,
					tierText,
					lp,
					wins,
					losses,
					winRate,
					name,
				};
				idx === 0 ? setSoloRank(rankData) : setFreeRank(rankData);
			});
		}
	}, [summoner]);

	return (
		<>
			<TierRank {...soloRank} />
			<TierRank {...freeRank} />
		</>
	);
};
