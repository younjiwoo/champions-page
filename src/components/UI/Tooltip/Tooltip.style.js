import styled from 'styled-components';

export const TooltipWrapper = styled.div`
	color: #fff;
	background-color: #000;
	position: absolute;
	z-index: 1;
	width: 300px;
	padding: 10px;

	&.bottom {
		left: -150px;
		top: 40px;
	}

	&.up {
		left: -150px;
		bottom: 40px;
	}
`;

export const TooltipArrow = styled.div`
	border-style: solid;
	position: absolute;

	&.bottom {
		border-color: transparent transparent #000 transparent;
		border-width: 0px 8px 8px 8px;
		left: calc(50% - 8px);
		top: -8px;

		&:after {
			border-color: transparent transparent #000 transparent;
			border-style: solid;
			border-width: 0px 7px 7px 7px;
			left: -7px;
			content: '';
			position: absolute;
			top: 1px;
		}
	}

	&.up {
		border-color: #000 transparent transparent transparent;
		border-width: 8px 8px 0px 8px;
		left: calc(50% - 8px);
		bottom: -8px;

		&:after {
			border-color: #000 transparent transparent transparent;
			border-style: solid;
			border-width: 7px 7px 0px 7px;
			left: -7px;
			content: '';
			position: absolute;
			bottom: 1px;
		}
	}
`;
