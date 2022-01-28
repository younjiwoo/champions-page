import React from 'react';
import { blueStarIcon, starIcon, deleteIcon } from '../assets';
import { ItemWrapper, KeywordText, ButtonWrapper } from './KeywordItem.style';

export const KeywordItem = ({
	keyword,
	handleAddBookmark,
	handleRemoveKeyword,
}) => {
	return (
		<ItemWrapper>
			<KeywordText>{keyword.text}</KeywordText>
			<ButtonWrapper>
				<button onClick={() => handleAddBookmark(keyword)}>
					<img
						src={keyword.isBookmarked ? blueStarIcon : starIcon}
						alt="즐겨찾기 추가"
					/>
				</button>
				<button onClick={() => handleRemoveKeyword(keyword.id)}>
					<img src={deleteIcon} alt="검색어 삭제" />
				</button>
			</ButtonWrapper>
		</ItemWrapper>
	);
};
