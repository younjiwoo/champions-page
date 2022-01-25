import styled from 'styled-components';

export const Ul = styled.ul`
	list-style-type: none;
	margin: 0;
	padding: 0;
	background-color: #f2f2f2;
	display: grid;
	align-items: center;
	justify-content: start;
	grid-template-columns: auto auto auto;
	height: 36px;
	border: solid 1px #cdd2d2;
	border-bottom: none;
`;

export const Li = styled.li`
	height: 100%;
	margin: 0 12px;

	&:last-child {
		border-right: none;
	}

	&.active {
		font-weight: bold;
		border-bottom: solid 2px #1f8ecd;

		a {
			color: #1f8ecd;
		}
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
