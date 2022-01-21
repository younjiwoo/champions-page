import React, { useState } from 'react';
import { WinRate } from './WinRate.component';
import useHttpRequest from '../../../../hooks/use-http-request';
import { useEffect } from 'react/cjs/react.development';

export const WinRateContainer = () => {
	const [winRate, setWinRate] = useState(null);

	const { sendRequest, isLoading, error } = useHttpRequest();

	useEffect(() => {
		const addWinRateData = (data) => {
			setWinRate({ ...data });
		};

		// todo: 하드코딩 되어있는 부분 - 아이디 asd6
		sendRequest('asd6/mostInfo', addWinRateData);
	}, [sendRequest]);

	return <WinRate {...winRate} />;
};
