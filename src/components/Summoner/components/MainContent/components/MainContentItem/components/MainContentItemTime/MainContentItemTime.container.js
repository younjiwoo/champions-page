import React from 'react';
import {
	getElapsedTime,
	getMinSec,
} from '../../../../../../../../utils/dateUtils';
import { MainContentItemTime } from './MainContentItemTime.component';

export const MainContentItemTimeContainer = ({ game }) => {
	let gameObj = {};

	if (game) {
		const { gameType, isWin, createDate, gameLength } = game;
		const elapsedTime = getElapsedTime(createDate);
		const gameLeng = getMinSec(gameLength);

		gameObj = { gameType, isWin, elapsedTime, gameLeng };
	}

	return <MainContentItemTime gameObj={gameObj} />;
};
