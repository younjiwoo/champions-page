import React, { useState, useEffect } from 'react';
import { SearchList } from './SearchList.component';
import useHttpRequest from '../../../../hooks/use-http-request';

export const SearchListContainer = ({
	keyword,
	keywordList,
	setKeywordList,
	setIsOpen,
	isOpen,
	handleRemoveKeyword,
}) => {
	const [searchResult, setSearchResult] = useState(null);

	const { sendRequest, isLoading, error } = useHttpRequest();

	useEffect(() => {
		if (keyword) {
			const getSearchResult = (data) => {
				setSearchResult({ ...data.summoner });
			};

			sendRequest(keyword, getSearchResult);
		} else {
			setSearchResult(null);
		}
	}, [keyword, sendRequest]);

	return (
		<SearchList
			searchResult={searchResult}
			setIsOpen={setIsOpen}
			isOpen={isOpen}
			keywordList={keywordList}
			setKeywordList={setKeywordList}
			handleRemoveKeyword={handleRemoveKeyword}
		/>
	);
};
