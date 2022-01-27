import React from 'react';
import {
	getKda,
	getKdaColor,
	getWinRate,
} from '../../../../../../utils/gameUtils';
import { MainContentHeaderChampions } from './MainContentHeaderChampions.component';

export const MainContentHeaderChampionsContainer = ({
	champions,
	// isLoading,
}) => {
	let championsCopy = [];

	if (champions) {
		championsCopy = [...champions];

		const leng = champions.length;

		if (leng < 3) {
			const num = 3 - leng;
			const arr = new Array(num).fill('');

			championsCopy = championsCopy.concat(arr);
		}

		championsCopy = championsCopy.map((champ) => {
			if (champ) {
				const {
					imageUrl,
					name,
					wins,
					losses,
					kills,
					assists,
					deaths,
					id,
				} = champ;

				const kda = getKda(kills, deaths, assists);
				const kdaColor = getKdaColor(kda);
				const winRate = getWinRate(wins, losses);
				const winLossString = `${wins}승 ${losses}패`;

				return {
					imageUrl,
					name,
					winRate,
					winLossString,
					kda,
					kdaColor,
					id,
				};
			} else return '';
		});
	}

	return <MainContentHeaderChampions championList={championsCopy} />;
};
