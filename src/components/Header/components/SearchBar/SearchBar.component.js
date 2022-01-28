import React, { useState, useEffect } from 'react';
import { SearchListContainer } from '../SearchList/SearchList.container';
import { SearchBarForm, InputField, SearchBtn } from './SearchBar.style';

export const SearchBar = () => {
	const [keyword, setKeyword] = useState('');
	const [keywordList, setKeywordList] = useState(
		JSON.parse(localStorage.getItem('keywords') || '[]')
	);
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		localStorage.setItem('keywords', JSON.stringify(keywordList));
	}, [keywordList]);

	const handleKeywordChange = (e) => {
		const val = e.target.value;
		setKeyword(val);
	};

	const handleSearchList = () => {
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
		};
		setKeywordList([newKeyword, ...keywordList]);
	};

	const handleRemoveKeyword = (id) => {
		const nextKeyword = keywordList.filter((keyword) => {
			return keyword.id !== id;
		});
		setKeywordList(nextKeyword);
	};

	console.log('keyword', keyword);

	return (
		<SearchBarForm>
			<InputField
				value={keyword}
				onChange={handleKeywordChange}
				onFocus={handleSearchList}
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
					handleRemoveKeyword={handleRemoveKeyword}
				/>
			)}
		</SearchBarForm>
	);
};
