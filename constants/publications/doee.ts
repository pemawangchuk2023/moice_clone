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
				title: "Labour Force Survey Report 2006",
				fileName: "LFS-2006.pdf",
				url: "/publications/doee/lfs/LFS-2006.pdf",
				date: "2006",
			},
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
			{
				title: "Labour Force Survey Report 2014",
				fileName: "Labour-Force-Survey-Report-2014.pdf",
				url: "/publications/doee/lfs/Labour-Force-Survey-Report-2014.pdf",
				date: "2014",
			},
			{
				title: "Labour Force Survey Report 2015",
				fileName: "LFS2015-Report-Final.pdf",
				url: "/publications/doee/lfs/LFS2015-Report-Final.pdf",
				date: "2015",
			},
			{
				title: "Labour Force Survey Report 2016",
				fileName: "Labour-Force-Survey-Report-2016.pdf",
				url: "/publications/doee/lfs/Labour-Force-Survey-Report-2016.pdf",
				date: "2016",
			},
			{
				title: "Labour Force Survey Report 2017",
				fileName: "Labour-Force-Survey-Report-2017.pdf",
				url: "/publications/doee/lfs/Labour-Force-Survey-Report-2017.pdf",
				date: "2017",
			},
			{
				title: "Labour Force Survey Report (FLF)",
				fileName: "flf.pdf",
				url: "/publications/doee/lfs/flf.pdf",
			},
			{
				title: "Labour Force Survey Report (LFS)",
				fileName: "lfs.pdf",
				url: "/publications/doee/lfs/lfs.pdf",
			},
		],
	},
	// --- Category: Labour Market Bulletin ---
	{
		key: "lmb",
		name: "Labour Market Information Bulletins",
		publications: [
			{
				title: "Labour Market Information Bulletin 2007",
				fileName: "Labour-Market-Information-Bulletin-2007.pdf",
				url: "/publications/doee/lmb/Labour-Market-Information-Bulletin-2007.pdf",
				date: "2007",
			},
			{
				title: "Labour Market Information Bulletin 2010",
				fileName: "Labour-Market-Information-Bulletin-2010.pdf",
				url: "/publications/doee/lmb/Labour-Market-Information-Bulletin-2010.pdf",
				date: "2010",
			},
			{
				title: "Labour Market Information Bulletin 2011",
				fileName: "Labour-Market-Information-Bulletin-2011.pdf",
				url: "/publications/doee/lmb/Labour-Market-Information-Bulletin-2011.pdf",
				date: "2011",
			},
			{
				title: "Labour Market Information Bulletin 2012",
				fileName: "Labour-Market-Information-Bulletin-2012.pdf",
				url: "/publications/doee/lmb/Labour-Market-Information-Bulletin-2012.pdf",
				date: "2012",
			},
			{
				title: "Labour Market Information Bulletin 2014 (Final Draft)",
				fileName: "Final-draft-Labour-Market-Information-Bulletin-2014-1.pdf",
				url: "/publications/doee/lmb/Final-draft-Labour-Market-Information-Bulletin-2014-1.pdf",
				date: "2014",
			},
			{
				title: "Labour Market Information Bulletin 2015",
				fileName: "Labour-Market-Information-Bulletin-2015.pdf",
				url: "/publications/doee/lmb/Labour-Market-Information-Bulletin-2015.pdf",
				date: "2015",
			},
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
				title: "BLMI 2021 Final",
				fileName: "blmi_2021_final_2.pdf",
				url: "/publications/doee/lmb/blmi_2021_final_2.pdf",
				date: "2021",
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
				title: "Labour Market Information Pamphlet 2010",
				fileName: "lmiphamplet2010.pdf",
				url: "/publications/doee/lmg/lmiphamplet2010.pdf",
				date: "2010",
			},
			{
				title: "Labour Market Information Guide 2018 (For Job Seekers)",
				fileName: "Labour-Market-Information-Guide-for-Job-Seekers-2018.pdf",
				url: "/publications/doee/lmg/Labour-Market-Information-Guide-for-Job-Seekers-2018.pdf",
				date: "2018",
			},
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
				title: "Guide Book Final 2021 (Web)",
				fileName: "guide_book_final_2021_web.pdf",
				url: "/publications/doee/lmg/guide_book_final_2021_web.pdf",
				date: "2021",
			},
			{
				title: "Guide Book Final 2021",
				fileName: "guide-book-final.pdf",
				url: "/publications/doee/lmg/guide-book-final.pdf",
				date: "2021",
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
			{
				title: "Labour Market Information Guide 1",
				fileName: "lmiguide1.pdf",
				url: "/publications/doee/lmg/lmiguide1.pdf",
			},
			{
				title: "Undergraduate Guide (UG)",
				fileName: "UG.pdf",
				url: "/publications/doee/lmg/UG.pdf",
			},
			{
				title: "XXII",
				fileName: "XXII.pdf",
				url: "/publications/doee/lmg/XXII.pdf",
			},
		],
	},
	// --- Category: Labour Market Information Guide ---
	{
		key: "lmic",
		name: "Labour Market Information & Career Guidance",
		publications: [
			{
				title: "Establishment Census Report 2010",
				fileName: "Establishment-Census-Report-2010.pdf",
				url: "/publications/doee/lmic/Establishment-Census-Report-2010.pdf",
				date: "2010",
			},
			{
				title: "Job Prospecting Report 2015 (Final)",
				fileName: "Job-Prospecting-Report-2015-Final.pdf",
				url: "/publications/doee/lmic/Job-Prospecting-Report-2015-Final.pdf",
				date: "2015",
			},
			{
				title: "Establishment Survey Report 2016",
				fileName: "Establishment-Survey-Report-2016.pdf",
				url: "/publications/doee/lmic/Establishment-Survey-Report-2016.pdf",
				date: "2016",
			},
			{
				title: "Establishment Survey Report – March 2017",
				fileName: "Establishment-Survey-Report-2017-March.pdf",
				url: "/publications/doee/lmic/Establishment-Survey-Report-2017-March.pdf",
				date: "March 2017",
			},
			{
				title: "Establishment Survey Report – November 2017",
				fileName: "Establishment-Survey-Report-2017-November.pdf",
				url: "/publications/doee/lmic/Establishment-Survey-Report-2017-November.pdf",
				date: "November 2017",
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
				title: "Career Compass Toolkit",
				fileName: "Career-Compass-Toolkit.pdf",
				url: "/publications/doee/lmic/Career-Compass-Toolkit.pdf",
			},
			{
				title: "World Bank Bhutan Labor Market Assessment Report",
				fileName: "World-Bank-Bhutan-Labor-Market-Assessment-Report.pdf",
				url: "/publications/doee/lmic/World-Bank-Bhutan-Labor-Market-Assessment-Report.pdf",
			},
			{
				title: "Establishment Report (General)",
				fileName: "establishment.pdf",
				url: "/publications/doee/lmic/establishment.pdf",
			},
			{
				title: "Job Prospecting Report (JP)",
				fileName: "jp.pdf",
				url: "/publications/doee/lmic/jp.pdf",
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
				title: "1st Quarter 2025–2026 Labour Market Information Update",
				fileName: "1st-Quarter-2025-2026-Labour-Market-Information-Update.pdf",
				url: "/publications/doee/qlmiu/1st-Quarter-2025-2026-Labour-Market-Information-Update.pdf",
				date: "1st Quarter 2025–2026",
			},
			{
				title: "2nd Quarter Labour Market Information Update",
				fileName: "2nd-Quarter-Labour-Market-Information-Update-1.pdf",
				url: "/publications/doee/qlmiu/2nd-Quarter-Labour-Market-Information-Update-1.pdf",
				date: "2nd Quarter",
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
				title: "Bhutan NES Project – UEBHU11001 (March 2015)",
				fileName: "Bhutan-NES_Project-UEBHU11001_Mar-2015.pdf",
				url: "/publications/doee/rro/Bhutan-NES_Project-UEBHU11001_Mar-2015.pdf",
				date: "March 2015",
			},
			{
				title: "Stories of Beneficiaries (May 2019)",
				fileName: "Stories-of-Beneficiaries-22.5.2019.pdf",
				url: "/publications/doee/rro/Stories-of-Beneficiaries-22.5.2019.pdf",
				date: "May 2019",
			},
			{
				title: "DoEE Annual Report 2021–2022",
				fileName: "DoEE-Annual-Report-2021-22-2.pdf",
				url: "/publications/doee/rro/DoEE-Annual-Report-2021-22-2.pdf",
				date: "2021–2022",
			},
			{
				title: "DoEE Annual Report 2022–2023 (Final Edition 1)",
				fileName: "DoEE-Annual-Report-2022-23-Final-Edition-1.pdf",
				url: "/publications/doee/rro/DoEE-Annual-Report-2022-23-Final-Edition-1.pdf",
				date: "2022–2023",
			},
			{
				title: "DoEE Annual Report 2023–2024 (Final)",
				fileName: "DoEE-Annual-Report_2023-24-Final.pdf",
				url: "/publications/doee/rro/DoEE-Annual-Report_2023-24-Final.pdf",
				date: "2023–2024",
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
			{
				title: "Employment Service Centre Strategy",
				fileName: "Employment-Service-Centre-Strategy.pdf",
				url: "/publications/doee/rro/Employment-Service-Centre-Strategy.pdf",
			},
			{
				title: "National Career Strategy",
				fileName: "National-Career-Strategy-Strategy.pdf",
				url: "/publications/doee/rro/National-Career-Strategy-Strategy.pdf",
			},
			{
				title: "15th National Job Fair Report (Final)",
				fileName: "Final-15th-National-Job-Fair-Report-1.pdf",
				url: "/publications/doee/rro/Final-15th-National-Job-Fair-Report-1.pdf",
			},
			{
				title: "MoC on TITP (for upload)",
				fileName: "MoC-on-TITP-for-upload.pdf",
				url: "/publications/doee/rro/MoC-on-TITP-for-upload.pdf",
			},
		],
	},
];
