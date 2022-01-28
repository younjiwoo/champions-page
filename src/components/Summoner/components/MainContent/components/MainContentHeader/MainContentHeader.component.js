import React from 'react';
import { MainContentHeaderWrapper } from './MainContentHeader.style';
import { MainContentHeaderChampionsContainer } from '../MainContentHeaderChampions';
import { MainContentHeaderSummaryContainer } from '../MainContentHeaderSummary';
import { MainContentHeaderPositionsContainer } from '../MainContentHeaderPositions/MainContentHeaderPositions.container';

export const MainContentHeader = ({
	champions,
	positions,
	summary,
	isLoading,
}) => {
	return (
		<MainContentHeaderWrapper>
			<MainContentHeaderSummaryContainer
				summary={summary}
				isLoading={isLoading}
			/>
			<MainContentHeaderChampionsContainer
				champions={champions}
				isLoading={isLoading}
			/>
			<MainContentHeaderPositionsContainer positions={positions} />
		</MainContentHeaderWrapper>
	);
};
