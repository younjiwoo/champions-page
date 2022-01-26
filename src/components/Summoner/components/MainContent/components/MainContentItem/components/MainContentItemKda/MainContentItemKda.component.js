import React from 'react';
import { KdaWrapper, KdaString, Kda } from './MainContentItemKda.style';
import { Badge } from '../../../../../../../UI/Badge';

export const MainContentItemKda = ({ gameObj }) => {
	const { kill, death, assist, kdaString, opScoreBadge } = gameObj;

	return (
		<KdaWrapper>
			<KdaString className="bold">
				{kill} / <span className="scarlet">{death}</span> / {assist}
			</KdaString>
			<Kda>
				<span className="bold blackish">{kdaString}:1</span> 평점
			</Kda>
			{opScoreBadge && <Badge badgeType={opScoreBadge} />}
		</KdaWrapper>
	);
};
