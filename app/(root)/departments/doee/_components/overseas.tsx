import GlowCard from "@/components/shared/glow-card";
import { Copy } from "lucide-react";
import { toast } from "sonner";

const Overseas = () => {
	const countries = [
		"Thailand",
		"UAE",
		"Belgium",
		"Qatar",
		"Malaysia",
		"Canada",
		"Middle East",
		"Singapore",
		"Australia",
	];

	const handleCopyEmail = (text: string) => {
		navigator.clipboard.writeText(text);
		toast("You have copied the email successfully");
	};

	return (
		<div className='min-h-screen'>
			<div className='max-w-4xl mx-auto'>
				{/* Header */}
				<div className='rounded-lg shadow-lg p-4 mb-4'>
					<h1 className='text-3xl font-bold text-foreground'>
						Overseas Employment Information
					</h1>

					{/* Countries Section */}
					<div className='mb-8'>
						<h2 className='text-xl font-semibold text-blue-500 mb-4 flex items-center justify-center gap-2'>
							Overseas Identified Countries
						</h2>
						<div className='grid grid-cols-2 md:grid-cols-3 gap-3'>
							{countries.map((country, index) => (
								<div
									key={index}
									className='rounded-none border p-3 text-center hover:bg-indigo-500 transition-colors duration-200'
								>
									<span className='text-yellow-500 font-medium'>{country}</span>
								</div>
							))}
						</div>
					</div>
				</div>

				{/* Contact Details */}
				<div className='grid md:grid-cols-2 gap-6'>
					{/* Overseas Focal Person */}
					<GlowCard className='p-2 flex flex-col relative rounded-3xl overflow-hidden bg-white dark:bg-zinc-900 border-2 border-border hover:border-primary/50 transition-colors'>
						<div className='shadow-lg p-6'>
							<h2 className='text-xl font-semibold text-indigo-600 mb-4'>
								Overseas Focal Person
							</h2>
							<div className='space-y-3'>
								<div className='text-yellow-500'>
									<p className='text-sm'>Office Numbers</p>
									<p className='font-medium'>02-330788</p>
									<p className='font-medium'>02-330787</p>
								</div>

								<div>
									<p className='text-sm text-foreground'>Email</p>
									<div className='flex items-center gap-2'>
										<a
											href='mailto:overseas@moice.gov.bt'
											className='text-yellow-500 hover:text-indigo-800 font-medium break-all'
										>
											overseas@moice.gov.bt
										</a>
										<button
											onClick={() => handleCopyEmail("overseas@moice.gov.bt")}
											className='p-1 hover:text-yellow-600 transition-colors cursor-pointer'
											title='Copy email'
										>
											<Copy className='w-4 h-4' />
										</button>
									</div>
								</div>
							</div>
						</div>
					</GlowCard>

					{/* YELP Focal Person */}
					<GlowCard className='rounded-2 p-2 flex flex-col relative overflow-hidden bg-white rounded-3xl dark:bg-zinc-900 border-2 border-border hover:border-primary/50 transition-colors'>
						<div className='rounded-none shadow-lg p-6'>
							<h2 className='text-xl font-semibold text-indigo-600 mb-4'>
								YELP Focal Person
							</h2>
							<div className='space-y-3'>
								<div className='text-foreground'>
									<p className='text-sm'>Office Numbers</p>
									<p className='font-medium'>02-339529</p>
									<p className='font-medium'>02-339530</p>
								</div>

								<div>
									<p className='text-sm text-gray-500'>Email</p>
									<div className='flex items-center gap-2'>
										<a
											href='mailto:dzangmo@moice.gov.bt'
											className='text-indigo-600 hover:text-indigo-800 font-medium break-all'
										>
											dzangmo@moice.gov.bt
										</a>
										<button
											onClick={() => handleCopyEmail("dzangmo@moice.gov.bt")}
											className='p-1 hover:text-yellow-600 transition-colors cursor-pointer'
											title='Copy email'
										>
											<Copy className='w-4 h-4' />
										</button>
									</div>
									<div className='flex items-center gap-2 mt-1'>
										<a
											href='mailto:kwangdi@moice.gov.bt'
											className='text-indigo-600 hover:text-indigo-800 font-medium break-all'
										>
											kwangdi@moice.gov.bt
										</a>
										<button
											onClick={() => handleCopyEmail("kwangdi@moice.gov.bt")}
											className='p-1 hover:text-yellow-600 transition-colors cursor-pointer'
											title='Copy email'
										>
											<Copy className='w-4 h-4' />
										</button>
									</div>
								</div>
							</div>
						</div>
					</GlowCard>
				</div>

				{/* Footer Note */}
				<div className='mt-6 bg-green-500 border-l-4 border-indigo-600 p-4 rounded'>
					<p className='text-sm text-foreground'>
						<strong>Note:</strong> For overseas employment inquiries and YELP
						(Youth Employment and Livelihood Program) related questions, please
						contact the respective focal persons using the details above.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Overseas;
