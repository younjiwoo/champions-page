import React from 'react';
import { SideContentWrapper } from './SideContent.style';
import { TierRankContainer, WinRateContainer } from '..';

export const SideContent = () => {
	return (
		<SideContentWrapper>
			<TierRankContainer />
			<WinRateContainer />
		</SideContentWrapper>
	);
};
