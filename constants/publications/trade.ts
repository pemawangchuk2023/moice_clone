export interface DoTPublication {
	title: string;
	fileName: string;
	url: string;
	date?: string;
}

export interface DoTPublicationCategory {
	key: string;
	name: string;
	publications: DoTPublication[];
}

export const dotCategories: DoTPublicationCategory[] = [
	// --- Category: Trade ---
	{
		key: "trade",
		name: "Trade Publications",
		publications: [
			{
				title: "Bhutan’s Domestic and External Trade",
				fileName: "BHUTANS-DOMESTIC-EXTERNAL-TRADE.pdf",
				url: "/publications/dot/trade/BHUTANS-DOMESTIC-EXTERNAL-TRADE.pdf",
			},
			{
				title: "DTISU and Matrix Combined Print",
				fileName: "DTISU-and-Matrix-Combined-Print.pdf",
				url: "/publications/dot/trade/DTISU-and-Matrix-Combined-Print.pdf",
			},
			{
				title: "Report on Bhutan’s External Trade 2020",
				fileName: "Report-on-Bhutans-External-Trade-2020.pdf",
				url: "/publications/dot/trade/Report-on-Bhutans-External-Trade-2020.pdf",
				date: "2020",
			},
		],
	},
	// --- Category: Trade Statistics ---
	{
		key: "trade-statistics",
		name: "Trade Statistics",
		publications: [
			{
				title: "Annual Trade Statistics 2017",
				fileName: "ANNUAL-TRADE-STATISTICS-2017.pdf",
				url: "/publications/dot/statistics/ANNUAL-TRADE-STATISTICS-2017.pdf",
				date: "2017",
			},
			{
				title: "Annual Trade Statistics 2018",
				fileName: "ANNUAL-TRADE-STATISTICS-2018.pdf",
				url: "/publications/dot/statistics/ANNUAL-TRADE-STATISTICS-2018.pdf",
				date: "2018",
			},
			{
				title: "Annual Trade Statistics 2021",
				fileName: "ANNUAL-TRADE-STATISTICS-2021.pdf",
				url: "/publications/dot/statistics/ANNUAL-TRADE-STATISTICS-2021.pdf",
				date: "2021",
			},
			{
				title: "Annual Trade Statistics 2022 (Revised)",
				fileName: "Annual-Trade-Statistics-2022-re.pdf",
				url: "/publications/dot/statistics/Annual-Trade-Statistics-2022-re.pdf",
				date: "2022",
			},
			{
				title: "Annual Trade Statistics 2023",
				fileName: "Annual-Trade-Statistics-2023.pdf",
				url: "/publications/dot/statistics/Annual-Trade-Statistics-2023.pdf",
				date: "2023",
			},
		],
	},
	// --- Category: Trade Agreements ---
	{
		key: "trade-agreements",
		name: "Trade Agreements",
		publications: [
			{
				title:
					"MoU on Use of Inland Waterways for Transportation of Bilateral Trade (Scanned)",
				fileName:
					"MoU-on-Use-of-Inland-Waterways-for-Transportation-of-Bilateral-T-Scanned.pdf",
				url: "/publications/dot/agreement/MoU-on-Use-of-Inland-Waterways-for-Transportation-of-Bilateral-T-Scanned.pdf",
			},
			{
				title: "Protocol to Agreement on Trade between Bhutan and Bangladesh",
				fileName:
					"Protocol-to-Agreement-on-Trade-between-Bhutan-and-Bangladesh.pdf",
				url: "/publications/dot/agreement/Protocol-to-Agreement-on-Trade-between-Bhutan-and-Bangladesh.pdf",
			},
			{
				title:
					"Protocol to the Framework Agreement on BIMST-EC Free Trade Area",
				fileName:
					"Protocol-to-the-Framework-Agreement-on-BIMST-EC-Free-Trade-Area.pdf",
				url: "/publications/dot/agreement/Protocol-to-the-Framework-Agreement-on-BIMST-EC-Free-Trade-Area.pdf",
			},
			{
				title: "SAARC Agreement on Trade in Services (SATIS)",
				fileName: "SAARC-Agreement-on-Trade-in-ServicesSATIS.pdf",
				url: "/publications/dot/agreement/SAARC-Agreement-on-Trade-in-ServicesSATIS.pdf",
			},
		],
	},
	// --- Category: Trade Directory ---
	{
		key: "trade-directory",
		name: "Trade Directory",
		publications: [
			{
				title: "Diagnostic Trade Integration Study",
				fileName: "Diagnostic-Trade-Integration-Study.pdf",
				url: "/publications/dot/directory/Diagnostic-Trade-Integration-Study.pdf",
			},
			{
				title: "Exporters Directory 2010",
				fileName: "Exporters-Directory-2010.pdf",
				url: "/publications/dot/directory/Exporters-Directory-2010.pdf",
				date: "2010",
			},
			{
				title: "Exporters Directory 2014",
				fileName: "Exporters-Directory-2014.pdf",
				url: "/publications/dot/directory/Exporters-Directory-2014.pdf",
				date: "2014",
			},
		],
	},
];
