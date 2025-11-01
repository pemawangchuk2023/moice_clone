"use client";

import { useState, useEffect } from "react";
import { format } from "date-fns";

const LiveDateTime = () => {
	const [currentTime, setCurrentTime] = useState<Date | null>(null);

	useEffect(() => {
		setCurrentTime(new Date());

		const intervalId = setInterval(() => {
			setCurrentTime(new Date());
		}, 1000);

		return () => clearInterval(intervalId);
	}, []);

	if (!currentTime) return null;

	const formattedDate = format(currentTime, "dd MMMM, yyyy");
	const formattedTime = format(currentTime, "h:mm:ss a");

	return (
		<div className='text-right'>
			<div className='text-sm  text-green-600 font-bold'>{formattedDate}</div>
			<div className='text-lg font-bold'>{formattedTime}</div>
		</div>
	);
};

export default LiveDateTime;
