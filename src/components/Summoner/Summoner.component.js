import React from 'react';
import { SummonerProfile, SummonerContent } from '.';
import { SummonerWrapper, Border } from './Summoner.style';
import SummonerProvider from '../../store/SummonerProvider';

export const Summoner = () => {
	return (
		<SummonerProvider>
			<SummonerWrapper>
				<SummonerProfile />
				<Border />
				<SummonerContent />
			</SummonerWrapper>
		</SummonerProvider>
	);
};
