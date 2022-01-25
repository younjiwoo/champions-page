import React, { useState } from 'react';
import {
	MainContentHeaderWrapper,
	MainContentPositions,
} from './MainContentHeader.style';
import { MainContentHeaderChampionsContainer } from '../MainContentHeaderChampions';
import { MainContentHeaderSummaryContainer } from '../MainContentHeaderSummary';
import { MainContentChampions } from '../MainContentHeaderChampions/MainContentHeaderChampions.style';

export const MainContentHeader = ({
	champions,
	positions,
	summary,
	isLoading,
}) => {
	// console.log('---champions---', champions);
	// console.log('---positions---', positions);
	// console.log('---summary---', summary);

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
			<MainContentPositions>f</MainContentPositions>
		</MainContentHeaderWrapper>
	);
};
