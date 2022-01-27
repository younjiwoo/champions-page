import React, { useState } from 'react';
import { MainTabs } from '../MainTabs/MainTabs.component';
import { MainContentWrapper } from './MainContent.style';
import { MainContentHeader } from './components';
import { MainContentListContainer } from './components/MainContentList/MainContentList.container';

export const MainContent = ({
	games,
	champions,
	positions,
	summary,
	isLoading,
}) => {
	const [selectedTab, setSelectedTab] = useState('all');

	return (
		<main>
			<MainTabs
				selectedTab={selectedTab}
				setSelectedTab={setSelectedTab}
			/>
			<MainContentWrapper>
				<MainContentHeader
					champions={champions}
					summary={summary}
					positions={positions}
					isLoading={isLoading}
				/>
				<MainContentListContainer games={games} />
			</MainContentWrapper>
		</main>
	);
};
