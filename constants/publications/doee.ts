export interface DoEEPublication {
	title: string;
	fileName: string;
	url: string;
	date?: string;
}

export interface DoEEPublicationCategory {
	key: string;
	name: string;
	publications: DoEEPublication[];
}

export const doeeCategories: DoEEPublicationCategory[] = [
	// --- Category: Labour Force Survey Reports ---
	{
		key: "lfs",
		name: "Labour Force Survey Reports",
		publications: [
			{
				title: "Labour Force Survey Report 2011",
				fileName: "LFS2011.pdf",
				url: "/publications/doee/lfs/LFS2011.pdf",
				date: "2011",
			},
			{
				title: "Final Labour Force Survey Report 2012",
				fileName: "Final-LFS-Report-2012_UT.pdf",
				url: "/publications/doee/lfs/Final-LFS-Report-2012_UT.pdf",
				date: "2012",
			},
			{
				title: "Labour Force Survey Report 2013 (Final)",
				fileName: "LFS-Report-2013-FINAL.pdf",
				url: "/publications/doee/lfs/LFS-Report-2013-FINAL.pdf",
				date: "2013",
			},
		],
	},
	// --- Category: Labour Market Bulletin ---
	{
		key: "lmb",
		name: "Labour Market Information Bulletins",
		publications: [
			{
				title: "Labour Market Information Bulletin 2017",
				fileName: "Labour-Market-Information-Bulletin-2017.pdf",
				url: "/publications/doee/lmb/Labour-Market-Information-Bulletin-2017.pdf",
				date: "2017",
			},
			{
				title: "Labour Market Information Bulletin 2018",
				fileName: "Labour-Market-Information-Bulletin-2018.pdf",
				url: "/publications/doee/lmb/Labour-Market-Information-Bulletin-2018.pdf",
				date: "2018",
			},
			{
				title: "Labour Market Information Bulletin 2019",
				fileName: "Labour-Market-Information-Bulletin-2019.pdf",
				url: "/publications/doee/lmb/Labour-Market-Information-Bulletin-2019.pdf",
				date: "2019",
			},
			{
				title: "Labour Market Information Bulletin 2023",
				fileName: "Labour-Market-Information-Bulletin_2023.pdf",
				url: "/publications/doee/lmb/Labour-Market-Information-Bulletin_2023.pdf",
				date: "2023",
			},
			{
				title: "Labour Market Information Bulletin 2024",
				fileName: "Labour-Market-Information-Bulletin-2024.pdf",
				url: "/publications/doee/lmb/Labour-Market-Information-Bulletin-2024.pdf",
				date: "2024",
			},
			{
				title: "Labour Market Information Bulletin 2025",
				fileName: "LMIB-2025.pdf",
				url: "/publications/doee/lmb/LMIB-2025.pdf",
				date: "2025",
			},
		],
	},
	// --- Category: Labour Market Information Guide ---
	{
		key: "lmg",
		name: "Labour Market Information Guides",
		publications: [
			{
				title: "Labour Market Information Guide 2019",
				fileName: "LMIG2019.pdf",
				url: "/publications/doee/lmg/LMIG2019.pdf",
				date: "2019",
			},
			{
				title: "Labour Market Information Guide 2020",
				fileName: "LABOUR-MARKET-INFORMATION-GUIDE-2020.pdf",
				url: "/publications/doee/lmg/LABOUR-MARKET-INFORMATION-GUIDE-2020.pdf",
				date: "2020",
			},
			{
				title: "Labour Market Information Guide for Job Seekers 2023",
				fileName: "Labour-Market-Information-Guide-for-Job-Seekers-2023.pdf",
				url: "/publications/doee/lmg/Labour-Market-Information-Guide-for-Job-Seekers-2023.pdf",
				date: "2023",
			},
			{
				title: "Labour Market Information Guide for Job Seekers 2024",
				fileName: "Labour-Market-Information-Guide-for-Job-Seekers-2024.pdf",
				url: "/publications/doee/lmg/Labour-Market-Information-Guide-for-Job-Seekers-2024.pdf",
				date: "2024",
			},
		],
	},
	// --- Category: Labour Market Information Guide ---
	{
		key: "lmic",
		name: "Labour Market Information & Career Guidance",
		publications: [
			{
				title: "Job Prospecting Report 2015 (Final)",
				fileName: "Job-Prospecting-Report-2015-Final.pdf",
				url: "/publications/doee/lmic/Job-Prospecting-Report-2015-Final.pdf",
				date: "2015",
			},
			{
				title: "Jobseeker Survey Report 2022",
				fileName: "Jobseeker-Survey-Report-2022.pdf",
				url: "/publications/doee/lmic/Jobseeker-Survey-Report-2022.pdf",
				date: "2022",
			},
			{
				title: "Career Occupational Dictionary 2023",
				fileName: "Career-Occupational-Dictionary_2023.pdf",
				url: "/publications/doee/lmic/Career-Occupational-Dictionary_2023.pdf",
				date: "2023",
			},
			{
				title: "World Bank Bhutan Labor Market Assessment Report",
				fileName: "World-Bank-Bhutan-Labor-Market-Assessment-Report.pdf",
				url: "/publications/doee/lmic/World-Bank-Bhutan-Labor-Market-Assessment-Report.pdf",
			},
		],
	},
	// --- Category: LaYog NeySheyd ---
	{
		key: "ln",
		name: "LaYog NeySheyd",
		publications: [
			{
				title: "LaYog NeySheyd Issue I",
				fileName: "LaYog-NeySheyd_Issue-1.pdf",
				url: "/publications/doee/ln/LaYog-NeySheyd_Issue-1.pdf",
			},
			{
				title: "LaYog NaySheyd Issue II",
				fileName: "LaYog-NaySheyd-Issue-II.pdf",
				url: "/publications/doee/ln/LaYog-NaySheyd-Issue-II.pdf",
			},
			{
				title: "LaYog NaySheyd Issue III",
				fileName: "LaYog-NaySheyd-Issue-III.pdf",
				url: "/publications/doee/ln/LaYog-NaySheyd-Issue-III.pdf",
			},
		],
	},
	// --- Category: Quarterly Labour Market Information Updates ---
	{
		key: "qlmiu",
		name: "Quarterly Labour Market Information Updates",
		publications: [
			{
				title:
					"Quarterly Labour Market Information Update – 1st Quarter 2024–2025",
				fileName:
					"Quarterly-Labour-Market-Information-Update_1st-Quarter-2024-25.pdf",
				url: "/publications/doee/qlmiu/Quarterly-Labour-Market-Information-Update_1st-Quarter-2024-25.pdf",
				date: "1st Quarter 2024–2025",
			},
			{
				title: "3rd Quarter Labour Market Information Update",
				fileName: "3rd-Quarter-Labour-Market-Information-Update.pdf",
				url: "/publications/doee/qlmiu/3rd-Quarter-Labour-Market-Information-Update.pdf",
				date: "3rd Quarter",
			},
			{
				title: "4th Quarter Labour Market Information Update",
				fileName: "4th-Quarter-Labour-Market-Information-Update.pdf",
				url: "/publications/doee/qlmiu/4th-Quarter-Labour-Market-Information-Update.pdf",
				date: "4th Quarter",
			},
		],
	},
	// --- Category: Reports, Researches & Other Publication ---
	{
		key: "rro",
		name: "Reports, Researches & Other Publications",
		publications: [
			{
				title: "Stories of Beneficiaries (May 2019)",
				fileName: "Stories-of-Beneficiaries-22.5.2019.pdf",
				url: "/publications/doee/rro/Stories-of-Beneficiaries-22.5.2019.pdf",
				date: "May 2019",
			},
			{
				title: "DoEE Annual Report 2022–2023 (Final Edition 1)",
				fileName: "DoEE-Annual-Report-2022-23-Final-Edition-1.pdf",
				url: "/publications/doee/rro/DoEE-Annual-Report-2022-23-Final-Edition-1.pdf",
				date: "2022–2023",
			},
			{
				title: "DoEE Annual Report 2024–2025",
				fileName: "DoEE-Annual-Report-2024-25.pdf",
				url: "/publications/doee/rro/DoEE-Annual-Report-2024-25.pdf",
				date: "2024–2025",
			},
			{
				title: "Employment and Entrepreneurship Report 2023–2024",
				fileName: "EER_2023-24-Report.pdf",
				url: "/publications/doee/rro/EER_2023-24-Report.pdf",
				date: "2023–2024",
			},
			{
				title:
					"Survey Report – Overseas Employment Program Monitoring 2024–2025",
				fileName:
					"Survey-Report_-Overseas-Employment-Program-Monitoring-2024-2025-2.pdf",
				url: "/publications/doee/rro/Survey-Report_-Overseas-Employment-Program-Monitoring-2024-2025-2.pdf",
				date: "2024–2025",
			},
		],
	},
];
