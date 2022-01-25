import React, { useState } from 'react';
import { MainTabs } from '../MainTabs/MainTabs.component';
import { MainContentWrapper, MainContentList } from './MainContent.style';
import { MainContentHeader } from './components';

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
				<MainContentList games={games}>MainContentList</MainContentList>
			</MainContentWrapper>
		</main>
	);
};
