import React from 'react';
import {
	MainContentChampions,
	ChampionItem,
	ChampionTextWrapper,
	ChampionName,
	ChampionStats,
	NoChampion,
} from './MainContentHeaderPositions.style';
import noImage from './assets/group.svg';

export const MainContentHeaderPositions = ({ championList }) => {
	return (
		<MainContentChampions>
			{championList.map((champ, idx) => {
				if (champ) {
					const {
						imageUrl,
						kda,
						kdaColor,
						name,
						winLossString,
						winRate,
					} = champ;

					return (
						<ChampionItem key={idx}>
							<img src={imageUrl || noImage} alt="챔피언 사진" />
							<ChampionTextWrapper>
								<ChampionName>{name}</ChampionName>
								<ChampionStats>
									<div className="left">
										<span className="bold">{winRate}</span>%
										({winLossString})
									</div>
									<div className={`right ${kdaColor}`}>
										{kda} 평점
									</div>
								</ChampionStats>
							</ChampionTextWrapper>
						</ChampionItem>
					);
				} else {
					return (
						<ChampionItem key={idx}>
							<img src={noImage} alt="챔피언 사진" />
							<NoChampion>챔피언 정보가 없습니다.</NoChampion>
						</ChampionItem>
					);
				}
			})}
		</MainContentChampions>
	);
};
