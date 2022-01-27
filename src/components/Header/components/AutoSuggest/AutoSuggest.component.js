import React from 'react';
import { useState } from 'react/cjs/react.development';
import {
	AutoSuggestWrapper,
	AutoSuggestItem,
	ChampionName,
	ChampionTierRank,
	RecentSearchesAndBookmark,
} from './AutoSuggest.style';

export const AutoSuggest = ({ searchResult, forwardRef }) => {
	const [activeTab, setActiveTab] = useState('recentSearches');
	console.log('받은 searchResult: ', searchResult);
	return (
		<AutoSuggestWrapper ref={forwardRef}>
			{searchResult ? (
				<AutoSuggestItem>
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
				</AutoSuggestItem>
			) : (
				<RecentSearchesAndBookmark>
					<ul>
						<li
							onClick={() => setActiveTab('recentSearches')}
							className={
								activeTab === 'recentSearches' ? 'active' : ''
							}
						>
							<a href="#void">최근 검색</a>
						</li>
						<li
							onClick={() => setActiveTab('bookmark')}
							className={activeTab === 'bookmark' ? 'active' : ''}
						>
							<a href="#void">즐겨찾기</a>
						</li>
					</ul>
				</RecentSearchesAndBookmark>
			)}
		</AutoSuggestWrapper>
	);
};
