import React, { useState } from 'react';
import { MainContentItemGameItems } from './MainContentItemGameItems.component';
import blueWard from './assets/icon-ward-blue.svg';
import redWard from './assets/icon-ward-red.svg';
import { blueBuild, redBuild } from './assets';

export const MainContentItemGameItemsContainer = ({ game }) => {
	const [isTooltipVisible, setIsTooltipVisible] = useState(false);

	let gameObj = {};
	let itemsCopy = [];

	const handleMouseEnter = () => {
		setIsTooltipVisible(true);
	};

	const handleMouseLeave = () => {
		setIsTooltipVisible(false);
	};

	if (game) {
		const { items, isWin } = game;

		const leng = items.length;

		itemsCopy = [...items];

		if (leng < 7) {
			const num = 7 - leng;
			const arr = new Array(num).fill('');

			itemsCopy = itemsCopy.concat(arr);
		}

		const controlWard =
			game?.stats.ward.sightWardsBought +
			game?.stats.ward.visionWardsBought;
		const wardSrc = isWin ? blueWard : redWard;
		const buildSrc = isWin ? blueBuild : redBuild;

		gameObj = {
			isWin,
			items: itemsCopy,
			controlWard,
			wardSrc,
			buildSrc,
			handleMouseEnter,
			handleMouseLeave,
			isTooltipVisible,
		};
	}

	return <MainContentItemGameItems gameObj={gameObj} />;
};
