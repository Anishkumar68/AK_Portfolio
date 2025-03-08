// import React, { useState } from "react";
import styled from "styled-components";
import { IoClose } from "react-icons/io5"; // Importing the close icon

const HighlightBox = ({ title, message, onClose }) => {
	return (
		<StyledWrapper>
			<div className="notification">
				<div className="notiglow" />
				<div className="notiborderglow" />

				{/* Close Button */}
				<button className="close-btn" onClick={onClose}>
					<IoClose size={20} />
				</button>

				{/* Title */}
				<div className="notititle">{title}</div>

				{/* Message */}
				<div className="notibody">{message}</div>

				{/* Hire Me Button */}
				<div className="btn-container">
					<button className="hireme-btn">Hire Me</button>
				</div>
			</div>
		</StyledWrapper>
	);
};

const StyledWrapper = styled.div`
	.notification {
		display: flex;
		flex-direction: column;
		position: relative;
		width: 18rem;
		height: 8rem;
		background: #29292c;
		border-radius: 1rem;
		overflow: hidden;
		font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
			sans-serif;
		font-size: 16px;
		--gradient: linear-gradient(to bottom, #2eadff, #3d83ff, #7e61ff);
		--color: #32a6ff;
	}

	.notification:before {
		position: absolute;
		content: "";
		inset: 0.0625rem;
		border-radius: 0.9375rem;
		background: #18181b;
		z-index: 2;
	}

	.notification:after {
		position: absolute;
		content: "";
		width: 0.25rem;
		inset: 0.65rem auto 0.65rem 0.5rem;
		border-radius: 0.125rem;
		background: var(--gradient);
		transition: transform 300ms ease;
		z-index: 4;
	}

	.notification:hover:after {
		transform: translateX(0.15rem);
	}

	.notititle {
		color: var(--color);
		padding: 0.65rem 0.25rem 0.4rem 1.25rem;
		font-weight: 500;
		font-size: 1.1rem;
		transition: transform 300ms ease;
		z-index: 5;
	}

	.notification:hover .notititle {
		transform: translateX(0.15rem);
	}

	.notibody {
		color: #99999d;
		padding: 0 1.25rem;
		transition: transform 300ms ease;
		z-index: 5;
	}

	.notification:hover .notibody {
		transform: translateX(0.25rem);
	}

	.notiglow,
	.notiborderglow {
		position: absolute;
		width: 20rem;
		height: 20rem;
		transform: translate(-50%, -50%);
		background: radial-gradient(
			circle closest-side at center,
			white,
			transparent
		);
		opacity: 0;
		transition: opacity 300ms ease;
	}

	.notiglow {
		z-index: 3;
	}

	.notiborderglow {
		z-index: 1;
	}

	.notification:hover .notiglow {
		opacity: 0.1;
	}

	.notification:hover .notiborderglow {
		opacity: 0.1;
	}

	.btn-container {
		display: flex;
		justify-content: center;
		margin-top: 10px;
	}

	.hireme-btn {
		background: #ffcc00;
		color: black;
		font-weight: bold;
		padding: 6px 12px;
		border-radius: 6px;
		transition: all 0.3s ease;
	}

	.hireme-btn:hover {
		background: #8502ff;
		color: white;
	}

	.close-btn {
		position: absolute;
		top: 8px;
		right: 8px;
		background: transparent;
		border: none;
		color: white;
		cursor: pointer;
		z-index: 10;
	}

	.close-btn:hover {
		color: #ffcc00;
	}
`;

export default HighlightBox;
