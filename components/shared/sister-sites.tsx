import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import { sisterSites } from "@/constants/sister-sites";
import Link from "next/link";

interface SiteProps {
	name: string;
	link: string;
	category?: string;
}

const SiteLink = ({ name, link }: SiteProps) => (
	<Link
		href={link}
		target='_blank'
		rel='noopener noreferrer'
		className='group flex items-center gap-2 px-3 py-2 rounded-none transition-all hover:bg-yellow-50 dark:hover:bg-yellow-950/20 border border-transparent hover:border-yellow-200 dark:hover:border-yellow-800'
	>
		<ExternalLink className='h-3 w-3 text-slate-400 group-hover:text-yellow-600 dark:group-hover:text-yellow-500 flex-shrink-0' />
		<span className='text-xs font-medium text-foreground group-hover:text-slate-900 dark:group-hover:text-white truncate'>
			{name}
		</span>
	</Link>
);

const SisterSites = () => {
	const totalSites = sisterSites.length;

	return (
		<section className='w-full py-6 border-t'>
			<div className='container mx-auto px-4 max-w-7xl'>
				<Card className='border-slate-200 dark:border-slate-800 shadow-sm'>
					<CardContent className='p-4'>
						{/* Compact Header */}
						<div className='flex items-center capitalize justify-center mb-3 pb-3 border-b-2 border-green-500'>
							<div className='flex items-center gap-2'>
								<h3 className='text-sm font-semibold text-orange-600 '>
									These are sister links where you can click
								</h3>
								<Badge
									variant='secondary'
									className='bg-yellow-400 text-slate-900 hover:bg-yellow-500 text-xs font-medium h-5 px-2'
								>
									{totalSites}
								</Badge>
							</div>
						</div>

						{/* Compact Grid */}
						<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2'>
							{sisterSites.map((site, index) => (
								<SiteLink key={index} name={site.name} link={site.link} />
							))}
						</div>
					</CardContent>
				</Card>
			</div>
		</section>
	);
};

export default SisterSites;
