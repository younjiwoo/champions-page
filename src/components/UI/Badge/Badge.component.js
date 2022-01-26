import React from 'react';
import { BadgeWrapper } from './Badge.style';

export const Badge = ({ badgeType }) => {
	return <BadgeWrapper badgeType={badgeType}>{badgeType}</BadgeWrapper>;
};
