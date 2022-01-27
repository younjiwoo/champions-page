import React, { useState, useEffect } from 'react';
import { MainContentItemTeams } from './MainContentItemTeams.component';
import useHttpRequest from '../../../../../../../../hooks/use-http-request';

export const MainContentItemTeamsContainer = ({ gameId, summonerName }) => {
	const [teams, setTeams] = useState(null);

	const { sendRequest, isLoading, error } = useHttpRequest();

	useEffect(() => {
		const handleTeams = (data) => {
			setTeams(data.teams);
		};

		// todo: 하드코딩 되어있는 부분 - 아이디 카이사
		sendRequest(`${summonerName}/matchDetail/${gameId}`, handleTeams);
	}, [sendRequest]);

	return <MainContentItemTeams teams={teams} />;
};
