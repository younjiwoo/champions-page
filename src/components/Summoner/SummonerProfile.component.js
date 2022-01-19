import React from 'react';
import { useState, useEffect } from 'react/cjs/react.development';
import {
	SummonerProfileWrapper,
	PrevTiers,
	Tier,
	SummonerProfileContent,
	SummonerProfileImg,
	SummonerProfileText,
	SummonerUsername,
	SummonerLadderRanking,
} from './SummonerProfile.style';
import useHttpRequest from '../../hooks/use-http-request';

export const SummonerProfile = () => {
	const [summoner, setSummoner] = useState(null);

	const { sendRequest, isLoading, error } = useHttpRequest();

	useEffect(() => {
		const transformSummoner = (data) => {
			setSummoner(data.summoner);
		};

		sendRequest(
			{
				url: 'https://codingtest.op.gg/api/summoner/asd6',
			},
			transformSummoner
		);
	}, [sendRequest]);

	return (
		<SummonerProfileWrapper>
			<PrevTiers>
				{summoner?.previousTiers.map((tier, idx) => {
					return (
						<Tier key={idx}>
							<span className="font-bold">S{tier.season}</span>{' '}
							<span>{tier.tier}</span>
						</Tier>
					);
				})}
			</PrevTiers>
			<SummonerProfileContent>
				<SummonerProfileImg>
					<img
						className="user-img"
						src={summoner?.profileImageUrl}
						alt="프로필 이미지"
					/>
					<img
						className="border-img"
						src={summoner?.profileBorderImageUrl}
						alt="프로필 이미지 테두리"
					/>
				</SummonerProfileImg>
				<SummonerProfileText>
					<SummonerUsername>{summoner?.name}</SummonerUsername>
					<SummonerLadderRanking>
						레더 랭킹{' '}
						<strong>
							{summoner?.ladderRank.rank.toLocaleString()}
						</strong>
						위 (상위 {summoner?.ladderRank.rankPercentOfTop}%)
					</SummonerLadderRanking>
				</SummonerProfileText>
			</SummonerProfileContent>
		</SummonerProfileWrapper>
	);
};
