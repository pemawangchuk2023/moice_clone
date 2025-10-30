export interface DoLPublication {
	title: string;
	fileName: string;
	url: string;
	date?: string;
}

export interface DoLPublicationCategory {
	key: string;
	name: string;
	publications: DoLPublication[];
}

export const dolCategories: DoLPublicationCategory[] = [
	// --- Category: OHS Guidelines ---
	{
		key: "ohs",
		name: "OHS Guidelines",
		publications: [
			{
				title: "Computer Safety (New Copy)",
				fileName: "computer-saftey-new-copy.pdf",
				url: "/publications/dol/OHS Guidelines/computer-saftey-new-copy.pdf",
			},
			{
				title: "Predict Hazards (OHS)",
				fileName: "Predict_hazards_OHS.pdf",
				url: "/publications/dol/OHS Guidelines/Predict_hazards_OHS.pdf",
			},
			{
				title: "Reporting of Workplace Accident or Incident (2022)",
				fileName: "Reporting-of-workplace-Accident-or-Incident22.pdf",
				url: "/publications/dol/OHS Guidelines/Reporting-of-workplace-Accident-or-Incident22.pdf",
				date: "2022",
			},
			{
				title: "Wearing Helmet (2023 Final)",
				fileName: "wearing-Helmet_2023_Final.pdf",
				url: "/publications/dol/OHS Guidelines/wearing-Helmet_2023_Final.pdf",
				date: "2023",
			},
		],
	},
	// --- Category: Reports---
	{
		key: "reports",
		name: "Reports",
		publications: [
			{
				title: "Annual Report FY 2022–2023",
				fileName: "Annual_Report_FY2022_2023.pdf",
				url: "/publications/dol/Reports/Annual_Report_FY2022_2023.pdf",
				date: "2023",
			},
			{
				title: "Annual Report FY 2024–2025",
				fileName: "Annual_Report_FY2024-2025.pdf",
				url: "/publications/dol/Reports/Annual_Report_FY2024-2025.pdf",
				date: "2025",
			},
			{
				title: "Annual Report 2017–2018",
				fileName: "Annual-Report-2017-2018.pdf",
				url: "/publications/dol/Reports/Annual-Report-2017-2018.pdf",
				date: "2018",
			},
			{
				title: "Annual Report 2018–2019",
				fileName: "Annual-Report-2018-2019.pdf",
				url: "/publications/dol/Reports/Annual-Report-2018-2019.pdf",
				date: "2019",
			},
			{
				title: "Annual Report 2019–2020",
				fileName: "Annual-Report-2019-2020.pdf",
				url: "/publications/dol/Reports/Annual-Report-2019-2020.pdf",
				date: "2020",
			},
			{
				title: "Annual Report 2021–2022",
				fileName: "Annual-Report-2021-2022.pdf",
				url: "/publications/dol/Reports/Annual-Report-2021-2022.pdf",
				date: "2022",
			},
			{
				title: "Annual Report for the Financial Year 2023–2024",
				fileName: "Annual-Report-for-the-Financial-Year-2023-2024.pdf",
				url: "/publications/dol/Reports/Annual-Report-for-the-Financial-Year-2023-2024.pdf",
				date: "2024",
			},
			{
				title: "Assessment Report of OHS Committee 2025",
				fileName: "Assessment-Report-of-OHS-Committee-2025.pdf",
				url: "/publications/dol/Reports/Assessment-Report-of-OHS-Committee-2025.pdf",
				date: "2025",
			},
			{
				title: "Eleventh Five Year Plan Report (2013–2018) – DoL",
				fileName: "Eleventh-Five-Year-Plan-Report-2013-2018-DoL.pdf",
				url: "/publications/dol/Reports/Eleventh-Five-Year-Plan-Report-2013-2018-DoL.pdf",
				date: "2018",
			},
			{
				title: "Occupational Health and Safety Assessment Report 2024",
				fileName: "Occupational-Health-Safety-Assessment-Report-2024-2.pdf",
				url: "/publications/dol/Reports/Occupational-Health-Safety-Assessment-Report-2024-2.pdf",
				date: "2024",
			},
			{
				title: "Report on Critical Occupational Shortage (COS)",
				fileName: "Report-on-Critical-Occupational-Shortage-COS.pdf",
				url: "/publications/dol/Reports/Report-on-Critical-Occupational-Shortage-COS.pdf",
			},
		],
	},
	// --- Category: Samples ---
	{
		key: "samples",
		name: "Samples",
		publications: [
			{
				title: "Contract of Employment",
				fileName: "Contract-of-Employment.doc",
				url: "/publications/dol/Samples/Contract-of-Employment.doc",
			},
			{
				title: "Model Internal Service Rules",
				fileName: "Model-Internal-Service-Rules.doc",
				url: "/publications/dol/Samples/Model-Internal-Service-Rules.doc",
			},
			{
				title:
					"Sample of Occupational Health and Safety Policy Statement (English)",
				fileName:
					"Sample-of-Occupational-Health-and-Safety-Policy-Statement-English.doc",
				url: "/publications/dol/Samples/Sample-of-Occupational-Health-and-Safety-Policy-Statement-English.doc",
			},
			{
				title: "Sample Salary Sheet",
				fileName: "samplesalarysheet.pdf",
				url: "/publications/dol/Samples/samplesalarysheet.pdf",
			},
		],
	},
	// --- Category: Occupational Dictionary ---
	{
		key: "occupational-dictionary",
		name: "Occupational Dictionary",
		publications: [
			{
				title: "Career Occupational Dictionary 2023",
				fileName: "Career-Occupational-Dictionary_2023.pdf",
				url: "/publications/dol/Occupational Dictionary/Career-Occupational-Dictionary_2023.pdf",
				date: "2023",
			},
		],
	},
];
