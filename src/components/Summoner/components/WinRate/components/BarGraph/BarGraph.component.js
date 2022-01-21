import React from 'react';
import {
	BarGraphWrapper,
	BarWrapper,
	BlueBar,
	RedBar,
	BarText,
} from './BarGraph.style';

export const BarGraph = ({ wins, losses, winRate, lossRate }) => {
	return (
		<BarGraphWrapper>
			<BarWrapper winRate={winRate} lossRate={lossRate}>
				<BlueBar />
				<RedBar />
			</BarWrapper>
			<BarText className="left">{wins}승</BarText>
			<BarText className="right">{losses}패</BarText>
		</BarGraphWrapper>
	);
};
