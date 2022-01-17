import styled from 'styled-components';

export const SearchBarForm = styled.form`
	width: 260px;
	height: 32px;
	display: flex;
	flex-direction: row;
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const InputField = styled.input`
	width: 100%;
	height: 100%;
	border: 0;
	padding: 0 0 0 14px;
	border-radius: 2px;
`;

export const SearchBtn = styled.button`
	border: none;
	background-color: transparent;
	position: absolute;
	right: 0;
	height: 100%;

	img {
		height: 15px;
	}
`;
