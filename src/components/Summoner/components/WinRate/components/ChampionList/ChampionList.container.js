import React from 'react';
import { ChampionList } from './ChampionList.component';
import { getWinRate } from '../../../../../../utils';

export const ChampionListContainer = ({ champions }) => {
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
			const kda = ((kills + assists) / deaths).toFixed(2);
			const kdaColor =
				kda >= 5
					? 'yellow'
					: kda >= 4
					? 'blue'
					: kda >= 3
					? 'green'
					: '';

			// key={idx}에서 id 대신 인덱스를 쓴 이유는, 중복되는 id가 있어서:
			return (
				<ChampionList
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
