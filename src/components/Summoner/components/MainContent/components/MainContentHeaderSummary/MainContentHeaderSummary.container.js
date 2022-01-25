import React from 'react';
import {
	getKda,
	getKdaColor,
	getWinRate,
} from '../../../../../../utils/gameUtils';
import { MainContentHeaderSummary } from './MainContentHeaderSummary.component';

export const MainContentHeaderSummaryContainer = ({ summary, isLoading }) => {
	if (!isLoading && summary) {
		const { wins, losses, kills, deaths, assists } = summary;

		const kda = getKda(kills, deaths, assists);
		const winRate = getWinRate(wins, losses);
		const kdaColor = getKdaColor(kda);

		const props = {
			gameWinsLosses: `${wins + losses}전 ${wins}승 ${losses}패`,
			winRate,
			kills,
			deaths,
			assists,
			kda,
			kdaColor,
		};

		return <MainContentHeaderSummary props={{ ...props }} />;
	} else {
		return <>loading...</>;
	}
};
