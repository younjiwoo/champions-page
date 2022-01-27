import React from 'react';
import {
	ItemsWrapper,
	WardTextWrapper,
	WardImage,
} from './MainContentItemGameItems.style';
import { GameItemContent } from './components/GameItemContent';

export const MainContentItemGameItems = ({ gameObj }) => {
	const {
		isWin,
		items,
		controlWard,
		wardSrc,
		buildSrc,
		handleMouseEnter,
		handleMouseLeave,
		isTooltipVisible,
		tooltipIdx,
	} = gameObj;

	const numOfItems = items.length;

	return (
		<ItemsWrapper>
			<div>
				{items.map((item, i) => {
					return (
						<GameItemContent
							key={i}
							item={item}
							buildSrc={buildSrc}
							isWin={isWin}
							numOfItems={numOfItems}
							isTooltipVisible={isTooltipVisible}
							tooltipIdx={tooltipIdx}
							itemIdx={i}
							handleMouseEnter={handleMouseEnter}
							handleMouseLeave={handleMouseLeave}
						/>
					);
				})}
			</div>
			{controlWard && (
				<WardTextWrapper>
					<WardImage src={wardSrc} alt="와드 아이콘" />
					<div className="black">제어 와드 {controlWard}</div>
				</WardTextWrapper>
			)}
		</ItemsWrapper>
	);
};
