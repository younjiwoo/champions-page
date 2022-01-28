import React, { useState, useEffect } from 'react';
import { SearchList } from './SearchList.component';
import useHttpRequest from '../../../../hooks/use-http-request';
import {} from './SearchList.style';

export const SearchListContainer = ({
	keyword,
	keywordList,
	setIsOpen,
	isOpen,
	handleRemoveKeyword,
}) => {
	const [searchResult, setSearchResult] = useState(null);

	const { sendRequest, isLoading, error } = useHttpRequest();

	useEffect(() => {
		if (keyword) {
			const getSearchResult = (data) => {
				console.log('검색 결과: ', data);
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
			handleRemoveKeyword={handleRemoveKeyword}
		/>
	);
};
