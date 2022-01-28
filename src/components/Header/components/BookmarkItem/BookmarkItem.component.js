import React from 'react';
import { deleteIcon } from '../assets';
import { ItemWrapper, KeywordText, ButtonWrapper } from './BookmarkItem.style';

export const BookmarkItem = ({ bookmark, handleRemoveBookmark }) => {
	return (
		<ItemWrapper>
			<KeywordText>{bookmark.text}</KeywordText>

			<ButtonWrapper>
				<button onClick={() => handleRemoveBookmark(bookmark)}>
					<img src={deleteIcon} alt="검색어 삭제" />
				</button>
			</ButtonWrapper>
		</ItemWrapper>
	);
};
