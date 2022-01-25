import React from 'react';
import { Ul, Li, Anchor } from './MainTabs.style';

export const MainTabs = ({ selectedTab, setSelectedTab }) => {
	return (
		<Ul>
			<Li
				className={selectedTab === 'all' ? 'active' : ''}
				onClick={() => setSelectedTab('all')}
			>
				<Anchor href="#void">전체</Anchor>
			</Li>
			<Li
				className={selectedTab === 'soloGame' ? 'active' : ''}
				onClick={() => setSelectedTab('soloGame')}
			>
				<Anchor href="#void">솔로게임</Anchor>
			</Li>
			<Li
				className={selectedTab === 'freeRank' ? 'active' : ''}
				onClick={() => setSelectedTab('freeRank')}
			>
				<Anchor href="#void">자유랭크</Anchor>
			</Li>
		</Ul>
	);
};
