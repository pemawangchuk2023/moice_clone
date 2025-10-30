import React, { useRef, ReactNode } from "react";

interface GlowCardProps {
	children: ReactNode;
	className?: string;
}

const GlowCard = ({ children, className = "" }: GlowCardProps) => {
	const cardRef = useRef<HTMLDivElement>(null);

	const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
		const card = cardRef.current;
		if (!card) return;

		const rect = card.getBoundingClientRect();
		const mouseX = e.clientX - rect.left - rect.width / 2;
		const mouseY = e.clientY - rect.top - rect.height / 2;

		let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
		angle = (angle + 360) % 360;

		card.style.setProperty("--start", `${angle + 60}`);
	};

	return (
		<div
			ref={cardRef}
			onMouseMove={handleMouseMove}
			className={`card ${className}`}
		>
			<div className='glow' />
			{children}
		</div>
	);
};

export default GlowCard;
