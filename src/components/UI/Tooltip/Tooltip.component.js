import React from 'react';
import { TooltipWrapper, TooltipArrow } from './Tooltip.style';

export const Tooltip = (props) => {
	return (
		<TooltipWrapper className="up">
			{props.children}
			<TooltipArrow className="up" />
		</TooltipWrapper>
	);
};
