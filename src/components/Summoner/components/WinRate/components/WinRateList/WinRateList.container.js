// import React from 'react';
// import { getWinRate } from '../../../../../../utils';
// import { BarGraphContainer } from '../BarGraph';
// import {
// 	ChampionItem,
// 	ChampionImage,
// 	TopRow,
// 	BottomRow,
// 	RecentWinRateItem,
// } from './WinRateList.style';

// export const WinRateListContainer = ({
// 	selectedTab,
// 	champions,
// 	recentWinRate,
// }) => {
// 	console.log(' champions: ', champions);
// 	console.log(' recentWinRate: ', recentWinRate);

// 	return selectedTab === 'champ' ? (
// 		champions ? (
// 			champions.map((champ, idx) => {
// 				const {
// 					assists,
// 					cs,
// 					deaths,
// 					games,
// 					id,
// 					imageUrl,
// 					key,
// 					kills,
// 					losses,
// 					name,
// 					rank,
// 					wins,
// 				} = champ;

// 				const kda = ((kills + assists) / deaths).toFixed(2);
// 				const kdaColor =
// 					kda >= 5
// 						? 'yellow'
// 						: kda >= 4
// 						? 'blue'
// 						: kda >= 3
// 						? 'green'
// 						: '';
// 				const winRate = getWinRate(wins, losses);

// 				// 중복되는 id가 있어서 key={id}를 못 쓰고, 임시적으로 우선 idx를 씀:
// 				return (
// 					<ChampionItem key={idx}>
// 						<ChampionImage
// 							src={imageUrl}
// 							alt="챔피언 프로필 사진"
// 						/>
// 						<div>
// 							<TopRow>{name}</TopRow>
// 							<BottomRow>CS {cs} (2.4)</BottomRow>
// 						</div>

// 						<div>
// 							<TopRow className={kdaColor}>{kda}:1 평점</TopRow>
// 							<BottomRow>
// 								{kills} / {deaths} / {assists}
// 							</BottomRow>
// 						</div>

// 						<div>
// 							<TopRow className={winRate >= 60 ? 'red' : ''}>
// 								{winRate}%
// 							</TopRow>
// 							<BottomRow>{games}게임</BottomRow>
// 						</div>
// 					</ChampionItem>
// 				);
// 			})
// 		) : (
// 			<>loading...</>
// 		)
// 	) : (
// 		recentWinRate.map((champ, idx) => {
// 			const { id, imageUrl, losses, name, wins } = champ;
// 			const winRate = getWinRate(wins, losses);

// 			return (
// 				// 중복되는 id가 있어서 key={id}를 못 쓰고, 임시적으로 우선 idx를 씀:
// 				<RecentWinRateItem key={idx}>
// 					<img src={imageUrl} alt="챔피언 이름" />
// 					<span>{name}</span>
// 					<span className="winrate">{winRate}%</span>
// 					<BarGraphContainer wins={wins} losses={losses} />
// 				</RecentWinRateItem>
// 			);
// 		})
// 	);
// };
