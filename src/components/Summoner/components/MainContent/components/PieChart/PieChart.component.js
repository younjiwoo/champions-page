import { PieChartWrapper, PieChartHole } from './PieChart.style';

export const PieChart = ({ winRate }) => {
	const lossRate = 100 - winRate;

	return (
		<PieChartWrapper lossRate={lossRate}>
			<PieChartHole>{winRate}%</PieChartHole>
		</PieChartWrapper>
	);
};
