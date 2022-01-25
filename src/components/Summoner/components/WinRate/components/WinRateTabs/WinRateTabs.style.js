import styled from 'styled-components';

export const Ul = styled.ul`
	list-style-type: none;
	margin: 0;
	padding: 0;
	display: grid;
	align-items: center;
	grid-template-columns: 50% 50%;
	height: 44px;
`;

export const Li = styled.li`
	height: 100%;
	background-color: #f2f2f2;
	border-bottom: solid 1px #cdd2d2;
	border-right: solid 1px #cdd2d2;

	&:last-child {
		border-right: none;
	}

	&.active {
		background-color: #ededed;
		font-weight: bold;
		color: #5e5e5e;
		border-bottom: none;
	}
`;

export const Anchor = styled.a`
	margin: 0;
	text-decoration: none;

	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
	font-size: 12px;
	color: #879292;
	pointer-events: none;
`;
