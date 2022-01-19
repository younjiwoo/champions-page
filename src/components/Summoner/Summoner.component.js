import React from 'react';
import { SummonerProfile, SummonerContent } from '.';
import { SummonerWrapper, Border } from './Summoner.style';

export const Summoner = () => {
	return (
		<SummonerWrapper>
			<SummonerProfile />
			<Border />
			<SummonerContent />
		</SummonerWrapper>
	);
};
