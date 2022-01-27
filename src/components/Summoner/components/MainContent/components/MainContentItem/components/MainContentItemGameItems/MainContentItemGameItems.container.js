import React, { useState } from 'react';
import { MainContentItemGameItems } from './MainContentItemGameItems.component';
import blueWard from './assets/icon-ward-blue.svg';
import redWard from './assets/icon-ward-red.svg';
import { blueBuild, redBuild } from './assets';

export const MainContentItemGameItemsContainer = ({ game }) => {
	const [isTooltipVisible, setIsTooltipVisible] = useState(true);
	const [tooltipIdx, setTooltipIdx] = useState(null);

	let gameObj = {};
	let itemsCopy = [];

	const handleMouseEnter = (i) => {
		setIsTooltipVisible(true);
		setTooltipIdx(i);
	};

	const handleMouseLeave = () => {
		setIsTooltipVisible(false);
	};

	if (game) {
		const { items, isWin, stats } = game;
		const { sightWardsBought, visionWardsBought } = stats.ward;

		const totalNum = 8; // 보여줘야 하는 아이템 개수
		const numOfItems = items.length; // 데이터로부터 받은 아이템 개수

		itemsCopy = [...items];

		if (numOfItems < totalNum) {
			const num = totalNum - numOfItems;
			const arr = new Array(num).fill(undefined);

			itemsCopy = itemsCopy.concat(arr);
		}

		const controlWard = sightWardsBought + visionWardsBought;

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
			tooltipIdx,
		};
	}

	return <MainContentItemGameItems gameObj={gameObj} />;
};
