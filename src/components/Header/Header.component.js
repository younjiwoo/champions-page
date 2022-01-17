import React from 'react';
import { HeaderWrapper, HeaderContent } from './Header.style';
import { SearchBar } from './SearchBar';

export const Header = () => {
	return (
		<HeaderWrapper>
			<HeaderContent>
				<SearchBar />
			</HeaderContent>
		</HeaderWrapper>
	);
};
