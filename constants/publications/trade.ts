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
				title: "Trade Statistics 2011",
				fileName: "Trade-Statistics-2011.pdf",
				url: "/publications/dot/statistics/Trade-Statistics-2011.pdf",
				date: "2011",
			},
			{
				title: "Trade Statistics 2012",
				fileName: "Trade-Statistics-2012.pdf",
				url: "/publications/dot/statistics/Trade-Statistics-2012.pdf",
				date: "2012",
			},
			{
				title: "Trade Statistics 2013",
				fileName: "Trade-Statistics-2013.pdf",
				url: "/publications/dot/statistics/Trade-Statistics-2013.pdf",
				date: "2013",
			},
			{
				title: "Trade Statistics 2014",
				fileName: "Trade-Statistics-2014.pdf",
				url: "/publications/dot/statistics/Trade-Statistics-2014.pdf",
				date: "2014",
			},
			{
				title: "Trade Statistics 2015",
				fileName: "Trade-Statistics-2015.pdf",
				url: "/publications/dot/statistics/Trade-Statistics-2015.pdf",
				date: "2015",
			},
			{
				title: "Trade Statistics 2016",
				fileName: "Trade-Statistics-2016.pdf",
				url: "/publications/dot/statistics/Trade-Statistics-2016.pdf",
				date: "2016",
			},
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
				title: "Annual Trade Statistics 2019",
				fileName: "ANNUAL-TRADE-STATISTICS-2019-1.pdf",
				url: "/publications/dot/statistics/ANNUAL-TRADE-STATISTICS-2019-1.pdf",
				date: "2019",
			},
			{
				title: "Annual Trade Statistics 2020",
				fileName: "ANNUAL-TRADE-STATISTICS-2020-2.pdf",
				url: "/publications/dot/statistics/ANNUAL-TRADE-STATISTICS-2020-2.pdf",
				date: "2020",
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
				title: "2016 Agreement on Trade and Commerce",
				fileName: "2016-En-Agreement-on-Trade-and-Commerce.pdf",
				url: "/publications/dot/agreement/2016-En-Agreement-on-Trade-and-Commerce.pdf",
				date: "2016",
			},
			{
				title: "Agreement on South Asian Free Trade Area (SAFTA)",
				fileName: "Agreement-on-South-Asian-Free-Trade-Area-SAFTA.pdf",
				url: "/publications/dot/agreement/Agreement-on-South-Asian-Free-Trade-Area-SAFTA.pdf",
			},
			{
				title: "Agreement on Trade between Bhutan and Bangladesh",
				fileName: "Agreement-on-Trade-between-Bhutan-and-Bangladesh.pdf",
				url: "/publications/dot/agreement/Agreement-on-Trade-between-Bhutan-and-Bangladesh.pdf",
			},
			{
				title:
					"Agreement on Trade, Commerce and Transit between Bhutan and India",
				fileName:
					"Agreement-on-Trade-Commerce-and-Transit-between-Bhutan-and-India.pdf",
				url: "/publications/dot/agreement/Agreement-on-Trade-Commerce-and-Transit-between-Bhutan-and-India.pdf",
			},
			{
				title: "Framework Agreement on the BIMST-EC Free Trade Area",
				fileName: "Framework-Agreement-on-the-BIMST-EC-Free-Trade-Area.pdf",
				url: "/publications/dot/agreement/Framework-Agreement-on-the-BIMST-EC-Free-Trade-Area.pdf",
			},
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
			{
				title:
					"Trade and Economic Cooperation Agreement between Bhutan and Thailand",
				fileName:
					"Trade-Economic-Coperation-Agreement-between-Bhutan-Thailand-1.pdf",
				url: "/publications/dot/agreement/Trade-Economic-Coperation-Agreement-between-Bhutan-Thailand-1.pdf",
			},
		],
	},
	// --- Category: Total Number of Trade Licenses ---
	{
		key: "trade-licenses",
		name: "Total Number of Trade Licenses",
		publications: [
			{
				title: "Total Number of Licenses as of December 31, 2010",
				fileName: "Total-Number-of-licenses-as-of-December-31-2010.pdf",
				url: "/publications/dot/license/Total-Number-of-licenses-as-of-December-31-2010.pdf",
				date: "2010",
			},
			{
				title: "Total Number of Licenses as of December 31, 2011",
				fileName: "Total-Number-of-licenses-as-of-December-31-2011.pdf",
				url: "/publications/dot/license/Total-Number-of-licenses-as-of-December-31-2011.pdf",
				date: "2011",
			},
			{
				title: "Total Number of Licenses as of December 31, 2012",
				fileName: "Total-Number-of-licenses-as-of-December-31-2012.pdf",
				url: "/publications/dot/license/Total-Number-of-licenses-as-of-December-31-2012.pdf",
				date: "2012",
			},
			{
				title: "Total Number of Licenses as of December 31, 2013",
				fileName: "Total-Number-of-licenses-as-of-December-31-2013.pdf",
				url: "/publications/dot/license/Total-Number-of-licenses-as-of-December-31-2013.pdf",
				date: "2013",
			},
			{
				title: "Total Number of Licenses as of December 31, 2014",
				fileName: "Total-Number-of-Licenses-as-of-December-31-2014.pdf",
				url: "/publications/dot/license/Total-Number-of-Licenses-as-of-December-31-2014.pdf",
				date: "2014",
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
