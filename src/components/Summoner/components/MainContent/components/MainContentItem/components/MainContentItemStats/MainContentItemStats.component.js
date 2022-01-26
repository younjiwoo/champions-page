import React from 'react';
import { StatsWrapper } from './MainContentItemStats.style';

export const MainContentItemStats = ({ gameObj }) => {
	const { level, cs, csPerMin, contributionForKillRate } = gameObj;

	return (
		<StatsWrapper>
			<div>레벨{level}</div>
			<div>
				{cs} ({csPerMin}) CS
			</div>
			<div className="scarlet">킬관여 {contributionForKillRate}</div>
		</StatsWrapper>
	);
};
