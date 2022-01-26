import React from 'react';
import { MainContentItemStats } from './MainContentItemStats.component';

export const MainContentItemStatsContainer = ({ game }) => {
	let gameObj = {};

	if (game) {
		const { champion, stats } = game;
		const { level } = champion;
		const { cs, csPerMin, contributionForKillRate } = stats.general;

		gameObj = {
			level,
			cs,
			csPerMin,
			contributionForKillRate,
		};
	}

	return <MainContentItemStats gameObj={gameObj} />;
};
