import React from 'react';
import { SummonerContentWrapper } from './SummonerContent.style';
import { SideContent } from './components';

export const SummonerContent = () => {
	return (
		<SummonerContentWrapper>
			<SideContent />
			<main style={{ border: '1px solid yellowgreen', width: '690px' }}>
				<section>오른쪽 상단 박스</section>
				<section>오른쪽 하단 박스</section>
			</main>
			<aside>맨 오른쪽 이상한 기호들</aside>
		</SummonerContentWrapper>
	);
};
