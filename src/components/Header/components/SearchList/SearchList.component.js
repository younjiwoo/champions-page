import React, { useState } from 'react';
import { SearchHistoryAndBookmarks } from '../SearchHistoryAndBookmarks/SearchHistoryAndBookmarks.component';
import {
	SearchListWrapper,
	SearchListItem,
	ChampionName,
	ChampionTierRank,
} from './SearchList.style';

export const SearchList = ({
	searchResult,
	keywordList,
	setKeywordList,
	handleRemoveKeyword,
}) => {
	const [activeTab, setActiveTab] = useState('recentSearches');

	return (
		<SearchListWrapper>
			{searchResult ? (
				<SearchListItem>
					<img
						src={searchResult.profileBackgroundImageUrl}
						alt={searchResult.name}
					/>
					<div>
						<ChampionName>{searchResult.name}</ChampionName>
						<ChampionTierRank>
							{searchResult.leagues[0].tierRank.string}
						</ChampionTierRank>
					</div>
				</SearchListItem>
			) : (
				<SearchHistoryAndBookmarks
					setActiveTab={setActiveTab}
					activeTab={activeTab}
					keywordList={keywordList}
					setKeywordList={setKeywordList}
					handleRemoveKeyword={handleRemoveKeyword}
				/>
			)}
		</SearchListWrapper>
	);
};
