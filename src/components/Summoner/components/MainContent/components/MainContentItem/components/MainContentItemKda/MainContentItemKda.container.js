import React from 'react';
import { MainContentItemKda } from './MainContentItemKda.component';

export const MainContentItemKdaContainer = ({ game }) => {
	let gameObj = {};

	if (game) {
		const { champion, stats, spells } = game;
		const { kill, death, assist, kdaString, opScoreBadge } = stats.general;
		gameObj = {
			imageUrl: champion.imageUrl,
			spells,
			kill,
			death,
			assist,
			kdaString,
			opScoreBadge,
		};
	}

	return <MainContentItemKda gameObj={gameObj} />;
};
