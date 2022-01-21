import React from 'react';

export const WinRateTabs = ({ selectedTab, setSelectedTab }) => {
	return (
		<ul>
			<li
				className={selectedTab === 'champ' ? 'active' : ''}
				onClick={() => setSelectedTab('champ')}
			>
				<a href="#void">챔피언 승률</a>
			</li>
			<li
				className={selectedTab === 'recent' ? 'active' : ''}
				onClick={() => setSelectedTab('recent')}
			>
				<a href="#void">7일간 랭크 승률</a>
			</li>
		</ul>
	);
};
