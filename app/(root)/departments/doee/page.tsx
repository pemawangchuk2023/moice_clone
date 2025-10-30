"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import Overview from "@/app/(root)/departments/doee/_components/overview";
import DOEEDivisions from "@/app/(root)/departments/doee/_components/doee-divisions";
import Overseas from "@/app/(root)/departments/doee/_components/overseas";

const DoEE = () => {
	const [activeTab, setActiveTab] = useState("overview");

	const tabs = [
		{ id: "overview", label: "Overview" },
		{ id: "mandates", label: "Mandates" },
		{ id: "overseas", label: "Overseas" },
	];

	return (
		<div className='min-h-screen p-6'>
			<div className='mb-8'>
				<div className='flex gap-2 p-2'>
					{tabs.map((tab) => (
						<button
							key={tab.id}
							onClick={() => setActiveTab(tab.id)}
							className={`px-6 py-3 rounded-xl font-bold text-[20px] transition-all
								${
									activeTab === tab.id
										? "bg-primary text-primary-foreground"
										: "text-muted-foreground hover:text-foreground hover:bg-primary/10"
								}`}
						>
							{tab.label}
						</button>
					))}
				</div>
			</div>

			<div className='animate-in fade-in duration-300'>
				{activeTab === "overview" && (
					<Card className='p-6 shadow-sm'>
						<Overview />
					</Card>
				)}

				{activeTab === "mandates" && (
					<Card className='p-6 shadow-sm text-center py-12'>
						<DOEEDivisions />
					</Card>
				)}

				{activeTab === "overseas" && (
					<Card className='p-6 shadow-sm text-center py-12'>
						<Overseas />
					</Card>
				)}
			</div>
		</div>
	);
};

export default DoEE;
