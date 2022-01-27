import React from 'react';
import {
	ItemsWrapper,
	WardTextWrapper,
	WardImage,
	Item,
	ItemImage,
	NoItem,
	ItemTooltipWrapper,
} from './MainContentItemGameItems.style';
import { Tooltip } from '../../../../../../../UI';

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
	} = gameObj;

	return (
		<ItemsWrapper>
			<div>
				{items.map((item, i) => {
					return (
						// <ItemTooltipWrapper>
						<Item key={i}>
							{item ? (
								<ItemImage
									onMouseEnter={handleMouseEnter}
									onMouseLeave={handleMouseLeave}
									src={item.imageUrl}
									alt="아이템 아이콘"
								/>
							) : (
								<NoItem isWin={isWin} />
							)}
						</Item>
						// {isTooltipVisible && <Tooltip text="hey" />}
						// </ItemTooltipWrapper>
					);
				})}
				<Item>
					<ItemImage src={buildSrc} alt="빌드 아이콘" />
				</Item>
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
