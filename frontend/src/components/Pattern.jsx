import React from "react";
import styled from "styled-components";

const Pattern = ({ children }) => {
	return <StyledWrapper>{children}</StyledWrapper>;
};

const StyledWrapper = styled.div`
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	background-color: #191a1a;
	--color: rgba(114, 114, 114, 0.3);
	background-image: linear-gradient(
			0deg,
			transparent 24%,
			var(--color) 25%,
			var(--color) 26%,
			transparent 27%,
			transparent 74%,
			var(--color) 75%,
			var(--color) 76%,
			transparent 77%,
			transparent
		),
		linear-gradient(
			90deg,
			transparent 24%,
			var(--color) 25%,
			var(--color) 26%,
			transparent 27%,
			transparent 74%,
			var(--color) 75%,
			var(--color) 76%,
			transparent 77%,
			transparent
		);
	background-size: 55px 55px;
`;

export default Pattern;
