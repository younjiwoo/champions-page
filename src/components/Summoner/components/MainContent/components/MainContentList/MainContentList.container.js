import React from 'react';
import { MainContentList } from './MainContentList.component';

export const MainContentListContainer = ({ games }) => {
	let gameList = [];

	if (games) {
		gameList = games.slice(0, 4);
	}

	return <MainContentList games={gameList} />;
};
