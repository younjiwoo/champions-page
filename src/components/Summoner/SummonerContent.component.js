import React from 'react';
import { SummonerContentWrapper } from './SummonerContent.style';
import { SideContent } from './components';

export const SummonerContent = () => {
	return (
		<SummonerContentWrapper>
			<SideContent />
			<main style={{ border: '1px solid yellowgreen', width: '100%' }}>
				<section>오른쪽 상단 박스</section>
				<section>오른쪽 하단 박스</section>
			</main>
			<aside style={{ border: '1px solid pink', width: '100%' }}>
				맨 오른쪽 이상한 기호들
			</aside>
		</SummonerContentWrapper>
	);
};
