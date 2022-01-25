import React from 'react';
import { SummonerContentWrapper } from './SummonerContent.style';
import { SideContent, MainContentContainer } from './components';

export const SummonerContent = () => {
	return (
		<SummonerContentWrapper>
			<SideContent />
			<MainContentContainer />
		</SummonerContentWrapper>
	);
};
