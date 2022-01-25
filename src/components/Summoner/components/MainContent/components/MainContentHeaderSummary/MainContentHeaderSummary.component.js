import React from 'react';
import {
	MainContentSummary,
	PieChartBox,
	KdaBox,
	GameWinsLosses,
	Kda,
	KdaString,
} from './MainContentHeaderSummary.style';
import { PieChart } from '../PieChart';

export const MainContentHeaderSummary = ({ props }) => {
	const { gameWinsLosses, winRate, kills, deaths, assists, kda, kdaColor } =
		props;

	return (
		<MainContentSummary>
			<PieChartBox>
				<GameWinsLosses>{gameWinsLosses}</GameWinsLosses>
				<PieChart winRate={winRate} />
			</PieChartBox>
			<KdaBox>
				<KdaString>
					{kills} / <span className="red">{deaths}</span> / {assists}
				</KdaString>
				<Kda>
					<span className={`bold ${kdaColor}`}>{kda}:1</span>
					<span>(58%)</span>
				</Kda>
			</KdaBox>
		</MainContentSummary>
	);
};
