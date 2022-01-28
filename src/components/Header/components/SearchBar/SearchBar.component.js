import React, { useState, useEffect, useCallback, useRef } from 'react';
import { SearchListContainer } from '../SearchList/SearchList.container';
import { SearchBarForm, InputField, SearchBtn } from './SearchBar.style';

export const SearchBar = () => {
	const [keyword, setKeyword] = useState('');
	const [keywordList, setKeywordList] = useState(
		JSON.parse(localStorage.getItem('keywords') || '[]')
	);
	const [isOpen, setIsOpen] = useState(false);

	const searchBarRef = useRef(null);

	const handleClickOutside = useCallback((e) => {
		if (searchBarRef.current.contains(e.target)) {
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
		localStorage.setItem('keywords', JSON.stringify(keywordList));
	}, [keywordList]);

	const handleKeywordChange = (e) => {
		const val = e.target.value;
		setKeyword(val);
	};

	const handleFocus = () => {
		setIsOpen(true);
	};

	const handleInputChange = (e) => {
		if (keyword && e.keyCode === 13) {
			handleAddKeyword(keyword);
			setKeyword('');
		}
	};

	const handleAddKeyword = (text) => {
		const newKeyword = {
			id: Date.now(),
			text,
			isBookmarked: false,
		};

		// 최대 8개까지만 저장되도록:
		const maxNum = 8;
		let copiedKeywordList = [...keywordList];
		if (keywordList.length === maxNum) {
			copiedKeywordList.splice(-1, 1);
		}
		setKeywordList([newKeyword, ...copiedKeywordList]);
	};

	const handleRemoveKeyword = (id) => {
		const nextKeyword = keywordList.filter((keyword) => {
			return keyword.id !== id;
		});
		setKeywordList(nextKeyword);
	};

	return (
		<SearchBarForm ref={searchBarRef}>
			<InputField
				value={keyword}
				onChange={handleKeywordChange}
				onFocus={handleFocus}
				onKeyDown={handleInputChange}
				placeholder="소환사명, 챔피언..."
			/>

			<SearchBtn>
				<img
					src="https://opgg-static.akamaized.net/images/gnb/svg/00-icon-gg.svg"
					alt="submit button"
				/>
			</SearchBtn>

			{isOpen && (
				<SearchListContainer
					isOpen={isOpen}
					setIsOpen={setIsOpen}
					keyword={keyword}
					keywordList={keywordList}
					setKeywordList={setKeywordList}
					handleRemoveKeyword={handleRemoveKeyword}
				/>
			)}
		</SearchBarForm>
	);
};
