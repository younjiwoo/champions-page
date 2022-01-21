import React, { useState } from 'react';
import { WinRateWrapper } from './WinRate.style';
import { WinRateTabs } from './components/WinRateTabs';
import { WinRateList } from './components/WinRateList';

export const WinRate = ({ champions, recentWinRate }) => {
	const [selectedTab, setSelectedTab] = useState('champ');

	return (
		<WinRateWrapper>
			<WinRateTabs
				selectedTab={selectedTab}
				setSelectedTab={setSelectedTab}
			/>

			<WinRateList
				selectedTab={selectedTab}
				champions={champions}
				recentWinRate={recentWinRate}
			/>
		</WinRateWrapper>
	);
};
