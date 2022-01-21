import React from 'react';
import { BarGraph } from './BarGraph.component';
import { getWinRate, getLossRate } from '../../../../../../utils';

export const BarGraphContainer = ({ wins, losses }) => {
	const winRate = getWinRate(wins, losses);
	const lossRate = getLossRate(wins, losses);

	return (
		<BarGraph
			wins={wins}
			losses={losses}
			winRate={winRate}
			lossRate={lossRate}
		/>
	);
};
