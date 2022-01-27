import React from 'react';
import { MainContentItem } from '../MainContentItem/MainContentItem.component';
import { MainContentListWrapper } from './MainContentList.style';

export const MainContentList = ({ games }) => {
	return (
		<MainContentListWrapper>
			<ul>
				{games.map((game) => (
					<MainContentItem key={game.gameId} game={game} />
				))}
			</ul>
		</MainContentListWrapper>
	);
};
