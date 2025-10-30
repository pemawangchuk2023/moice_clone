export interface MinistryService {
	title: string;
	subtitle: string;
	description: string;
	urlLink?: string;
}

export const ministryServices: MinistryService[] = [
	{
		title: "For Job Seekers & Trainees",
		subtitle: "Ministry Online Services",
		description:
			"Online system for job seekers registration, search for jobs, apply for jobs, trainings, etc…",
		urlLink: "https://www.blmis.gov.bt/",
	},
	{
		title: "For Employer (Fwms & Las)",
		subtitle: "Ministry Online Services",
		description:
			"Registration, update employees data, apply for foreign workers, etc…",
		urlLink: "https://www.blmis.gov.bt/",
	},
	{
		title: "Industry Information System",
		subtitle: "Ministry Online Services",
		description:
			"The IIS enables industries to electronically submit updated information, etc…",
		urlLink: "https://iis.industry.gov.bt/",
	},
	{
		title: "Bhutan Trade Info Portal",
		subtitle: "Ministry Online Services",
		description:
			"Online portal on export & its rules, Bhutanese products, Bhutanese companies, etc…",
		urlLink: "http://www.bhutantradeportal.bt/",
	},
	{
		title: "IBLS System",
		subtitle: "Ministry Online Services",
		description:
			"Apply new business license, renewal of license/certificate, cancel license/certificate, other services, etc….",
		urlLink: "https://ibls.systems.gov.bt/",
	},
	{
		title: "Invest Bhutan Portal",
		subtitle: "Ministry Online Services",
		description:
			"Provides information on starting FDI businesses such as opportunities, regulations, processes, incentives, etc.",
		urlLink: "https://investbhutan.gov.bt/",
	},
	{
		title: "Bhutan TradeFIN Net",
		subtitle: "Ministry Online Services",
		description:
			"Provides a single platform for businesses & individuals to fulfill trade formalities & record transactions, etc…",
		urlLink: "https://www.btfn.bt/",
	},
	{
		title: "CCMS System",
		subtitle: "Ministry Online Services",
		description:
			"Competition & Consumer Management System to register, manage & resolve consumer complaints, etc.",
		urlLink: "https://ccms.ccaa.gov.bt/complain-form/new",
	},
];
