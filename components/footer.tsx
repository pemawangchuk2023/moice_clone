"use client";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Copy, MoveRight } from "lucide-react";
import { toast } from "sonner";

const Footer = () => {
	const currentYear = new Date().getFullYear();
	const handleCopyEmail = (text: string) => {
		navigator.clipboard.writeText(text);
		toast("You have copied the email successfully");
	};

	return (
		<footer className='w-full border-t'>
			<div className='container mx-auto px-4 py-12'>
				<div className='grid grid-cols-1 md:grid-cols-3 gap-12 w-full'>
					{/* Ministry Info */}
					<div className='space-y-4'>
						<div className='space-y-1'>
							<h3 className='font-bold text-xl text-foreground'>
								Ministry of Industry, Commerce and Employment
							</h3>
							<div className='w-12 h-1 bg-primary rounded-full'></div>
						</div>
						<p className='text-sm text-foreground'>
							Royal Government of Bhutan
						</p>
						<p className='text-sm text-foreground'>Thimphu, Bhutan</p>
					</div>

					{/* Quick Links */}
					<div className='space-y-4'>
						<div className='space-y-1'>
							<h4 className='font-semibold text-lg text-foreground'>
								Quick Links
							</h4>
							<div className='w-12 h-1 bg-primary rounded-full'></div>
						</div>
						<nav className='flex flex-col space-y-3'>
							<Link
								href='/'
								className='text-sm text-foreground hover:text-primary transition-colors group flex items-center'
							>
								<span className='group-hover:translate-x-1 transition-transform'>
									News & Announcements
								</span>
								<MoveRight className='ml-2 h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity' />
							</Link>
							<Link
								href='/'
								className='text-sm text-foreground hover:text-primary transition-colors group flex items-center'
							>
								<span className='group-hover:translate-x-1 transition-transform'>
									Publications
								</span>
								<MoveRight className='ml-2 h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity' />
							</Link>
							<Link
								href='/'
								className='text-sm text-foreground hover:text-primary transition-colors group flex items-center'
							>
								<span className='group-hover:translate-x-1 transition-transform'>
									Tenders & Notices
								</span>
								<MoveRight className='ml-2 h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity' />
							</Link>
						</nav>
					</div>

					{/* Contact */}
					<div className='space-y-4'>
						<div className='space-y-1'>
							<h4 className='font-semibold text-lg text-foreground'>
								Contact Information
							</h4>
							<div className='w-12 h-1 bg-primary rounded-full'></div>
						</div>
						<div className='space-y-3 text-sm text-foreground'>
							<p>Ministry of Industry, Commerce & Employment</p>
							<p>P.O Box #1036, Thongsel Lam</p>
							<p>Lower Motithang</p>
							<p>Thimphu, Bhutan</p>
							<p>
								<span className='font-medium text-foreground'>PABX:</span>{" "}
								+975-2-328236 / 324845 / 333867
							</p>
							<p>
								<span className='font-medium text-foreground'>
									Overseas Unit:
								</span>{" "}
								02-339531
							</p>
							<p>
								<span className='font-medium text-foreground'>
									Employment Service Centre:
								</span>{" "}
								02-334495
							</p>
						</div>
					</div>
				</div>

				<Separator className='my-8' />

				{/* Bottom Section */}
				<div className='flex flex-col md:flex-row md:justify-between items-center gap-4'>
					<div className='text-2xl text-amber-500 font-extrabold text-center md:text-left'>
						© {currentYear} Ministry of Industry, Commerce and Employment
					</div>
					{/* Media Focal Person */}
					<div className='text-sm text-foreground text-center md:text-right'>
						<p className='font-medium text-green-500'>Media Focal Person:</p>
						<p>Miss. Palden Lhamo</p>
						<p>
							<a
								href='mailto:paldenl@moice.gov.bt'
								className='hover:text-primary transition-colors text-orange-500'
							>
								paldenl@moice.gov.bt
							</a>
						</p>
						<button
							onClick={() => handleCopyEmail("paldenl@moice.gov.bt")}
							className='p-1 hover:text-yellow-600 transition-colors cursor-pointer flex-shrink-0'
							title='Copy email'
						>
							<Copy className='w-3 h-3 sm:w-4 sm:h-4' />
						</button>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
