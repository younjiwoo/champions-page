import React from 'react';
import { getElapsedTime } from '../../../../../../utils/dateUtils';
import { Badge } from '../../../../../UI/Badge';
import { MainContentItemTimeContainer } from './components/MainContentItemTime/MainContentItemTime.container';
import {
	MainContentItemWrapper,
	GameTimeWrapper,
	GameTimeTop,
	GameTimeBottom,
	Bar,
	GameImageTextWrapper,
	GameImageWrapper,
	SpellImageWrapper,
	ChampionImage,
	KdaWrapper,
	KdaString,
	Kda,
	StatsWrapper,
	ItemsWrapper,
} from './MainContentItem.style';

export const MainContentItem = ({ game }) => {
	console.log('item game: ', game);
	console.log('item createDate: ', game.createDate);
	const { isWin, createDate, gameLength, spells } = game;

	const controlWard =
		game?.stats.ward.sightWardsBought + game?.stats.ward.visionWardsBought;
	// console.log('리턴된 elapsed Time 값!!', elapsedTime);

	return (
		<MainContentItemWrapper isWin={game?.isWin}>
			<MainContentItemTimeContainer game={game} />
			<GameImageTextWrapper>
				<GameImageWrapper>
					<ChampionImage
						src={game?.champion.imageUrl}
						alt="챔피언 프로필 사진"
					/>
					<SpellImageWrapper>
						{spells.map((spell, idx) => {
							return (
								<img
									src={spell.imageUrl}
									key={idx}
									alt="스펠 아이콘"
								/>
							);
						})}
					</SpellImageWrapper>
				</GameImageWrapper>
				<div>{game?.summonerName}</div>
			</GameImageTextWrapper>
			<KdaWrapper>
				<KdaString className="bold">
					{game?.stats.general.kill} /{' '}
					<span className="scarlet">{game?.stats.general.death}</span>{' '}
					/ {game?.stats.general.assist}
				</KdaString>
				<Kda>
					<span className="bold blackish">
						{game?.stats.general.kdaString}:1
					</span>{' '}
					평점
				</Kda>
				{game?.stats.general.opScoreBadge && (
					<Badge badgeType={game?.stats.general.opScoreBadge} />
				)}
			</KdaWrapper>
			<StatsWrapper>
				<div>레벨{game?.champion.level}</div>
				<div>
					{game?.stats.general.cs} ({game?.stats.general.csPerMin}) CS
				</div>
				<div className="scarlet">
					킬관여 {game?.stats.general.contributionForKillRate}
				</div>
			</StatsWrapper>
			<ItemsWrapper>
				<div>
					{game?.items.map((item, i) => {
						return <img src={item.imageUrl} key={i} alt="" />;
					})}
				</div>
				{controlWard && <div>제어 와드 {controlWard}</div>}
			</ItemsWrapper>
		</MainContentItemWrapper>
	);
};
