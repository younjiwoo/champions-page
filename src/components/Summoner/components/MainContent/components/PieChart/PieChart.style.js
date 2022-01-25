import styled from 'styled-components';

export const PieChartWrapper = styled.div(
	({ lossRate }) => `
	background: conic-gradient(${`#ee5a52 0% ${lossRate}%, #1f8ecd ${lossRate}%`});
	border-radius: 50%;
	width: 90px;
	height: 90px;
    position: relative;
`
);

export const PieChartHole = styled.div`
	background-color: #ededed;
	width: 64px;
	height: 64px;
	border-radius: 50%;
	position: absolute;
	top: 13px;
	left: 13px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 14px;
	font-weight: bold;
	color: #555;
`;
