import React from 'react';
import { MainContentItemSpells } from './MainContentItemSpells.component';

export const MainContentItemSpellsContainer = ({ game }) => {
	let gameObj = {};

	if (game) {
		const { summonerName, spells, champion } = game;

		gameObj = { imageUrl: champion.imageUrl, spells, summonerName };
	}

	return <MainContentItemSpells gameObj={gameObj} />;
};
