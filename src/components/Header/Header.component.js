import React from 'react';
import { HeaderWrapper, HeaderContent } from './Header.style';
import { SearchBar } from './components/SearchBar/SearchBar.component';

export const Header = () => {
	return (
		<HeaderWrapper>
			<HeaderContent>
				<SearchBar />
			</HeaderContent>
		</HeaderWrapper>
	);
};
