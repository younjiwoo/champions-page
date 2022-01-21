import React from 'react';
import { TierRankWrapper } from './TierRank.style';

export const TierRank = (props) => {
	const { imageUrl, tierText, lp, wins, losses, winRate, name } = props;

	const isSoloRank = name === '솔랭';
	const rankType = isSoloRank ? '솔로랭크' : '자유 5:5 랭크';

	return (
		<TierRankWrapper isSoloRank={isSoloRank}>
			<div className="rank-img">
				<img src={imageUrl} alt="솔로랭크 이미지" />
			</div>
			<div className="rank-info">
				<div>{rankType}</div>
				<div className="rank-tier">{tierText}</div>
				<div>
					<span className="rank-lp">{lp} LP</span> / {wins}승 {losses}
					패
				</div>

				<div>승률 {winRate}%</div>
			</div>
		</TierRankWrapper>
	);
};
