import React from 'react';
import {
	GameImageTextWrapper,
	GameImageWrapper,
	SpellImageWrapper,
	ChampionImage,
	SpellImage,
} from './MainContentItemSpells.style';

export const MainContentItemSpells = ({ gameObj }) => {
	const { spells, summonerName, imageUrl } = gameObj;

	return (
		<GameImageTextWrapper>
			<GameImageWrapper>
				<ChampionImage src={imageUrl} alt="챔피언 프로필 사진" />
				<SpellImageWrapper>
					{spells.map((spell, i) => {
						return (
							<SpellImage
								src={spell.imageUrl}
								key={i}
								alt="스펠 아이콘"
							/>
						);
					})}
				</SpellImageWrapper>
			</GameImageWrapper>
			<div>{summonerName}</div>
		</GameImageTextWrapper>
	);
};
