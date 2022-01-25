import React from 'react';
import {
	MainContentPositions,
	PositionListWrapper,
	PositionItem,
	PositionTextWrapper,
	PositionName,
	PositionWinRate,
} from './MainContentHeaderPositions.style';

export const MainContentHeaderPositions = ({ positionList }) => {
	return (
		<MainContentPositions>
			<div>선호 포지션 (랭크)</div>
			<PositionListWrapper>
				{positionList.map((pos, idx) => {
					return (
						// id가 없어서 우선 idx로:
						<PositionItem key={idx}>
							<img src={pos.imageUrl} alt={`${pos.kor} 아이콘`} />
							<PositionTextWrapper>
								<PositionName>{pos.kor}</PositionName>
								<PositionWinRate>
									<div className="left">
										<span className="bold">
											{pos.winRate}
										</span>
										%
									</div>
									<div className="right">
										승률{' '}
										<span className="blackish">
											<span className="bold">
												{pos.winRate}
											</span>
											%
										</span>
									</div>
								</PositionWinRate>
							</PositionTextWrapper>
						</PositionItem>
					);
				})}
			</PositionListWrapper>
		</MainContentPositions>
	);
};
