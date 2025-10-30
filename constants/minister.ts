export interface PersonContact {
	name: string;
	title: string;
	fullTitle?: string;
	email: string;
	telephone?: string;
	department: string;
	image: string;
}

export interface MinisterProfile extends PersonContact {
	biography: {
		appointment: string;
		constituency: string;
		education: string[];
		careerHighlights: string[];
		personalInterests: string[];
	};
}

export const MINISTER: MinisterProfile = {
	name: "Lyonpo Namgyal Dorji",
	title: "Hon'ble Minister",
	fullTitle: "H.E. Lyonpo Namgyal Dorji",
	email: "ndorji@moice.gov.bt",
	department: "Ministry of Industry, Commerce & Employment",
	biography: {
		appointment: "Appointed by His Majesty The King on 28 January 2024",
		constituency:
			"Member of Parliament representing Kabji-Talo constituency, Punakha Dzongkhag",
		education: [
			"Master's degree in International Relations and Diplomacy from the Coral Bell School of Asia Pacific Affairs at the Australian National University",
			"Postgraduate Diploma in Public Administration from the Royal Institute of Management",
			"Bachelor of Arts (Honours) in English from the University of Delhi",
		],
		careerHighlights: [
			"Over 12 years of service in the Ministry of Foreign Affairs",
			"4 years at the Permanent Mission of Bhutan to the United Nations in New York",
			"Held various diplomatic and policy roles before entering politics in 2022",
		],
		personalInterests: [
			"Reading",
			"Long hikes",
			"Spending quality time with family and three children",
		],
	},
	image: "/assets/ministeroffice/minister.png",
};

export const MINISTER_STAFF: PersonContact[] = [
	{
		name: "Mr. Ugyen Dorji",
		title: "PS to Minister",
		fullTitle: "Private Secretary to Minister",
		email: "ugyend@moice.gov.bt",
		telephone: "+975-02-327126",
		department: "Office of the Minister",
		image: "/assets/ministeroffice/ugyen.png",
	},
	{
		name: "Mrs. Namgay Om",
		title: "PA to Minister",
		fullTitle: "Personal Assistant to Minister",
		email: "nwangmo@moice.gov.bt",
		telephone: "+975-02-327125",
		department: "Office of the Minister",
		image: "/assets/ministeroffice/namgay.png",
	},
];
