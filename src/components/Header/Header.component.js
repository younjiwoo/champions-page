import React from 'react';
import { HeaderWrapper, HeaderContent } from './Header.style';
import { HeaderSearch } from './';

export const Header = () => {
	return (
		<HeaderWrapper>
			<HeaderContent>
				<HeaderSearch />
			</HeaderContent>
		</HeaderWrapper>
	);
};
