import React from 'react';
import { SearchBarForm, InputField, SearchBtn } from './SearchBar.style';

export const SearchBar = () => {
	const handleInputChange = async (e) => {
		const searchTerm = e.target.value;

		const response = await fetch(
			`https://codingtest.op.gg/api/summoner/${searchTerm}/matches`
		)
			.then((res) => {
				return res.json();
			})
			.catch((err) => console.log('err: ', err));

		// const { summoner } = response;f
		const { games } = response;

		// console.log('summoner API res: ', summoner);
		console.log('summoner API res: ', games);
		return games;
	};

	return (
		<SearchBarForm>
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
		</SearchBarForm>
	);
};
