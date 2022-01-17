import React from 'react';
import { SummonerHeader, SummonerContentLayout } from './';
import { SummonerStatsWrapper, Border } from './SummonerStats.style';

export const SummonerStats = () => {
	return (
		<SummonerStatsWrapper>
			SummonerStats
			<SummonerHeader></SummonerHeader>
			<Border />
			<SummonerContentLayout></SummonerContentLayout>
		</SummonerStatsWrapper>
	);
};
