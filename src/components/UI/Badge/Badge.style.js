import styled from 'styled-components';

export const BadgeWrapper = styled.div(
	({ badgeType }) => `
        background-color: ${badgeType === 'ACE' ? '#8c51c5' : '#ec4f48'};
        border: 1px solid ${badgeType === 'ACE' ? '#7f3590' : '#bf3b36'};
        height: 18px;
        width: 31px;
        color: #fff;
        border-radius: 9px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 10px;
`
);
