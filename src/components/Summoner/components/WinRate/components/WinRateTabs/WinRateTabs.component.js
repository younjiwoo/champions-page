import React from 'react';
import { Ul, Li, Anchor } from './WinRateTabs.style';

export const WinRateTabs = ({ selectedTab, setSelectedTab }) => {
	return (
		<Ul>
			<Li
				className={selectedTab === 'champ' ? 'active' : ''}
				onClick={() => setSelectedTab('champ')}
			>
				<Anchor href="#void">챔피언 승률</Anchor>
			</Li>
			<Li
				className={selectedTab === 'recent' ? 'active' : ''}
				onClick={() => setSelectedTab('recent')}
			>
				<Anchor href="#void">7일간 랭크 승률</Anchor>
			</Li>
		</Ul>
	);
};
