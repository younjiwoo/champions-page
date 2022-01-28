import React, { useState, useEffect } from 'react';
import {
	RecentSearchesAndBookmark,
	ItemListWrapper,
} from './SearchHistoryAndBookmarks.style';
import { KeywordItem } from '../KeywordItem/KeywordItem.component';
import { BookmarkItem } from '../BookmarkItem/BookmarkItem.component';

export const SearchHistoryAndBookmarks = ({
	setActiveTab,
	activeTab,
	keywordList,
	setKeywordList,
	handleRemoveKeyword,
}) => {
	const [bookmarkList, setBookmarkList] = useState(
		JSON.parse(localStorage.getItem('bookmarks') || '[]')
	);

	useEffect(() => {
		localStorage.setItem('bookmarks', JSON.stringify(bookmarkList));
	}, [bookmarkList]);

	const handleAddBookmark = (newKeyword) => {
		// 이미 즐겨찾기에 추가가 된 검색어라면, 즐겨찾기에서 제거:
		if (newKeyword.isBookmarked) {
			return handleRemoveBookmark(newKeyword);
		}

		// 최대 8개까지만 저장되도록:
		const maxNum = 8;
		let copiedBookmarkList = [...bookmarkList];
		if (bookmarkList.length === maxNum) {
			copiedBookmarkList.splice(-1, 1);
		}
		handleKeyworkdBookmarked(newKeyword, true);
		setBookmarkList([newKeyword, ...copiedBookmarkList]);
	};

	const handleKeyworkdBookmarked = (keyword, bool) => {
		const copiedKeywordList = [...keywordList];
		const idx = copiedKeywordList.findIndex((k) => k.id === keyword.id);
		copiedKeywordList[idx].isBookmarked = bool;

		setKeywordList([...copiedKeywordList]);
	};

	const handleRemoveBookmark = (bookmark) => {
		const nextBookmarkList = bookmarkList.filter((b) => {
			return b.id !== bookmark.id;
		});
		handleKeyworkdBookmarked(bookmark, false);
		setBookmarkList(nextBookmarkList);
	};

	return (
		<RecentSearchesAndBookmark>
			<ul>
				<li
					onClick={() => setActiveTab('recentSearches')}
					className={activeTab === 'recentSearches' ? 'active' : ''}
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
			<ItemListWrapper>
				{activeTab === 'recentSearches' &&
					(keywordList.length > 0 ? (
						keywordList.map((keyword) => {
							return (
								<KeywordItem
									key={keyword.id}
									keyword={keyword}
									handleAddBookmark={handleAddBookmark}
									handleRemoveKeyword={handleRemoveKeyword}
								/>
							);
						})
					) : (
						<div>최근에 본 소환사가 없습니다.</div>
					))}
				{activeTab === 'bookmark' &&
					(bookmarkList.length > 0 ? (
						bookmarkList.map((bookmark) => {
							return (
								<BookmarkItem
									key={bookmark.id}
									bookmark={bookmark}
									handleRemoveBookmark={handleRemoveBookmark}
								/>
							);
						})
					) : (
						<div>
							관심있는 소환사에 즐겨찾기를 하여 편리하게 정보를
							받아보세요.
						</div>
					))}
			</ItemListWrapper>
		</RecentSearchesAndBookmark>
	);
};
