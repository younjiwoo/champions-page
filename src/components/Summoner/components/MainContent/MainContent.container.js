import { useState, useEffect } from 'react';
import { MainContent } from './MainContent.component';
import useHttpRequest from '../../../../hooks/use-http-request';

export const MainContentContainer = () => {
	const [matches, setMatches] = useState(null);

	const { sendRequest, isLoading, error } = useHttpRequest();

	useEffect(() => {
		const getMatches = (data) => {
			setMatches({ ...data, isLoading });
		};

		// todo: 하드코딩 되어있는 부분 - 아이디 카이사
		sendRequest('카이사/matches', getMatches);
	}, [sendRequest]);

	return <MainContent {...matches} />;
};
