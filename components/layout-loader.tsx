"use client";

import { useEffect, useState } from "react";
import { Spinner } from "@/components/ui/spinner";

const LayoutLoader = ({ children }: { children: React.ReactNode }) => {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => setLoading(false), 1000);
		return () => clearTimeout(timer);
	}, []);

	if (loading) {
		return (
			<div className='flex min-h-screen flex-col items-center justify-center gap-4'>
				<Spinner className='size-25 text-purple-500' />
				<p className='text-xl text-foreground animate-pulse'>
					Welcome to MoICE...
				</p>
			</div>
		);
	}

	return <>{children}</>;
};

export default LayoutLoader;
