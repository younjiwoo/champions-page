import React from 'react';
import { getWinRate } from '../../../../../../utils/gameUtils';
import { getPositionInfo } from '../../../../../../utils/positionUtils';
import { MainContentHeaderPositions } from './MainContentHeaderPositions.component';

export const MainContentHeaderPositionsContainer = ({ positions }) => {
	let positionList = [];

	if (positions) {
		positionList = positions.map((pos) => {
			const { wins, losses, position } = pos;

			const winRate = getWinRate(wins, losses);
			const { kor, imageUrl } = getPositionInfo(position);

			return {
				winRate,
				position,
				kor,
				imageUrl,
			};
		});
	}

	return <MainContentHeaderPositions positionList={positionList} />;
};
