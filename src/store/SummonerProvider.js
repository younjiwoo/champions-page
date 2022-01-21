import { useState, useEffect, useMemo } from 'react';
import { SummonerContext } from './summoner-context';
import useHttpRequest from '../hooks/use-http-request';

const SummonerProvider = (props) => {
	const [summoner, setSummoner] = useState(null);

	const { sendRequest, isLoading, error } = useHttpRequest();

	useEffect(() => {
		const transformSummoner = (data) => {
			setSummoner(data.summoner);
		};

		// todo: 하드코딩 되어있는 부분 - 아이디 asd6
		sendRequest('asd6', transformSummoner);
	}, [sendRequest]);

	const summonContext = useMemo(
		() => ({
			summoner,
			setSummoner,
		}),
		[summoner]
	);

	return (
		<SummonerContext.Provider value={summonContext}>
			{props.children}
		</SummonerContext.Provider>
	);
};

export default SummonerProvider;
