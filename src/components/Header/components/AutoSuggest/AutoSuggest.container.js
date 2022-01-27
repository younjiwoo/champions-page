import React, { useState, useEffect } from 'react';
import { AutoSuggest } from './AutoSuggest.component';
import useHttpRequest from '../../../../hooks/use-http-request';
import {} from './AutoSuggest.style';

export const AutoSuggestContainer = ({ inputText, forwardRef }) => {
	const [searchResult, setSearchResult] = useState(null);

	const { sendRequest, isLoading, error } = useHttpRequest();

	useEffect(() => {
		if (inputText) {
			const getSearchResult = (data) => {
				console.log('검색 결과: ', data);
				setSearchResult({ ...data.summoner });
			};

			sendRequest(inputText, getSearchResult);
		} else {
			setSearchResult(null);
		}
	}, [inputText, sendRequest]);

	return <AutoSuggest searchResult={searchResult} forwardRef={forwardRef} />;
};
