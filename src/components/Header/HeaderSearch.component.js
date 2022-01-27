import React, { useState, useEffect, useRef } from 'react';
import { AutoSuggestContainer } from './components/AutoSuggest';
import { HeaderSearchForm, InputField, SearchBtn } from './HeaderSearch.style';

export const HeaderSearch = () => {
	const [inputText, setInputText] = useState('');
	const [isOpen, setIsOpen] = useState(false);
	const autoSuggestRef = useRef();

	useEffect(() => {
		if (isOpen) {
			document.addEventListener('mousedown', handleClickOutside);
		} else {
			document.removeEventListener('mousedown', handleClickOutside);
		}

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [isOpen]);

	const handleClickOutside = (e) => {
		if (autoSuggestRef.current.contains(e.target)) {
			// 드롭다운 안에 클릭
			return;
		}
		// 드롭다운 밖에 클릭
		setIsOpen(false);
	};

	const handleInputChange = (e) => {
		const val = e.target.value;
		setInputText(val);
	};

	const handleAutoSuggest = () => {
		setIsOpen(true);
	};

	return (
		<HeaderSearchForm>
			<InputField
				onChange={handleInputChange}
				onFocus={handleAutoSuggest}
				placeholder="소환사명, 챔피언..."
			/>
			<SearchBtn>
				<img
					src="https://opgg-static.akamaized.net/images/gnb/svg/00-icon-gg.svg"
					alt="submit button"
				/>
			</SearchBtn>
			{isOpen && (
				<AutoSuggestContainer
					forwardRef={autoSuggestRef}
					inputText={inputText}
				/>
			)}
		</HeaderSearchForm>
	);
};
