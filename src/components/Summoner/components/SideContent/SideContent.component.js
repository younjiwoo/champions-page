import React from 'react';
import { SideContentWrapper } from './SideContent.style';
import { WinLossRatio, SideFreeRank, SideSoloRank } from '..';

export const SideContent = () => {
	return (
		<SideContentWrapper>
			<SideSoloRank />
			<SideFreeRank />
			<WinLossRatio />
			{/* <section>왼쪽 4번째 챔피언 승률 vs 7일간 랭크 승률</section> */}
		</SideContentWrapper>
	);
};
