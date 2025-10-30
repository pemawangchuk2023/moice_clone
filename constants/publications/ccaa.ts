export interface Publication {
	title: string;
	fileName: string;
	url: string;
	date?: string;
}

export interface PublicationCategory {
	key: string;
	name: string;
	publications: Publication[];
}

export const publicationCategories: PublicationCategory[] = [
	// --- Category 1: Consumer Grievance Redressal Reports ---
	{
		key: "cgrr",
		name: "Consumer Grievance Redressal Reports",
		publications: [
			{
				title: "April 2022 Stats Final",
				fileName: "April-2022-Stats-Final.pdf",
				url: "/publications/ccaa/cgrr/April-2022-Stats-Final.pdf",
				date: "April 2022",
			},
			{
				title:
					"Consumer Grievance Redressal and Market Surveillance Report – February 2023",
				fileName:
					"Consumer-Grievance-Redressal-and-Market-Surveillance-Report-February-2023.pdf",
				url: "/publications/ccaa/cgrr/Consumer-Grievance-Redressal-and-Market-Surveillance-Report-February-2023.pdf",
				date: "February 2023",
			},
			{
				title: "Consumer Grievance Redressal Report 2021–2022 Final",
				fileName: "Consumer-Grievance-Redressal-Report-2021-2022-Final-.pdf",
				url: "/publications/ccaa/cgrr/Consumer-Grievance-Redressal-Report-2021-2022-Final-.pdf",
				date: "2021–2022",
			},
			{
				title: "Consumer Grievance Redressal Report – July–August 2021",
				fileName: "Consumer-grievance-redressal-report-July-August-2021.pdf",
				url: "/publications/ccaa/cgrr/Consumer-grievance-redressal-report-July-August-2021.pdf",
				date: "July–August 2021",
			},
			{
				title:
					"Consumer Protection and Unfair Business Practice Statistics – March 2023",
				fileName:
					"Consumer-Protection-and-Unfair-Business-Practice-Statistics-for-the-month-of-March-2023.pdf",
				url: "/publications/ccaa/cgrr/Consumer-Protection-and-Unfair-Business-Practice-Statistics-for-the-month-of-March-2023.pdf",
				date: "March 2023",
			},
			{
				title: "Consumer Protection Report – August 2022",
				fileName: "CONSUMER-PROTECTION-Report-August-2022.pdf",
				url: "/publications/ccaa/cgrr/CONSUMER-PROTECTION-Report-August-2022.pdf",
				date: "August 2022",
			},
			{
				title: "Consumer Protection Statistics at a Glance – October",
				fileName: "Consumer-Protection-Statistics-at-a-Glance-October.pdf",
				url: "/publications/ccaa/cgrr/Consumer-Protection-Statistics-at-a-Glance-October.pdf",
			},
			{
				title: "Enforcement and Redressal Report – July–December 2021",
				fileName:
					"Enforcement-and-Redressal-Report-Final-July-December-2021-2.pdf",
				url: "/publications/ccaa/cgrr/Enforcement-and-Redressal-Report-Final-July-December-2021-2.pdf",
				date: "July–December 2021",
			},
			{
				title: "Enforcement and Redressal Report – January 2023",
				fileName:
					"Enforcement-and-Redressal-report-for-the-Month-of-January-2023.pdf",
				url: "/publications/ccaa/cgrr/Enforcement-and-Redressal-report-for-the-Month-of-January-2023.pdf",
				date: "January 2023",
			},
			{
				title: "January and February Monthly Report",
				fileName: "Jan-and-Feb-Monthly-report.pdf",
				url: "/publications/ccaa/cgrr/Jan-and-Feb-Monthly-report.pdf",
			},
			{
				title: "May Consumer Protection and Unfair Trade Statistics",
				fileName:
					"May-Consumer Protection and Unfair Trade Statistics-2-1-2-1.pdf",
				url: "/publications/ccaa/cgrr/May-Consumer Protection and Unfair Trade Statistics-2-1-2-1.pdf",
			},
			{
				title: "September 2022 Stats Final 1",
				fileName: "September-2022-Stats-Final-1.pdf",
				url: "/publications/ccaa/cgrr/September-2022-Stats-Final-1.pdf",
				date: "September 2022",
			},
		],
	},
	// --- Category 2: Office of Consumer Protection ---
	{
		key: "ocp",
		name: "Office of Consumer Protection",
		publications: [
			{
				title: "Enforcement and Redressal Report – July–December 2021",
				fileName:
					"Enforcement-and-Redressal-Report-Final-July-December-2021-2.pdf",
				url: "/publications/ccaa/ocp/Enforcement-and-Redressal-Report-Final-July-December-2021-2.pdf",
				date: "July–December 2021",
			},
			{
				title: "Final Strategic Action Plan",
				fileName: "Final-Strategic-Action-Plan.pdf",
				url: "/publications/ccaa/ocp/Final-Strategic-Action-Plan.pdf",
			},
			{
				title: "Study Report on High Electricity Bill of BPC",
				fileName: "Study-Report-on-High-Electricity-Bill-of-BPC.pdf",
				url: "/publications/ccaa/ocp/Study-Report-on-High-Electricity-Bill-of-BPC.pdf",
			},
		],
	},
	// --- Annual Report ---
	{
		key: "Annual Reports",
		name: "Annual Reports",
		publications: [
			{
				title: "Annual Report FY 2018–19",
				fileName: "Annual-Report FY 2018-19.pdf",
				url: "/publications/ccaa/ar/Annual-Report FY 2018-19.pdf",
				date: "FY 2018–19",
			},
			{
				title: "Annual Report FY 2020–21",
				fileName: "Annual-Report FY 2020-21.pdf",
				url: "/publications/ccaa/ar/Annual-Report FY 2020-21.pdf",
				date: "FY 2020–21",
			},
			{
				title: "Annual Report FY 2021–22",
				fileName: "Annual-Report FY 2021-22.pdf",
				url: "/publications/ccaa/ar/Annual-Report FY 2021-22.pdf",
				date: "FY 2021–22",
			},
			{
				title: "Half Year Report July 2022 to Dec 2022",
				fileName: "Haly-Year-Report July 2022 to Dec 2022.pdf",
				url: "/publications/ccaa/ar/Haly-Year-Report July 2022 to Dec 2022.pdf",
				date: "July–December 2022",
			},
		],
	},
	// --- Investigation and Monitoring Reports ---
	{
		key: "imp",
		name: "Investigation and Monitoring Reports",
		publications: [
			{
				title: "Inspection Carried Out in Haa",
				fileName: "Inspection-carried-out-in-Haa.pdf",
				url: "/publications/ccaa/imp/Inspection-carried-out-in-Haa.pdf",
			},
			{
				title: "Inspection Report",
				fileName: "Inspection-report-.pdf",
				url: "/publications/ccaa/imp/Inspection-report-.pdf",
			},
			{
				title: "Market Inspection Report – 22–28 Nov",
				fileName: "Market-Inspection-Report-22-28-Nov-20.pdf",
				url: "/publications/ccaa/imp/Market-Inspection-Report-22-28-Nov-20.pdf",
			},
			{
				title: "Market Inspection Report Final",
				fileName: "Market-Inspection-Report-final-.pdf",
				url: "/publications/ccaa/imp/Market-Inspection-Report-final-.pdf",
			},
			{
				title: "Meat Shop Inspection Report 2",
				fileName: "Meat-Shop-Inspection-report-2.pdf",
				url: "/publications/ccaa/imp/Meat-Shop-Inspection-report-2.pdf",
			},
			{
				title: "Monitoring Report – 6 Dzongkhags",
				fileName: "Monitoring-Report-6-dzongkhags.pdf",
				url: "/publications/ccaa/imp/Monitoring-Report-6-dzongkhags.pdf",
			},
			{
				title: "Report on Market Monitoring – Tsirang and Sarpang",
				fileName: "Report-on-Market-Monitoring-Tsirang-and-Sarpang.pdf",
				url: "/publications/ccaa/imp/Report-on-Market-Monitoring-Tsirang-and-Sarpang.pdf",
			},
		],
	},
	// --- Market Price and Information ---
	{
		key: "mpi",
		name: "Market Price Information",
		publications: [
			{
				title: "December 2017 MPI",
				fileName: "December-2017-MPI.pdf",
				url: "/publications/ccaa/mpi/December-2017-MPI.pdf",
				date: "December 2017",
			},
			{
				title: "June 2018 MPI",
				fileName: "June-2018_MPI.pdf",
				url: "/publications/ccaa/mpi/June-2018_MPI.pdf",
				date: "June 2018",
			},
			{
				title: "March 2018 MPI",
				fileName: "March-2018_MPI.pdf",
				url: "/publications/ccaa/mpi/March-2018_MPI.pdf",
				date: "March 2018",
			},
			{
				title: "Market Price Information",
				fileName: "Market-Price-Information.pdf",
				url: "/publications/ccaa/mpi/Market-Price-Information.pdf",
			},
			{
				title: "Market Price Information – March 2019",
				fileName: "Market-Price-Information-March-2019.pdf",
				url: "/publications/ccaa/mpi/Market-Price-Information-March-2019.pdf",
				date: "March 2019",
			},
			{
				title: "Market Price Information – September 2018",
				fileName: "Market-Price-Information-Sept-2018.pdf",
				url: "/publications/ccaa/mpi/Market-Price-Information-Sept-2018.pdf",
				date: "September 2018",
			},
			{
				title: "MIP December 2018",
				fileName: "MIP-December-2018.pdf",
				url: "/publications/ccaa/mpi/MIP-December-2018.pdf",
				date: "December 2018",
			},
			{
				title: "MPI June 2019",
				fileName: "MPI-June2019.pdf",
				url: "/publications/ccaa/mpi/MPI-June2019.pdf",
				date: "June 2019",
			},
		],
	},
	// --- Study Reports ---
	{
		key: "study",
		name: "Study Reports",
		publications: [
			{
				title: "E-commerce Research MAD",
				fileName: "Ecommerce-Research-MAD.pdf",
				url: "/publications/ccaa/study/Ecommerce-Research-MAD.pdf",
			},
			{
				title: "Final Custom Duty Impact Study 2021",
				fileName: "Final-Custom-Duty-Impact-Study-2021.pdf",
				url: "/publications/ccaa/study/Final-Custom-Duty-Impact-Study-2021.pdf",
				date: "2021",
			},
			{
				title:
					"Legitimacy of Online Business – Measures in Place to Check Sale of Spurious Products",
				fileName:
					"Legitimacy-of-Online-Business-_-Measures-in-Place-to-Check-Sale-of-Spurious-Products.pdf",
				url: "/publications/ccaa/study/Legitimacy-of-Online-Business-_-Measures-in-Place-to-Check-Sale-of-Spurious-Products.pdf",
			},
			{
				title: "Report on Consumer Protection by Service Providers 2021",
				fileName: "Report-on-Consumer-Protection-by-Service-Providers-2021.pdf",
				url: "/publications/ccaa/study/Report-on-Consumer-Protection-by-Service-Providers-2021.pdf",
				date: "2021",
			},
			{
				title: "Report on SMEs Study 2021",
				fileName: "Report-on-SMEs-Study-2021.pdf",
				url: "/publications/ccaa/study/Report-on-SMEs-Study-2021.pdf",
				date: "2021",
			},
		],
	},
];
