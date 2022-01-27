import React from 'react';
import {
	GameTimeWrapper,
	GameTimeTop,
	GameTimeBottom,
	Bar,
} from './MainContentItemTime.style';

export const MainContentItemTime = ({ gameObj }) => {
	const { gameType, isWin, elapsedTime, gameLeng } = gameObj;

	const fontColor = isWin ? 'blue' : 'scarlet';
	const text = isWin ? '승리' : '패배';

	return (
		<GameTimeWrapper>
			<GameTimeTop>
				<div className="bold title">{gameType}</div>
				<div>{elapsedTime}</div>
			</GameTimeTop>
			<Bar isWin={isWin} />
			<GameTimeBottom>
				<div className={`bold title ${fontColor}`}>{text}</div>
				<div>{gameLeng}</div>
			</GameTimeBottom>
		</GameTimeWrapper>
	);
};
