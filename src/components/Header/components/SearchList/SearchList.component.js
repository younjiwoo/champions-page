import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
	SearchListWrapper,
	SearchListItem,
	ChampionName,
	ChampionTierRank,
	RecentSearchesAndBookmark,
} from './SearchList.style';
import { starIcon, deleteIcon } from './assets';

export const SearchList = ({
	searchResult,
	setIsOpen,
	isOpen,
	keywordList,
	handleRemoveKeyword,
}) => {
	const [activeTab, setActiveTab] = useState('recentSearches');
	const [bookmarkList, setBookmarkList] = useState(
		JSON.parse(localStorage.getItem('bookmarks') || '[]')
	);

	const searchListRef = useRef();

	const handleClickOutside = useCallback((e) => {
		if (searchListRef.current.contains(e.target)) {
			return;
		}

		setIsOpen(false);
	}, []);

	useEffect(() => {
		if (isOpen) {
			document.addEventListener('mousedown', handleClickOutside);
		} else {
			document.removeEventListener('mousedown', handleClickOutside);
		}

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [isOpen, handleClickOutside]);

	useEffect(() => {
		localStorage.setItem('bookmarks', JSON.stringify(bookmarkList));
	}, [bookmarkList]);

	const handleAddBookmark = (keyword) => {
		setBookmarkList([keyword, ...bookmarkList]);
	};

	const handleRemoveBookmark = (id) => {
		const nextBookmarkList = bookmarkList.filter((bookmark) => {
			return bookmark.id !== id;
		});
		setBookmarkList(nextBookmarkList);
	};

	console.log('받은 searchResult: ', searchResult);

	return (
		<SearchListWrapper ref={searchListRef}>
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
					<div>
						{activeTab === 'recentSearches'
							? keywordList.map((keyword) => {
									return (
										<div>
											<div>{keyword.text}</div>
											<div>
												<button
													onClick={() =>
														handleAddBookmark(
															keyword
														)
													}
												>
													<img
														src={starIcon}
														alt="즐겨찾기 추가"
													/>
												</button>
												<button
													onClick={() =>
														handleRemoveKeyword(
															keyword.id
														)
													}
												>
													<img
														src={deleteIcon}
														alt="검색어 삭제"
													/>
												</button>
											</div>
										</div>
									);
							  })
							: bookmarkList.map((bookmark) => {
									return (
										<div>
											<div>{bookmark.text}</div>

											<button
												onClick={() =>
													handleRemoveBookmark(
														bookmark.id
													)
												}
											>
												<img
													src={deleteIcon}
													alt="검색어 삭제"
												/>
											</button>
										</div>
									);
							  })}
					</div>
				</RecentSearchesAndBookmark>
			)}
		</SearchListWrapper>
	);
};
