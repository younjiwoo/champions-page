import React from 'react';
import {
	Item,
	ItemImage,
	NoItem,
	ItemTooltipWrapper,
} from './GameItemContent.style';
import { Tooltip } from '../../../../../../../../../UI';
import { extractNumbers } from '../../../../../../../../../../utils/numberUtils';
import { itemJson } from '../../assets';

export const GameItemContent = ({
	item,
	buildSrc,
	isWin,
	numOfItems,
	isTooltipVisible,
	tooltipIdx,
	itemIdx,
	handleMouseEnter,
	handleMouseLeave,
}) => {
	const doesItemExist = item ? true : false;

	let showTooltip = isTooltipVisible && tooltipIdx === itemIdx;

	let tooltipText = '';

	let itemContent = <NoItem isWin={isWin} />;

	if (doesItemExist) {
		const { imageUrl } = item;

		const itemId = extractNumbers(imageUrl);

		const itemImage = (
			<ItemImage
				onMouseEnter={() => handleMouseEnter(itemIdx)}
				onMouseLeave={() => handleMouseLeave()}
				src={imageUrl}
				alt={itemJson?.data[itemId]?.name}
			/>
		);

		itemContent = itemImage;
		tooltipText = itemJson.data[itemId].plaintext;

		console.log('itemId: ', itemId);
	}

	const lastItem = numOfItems - 1;
	const buildImage = <ItemImage src={buildSrc} alt="빌드 아이콘" />;

	if (itemIdx === lastItem) {
		itemContent = buildImage;
	}

	return (
		<ItemTooltipWrapper key={itemIdx}>
			<Item>{itemContent}</Item>

			{showTooltip && <Tooltip>{<span>{tooltipText}</span>}</Tooltip>}
		</ItemTooltipWrapper>
	);
};
