import React from 'react';
import { ChampionItem } from './ChampionItem.component';
import {
	getWinRate,
	getKda,
	getKdaColor,
} from '../../../../../../utils/gameUtils';

export const ChampionItemContainer = ({ champions }) => {
	return champions ? (
		champions.map((ch, idx) => {
			const {
				assists,
				cs,
				deaths,
				games,
				// id,
				imageUrl,
				// key,
				kills,
				losses,
				name,
				// rank,
				wins,
			} = ch;

			const winRate = getWinRate(wins, losses);
			const kda = getKda(kills, deaths, assists);
			const kdaColor = getKdaColor(kda);

			return (
				// key={idx}에서 id 대신 인덱스를 쓴 이유는, 중복되는 id가 있어서:
				<ChampionItem
					champion={{
						imageUrl,
						name,
						cs,
						kdaColor,
						kda,
						kills,
						deaths,
						assists,
						winRate,
						games,
					}}
					idx={idx}
					key={idx}
				/>
			);
		})
	) : (
		<>loading...</>
	);
};
