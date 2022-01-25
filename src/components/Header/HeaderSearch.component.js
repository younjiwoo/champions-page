import React from 'react';
import { getMatches } from '../../api/HeaderSearchAPI';
import { HeaderSearchForm, InputField, SearchBtn } from './HeaderSearch.style';

export const HeaderSearch = () => {
	const handleInputChange = (e) => {
		const games = getMatches(e);
		return games;
	};

	return (
		<HeaderSearchForm>
			<InputField
				onChange={handleInputChange}
				placeholder="소환사명, 챔피언..."
			/>
			<SearchBtn>
				<img
					src="https://opgg-static.akamaized.net/images/gnb/svg/00-icon-gg.svg"
					alt="submit button"
				/>
			</SearchBtn>
		</HeaderSearchForm>
	);
};
