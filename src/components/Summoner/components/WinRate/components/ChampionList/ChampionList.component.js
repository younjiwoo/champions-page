import React from 'react';
import {
	ChampionItem,
	ChampionImage,
	TopRow,
	BottomRow,
} from './ChampionList.style';

export const ChampionList = ({ champion, idx }) => {
	const {
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
	} = champion;

	// 중복되는 id가 있어서 key={id}를 못 쓰고, 임시적으로 우선 idx를 씀:
	return (
		<ChampionItem key={idx}>
			<ChampionImage src={imageUrl} alt="챔피언 프로필 사진" />
			<div>
				<TopRow>{name}</TopRow>
				<BottomRow>CS {cs} (2.4)</BottomRow>
			</div>

			<div>
				<TopRow className={kdaColor}>{kda}:1 평점</TopRow>
				<BottomRow>
					{kills} / {deaths} / {assists}
				</BottomRow>
			</div>

			<div>
				<TopRow className={winRate >= 60 ? 'red' : ''}>
					{winRate}%
				</TopRow>
				<BottomRow>{games}게임</BottomRow>
			</div>
		</ChampionItem>
	);
};
