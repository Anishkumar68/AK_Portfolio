import React, { useState } from "react";
import styled from "styled-components";
import { IoClose } from "react-icons/io5"; // Importing the close icon

const HighlightBox = ({ title, message }) => {
	const [isVisible, setIsVisible] = useState(true);

	// Function to close the notification
	const handleClose = () => {
		setIsVisible(false);
	};

	// Ensure the entire component is removed when isVisible is false
	if (!isVisible) return null;
	return (
		<StyledWrapper>
			<div className="notification">
				<div className="notiglow" />
				<div className="notiborderglow" />

				{/* Close Button */}
				<button className="close-btn" onClick={handleClose}>
					<IoClose size={30} />
				</button>

				{/* Title */}
				<div className="notititle">{title}</div>

				{/* Message */}
				<div className="notibody">{message}</div>

				<button className="hireme-btn ">Hire Me</button>
			</div>
		</StyledWrapper>
	);
};

const StyledWrapper = styled.div`
	.notification {
		display: flex;
		flex-direction: column;
		position: fixed;
		bottom: 20px;
		left: 20px;
		width: 18rem;
		height: auto;
		background: #29292c;
		border-radius: 1rem;
		overflow: hidden;
		padding: 16px;

		box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
		z-index: 1000;
		--gradient: linear-gradient(to bottom, #2eadff, #3d83ff, #7e61ff);
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
		color: #32a6ff;
		font-weight: 500;
		font-size: 1.1rem;
		margin-bottom: 5px;
		text-align: center;
	}

	.notibody {
		color: #99999d;
		font-size: 0.9rem;
		line-height: 1.4;
		margin-bottom: 10px;
		text-align: center;
	}

	.hireme-btn {
		background: #ffcc00;
		color: black;
		font-weight: bold;
		padding: 8px;
		border-radius: 8px;
		transition: all 0.3s ease;
		text-align: center;
		width: 100%;
		margin: auto 6px;
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
		z-index: 50;
	}

	.close-btn:hover {
		color: #ffcc00;
	}
`;

export default HighlightBox;
