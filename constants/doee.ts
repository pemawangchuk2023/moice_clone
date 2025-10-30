export const DOEE = {
	name: "Department of Employment and Entrepreneurship",
	description: `
    The Department of Employment and Entrepreneurship is dedicated to promoting meaningful employment 
    and entrepreneurship. The Department plays a crucial role in job creation, especially for the youth, 
    guided by the National Employment Policy (NEP) of 2013. The NEP outlines strategies for accelerating 
    employment growth, improving working conditions, and ensuring equal opportunities, all while addressing 
    the need for a skilled workforce.

    The Department focuses on providing services to match job demand and supply in the labor market. 
    This includes offering quality job and talent-matching services using data from our labor market 
    information system. The goal is to help new job seekers enhance their employability through engagement 
    programs. Additionally, the Department promotes entrepreneurship as an alternative way to create jobs.
  `,
	vision:
		"A nation where its citizens have the opportunity for gainful and quality employment.",
	mission: `
    Promote and facilitate gainful employment through the provision of effective employment, 
    entrepreneurship, career guidance and labour market information support and services.
  `,
	values: {
		acronym: "PULSE",
		tagline: "PULSE sets the rhythm of our department’s work!",
		description: `
      With professionalism as our cornerstone, unwavering service delivery, empathy weaving our connections, 
      camaraderie strengthening our bond, and endless passion, we’re a team dedicated to excellence in all we do.
    `,
		list: [
			{ key: "P", value: "Professionalism at its Core" },
			{ key: "U", value: "Unwavering Service Delivery" },
			{ key: "L", value: "Linked by Empathy" },
			{ key: "S", value: "Strong Camaraderie" },
			{ key: "E", value: "Endless Passion" },
		],
	},
	divisions: [
		"Employment Service Division (ESD)",
		"Labour Market Information and Career Guidance Division (LMICGD)",
		"Entrepreneurship Promotion Division (EPD)",
	],
};
export const DOEE_DATA = {
	directorsOffice: {
		title: "Director’s Office",
		description:
			"The Director’s Office oversees the overall functioning of the department. It provides policy guidance and strategies that will accelerate employment growth, improve the quality of working conditions and provide equal employment opportunities, in accordance with the NEP (2013) and relevant policies.",
		mandate: [
			"Ensure gainful employment opportunities through employment support and services",
			"Spearhead, coordinate and facilitate employment creation through mechanisms such as the Employment Responsibility System (ERS)",
			"Foster and promote innovation, entrepreneurship, and self-employment opportunities",
			"Enhance employability skills and placement of registered job seekers including persons with disabilities",
			"Enhance employment advocacy & awareness",
			"Provide career guidance services to job seekers",
			"Enhance school-to-work transition programs",
			"Enhance the collection and analysis of employment-related information through the integrated Bhutan Labour Market Information System (BLMIS)",
			"Initiate and undertake research on pertinent issues related to the labour market",
			"Create a conducive environment for sustainable employment in collaboration with relevant stakeholders",
			"Identifying training needs to develop competencies of professionals in the labour and employment field",
			"Develop and implement HRD plan for the Department (annual and FYP)",
		],
	},

	divisions: [
		{
			name: "Employment Service Division (ESD)",
			overview:
				"Guided by the National Employment Policy (NEP) 2013, ESD is dedicated to offering services to employers, agents, employees, and job seekers to promote decent jobs that ensure productive work, wellbeing, and job satisfaction.",
			responsibilities: [
				"Develop strong evidence-based policy-making that ensures systems, practices, and tools catering to fulfilling the needs of the industries, organizations, agents, and the workforce",
				"Create productive employment opportunities by ensuring a quality match between skills and jobs",
				"Spearhead and coordinate implementation and monitoring of the National Employment Policy",
				"Facilitate overseas employment to import long-term productive skills",
				"Provide placement and referral services through collaboration with ESCs",
				"Develop effective programs for employers and job seekers",
				"Coordinate employment creation through the Employment Responsibility System (ERS) using the 3Ps approach",
				"Collect and analyze data via integrated labour market information system",
				"Conduct employment advocacy & awareness",
				"Initiate research on labour market issues",
				"Conduct monitoring and evaluation of employment programs",
				"Assist LMICGD in career guidance and data collection",
			],
			units: [
				{
					name: "Engagement Program Unit (EPU)",
					responsibilities: [
						"Participate in policy, planning, and budgeting",
						"Develop and implement school-to-work transition programs",
						"Conduct M&E of employment programs",
						"Implement ERS using 3Ps (Promote, Prepare, Place)",
						"Collaborate with LMICGD on awareness programs",
						"Initiate research on engagement programs",
					],
				},
				{
					name: "Overseas Employment Unit (OEU)",
					responsibilities: [
						"Conduct foreign demand analysis and verify authenticity",
						"Facilitate decent overseas jobs for skill import",
						"Verify documents and conduct pre-departure briefings",
						"Facilitate repatriation and reintegration support",
						"Implement National Reintegration Program (NRP)",
						"Monitor and evaluate RBOEA compliance with REBO 2021",
						"Conduct research for program improvement",
					],
				},
				{
					name: "Employment Service Centre (ESC)",
					responsibilities: [
						"Facilitate referral and placement of candidates",
						"Provide employment facilities and services",
						"Compile and update job vacancies",
						"Maintain employment data and reports",
						"Assist registration in BLMIS",
						"Provide career counseling and guidance",
						"Create awareness on skills, entrepreneurship, and laws",
						"Organize mini job fairs and on-the-spot recruitment",
						"Offer one-stop-shop employment services",
					],
				},
			],
		},

		{
			name: "Labour Market Information and Career Guidance Division (LMICGD)",
			overview:
				"LMICGD analyzes labour market trends, identifies opportunities and challenges, and provides career guidance as per the National Strategy on Career Guidance 2022.",
			responsibilities: [
				"Conduct research on employment and labour market trends",
				"Develop consolidated system for labour information sharing",
				"Manage Employer-Employee Registration (EER)",
				"Conduct surveys and labour market forecasting",
				"Manage and coordinate BLMIS",
				"Provide M&E support to DoEE programs",
				"Publish Labour Market Information Bulletin, Guides, and Dictionary",
				"Conduct career guidance and advocacy programs",
				"Develop career guidance materials",
				"Build capacity for program delivery",
				"Liaise with school counselors and DEP",
				"Participate in policy and planning",
			],
			units: [
				{
					name: "Labour Market Information and Research Unit (LMIRU)",
					responsibilities: [
						"Collect and maintain labour market data",
						"Conduct research and surveys on trends",
						"Analyze data to identify trends and challenges",
						"Support workforce planning for employers",
						"Disseminate information via reports and websites",
						"Manage BLMIS for reliable data",
						"Conduct tracer studies and M&E",
					],
				},
				{
					name: "Program and Career Guidance Unit (PCGU)",
					responsibilities: [
						"Develop career guidance materials",
						"Establish career planning framework and tools",
						"Provide individual and group counseling",
						"Maintain repository of career and training info",
						"Conduct advocacy in schools and institutes",
						"Implement job fairs, GOWA, and innovative programs",
						"Build capacity for consultations and referrals",
					],
				},
			],
		},

		{
			name: "Entrepreneurship Promotion Division (EPD)",
			overview:
				"EPD promotes creativity, innovation, and entrepreneurship culture through training, events, and startup support to foster self-employment and economic growth.",
			responsibilities: [
				"Promote creativity, innovation, and entrepreneurial culture",
				"Conduct entrepreneurship trainings",
				"Promote entrepreneurship education in TVET, colleges, and schools",
				"Develop and implement National Entrepreneurship Strategy",
				"Enhance quality of entrepreneurship programs",
				"Facilitate critical skills development",
				"Develop startup and business acceleration programs",
				"Conduct R&D on entrepreneurship",
				"Provide mentoring, coaching, and advisory services",
				"Organize startup events",
				"Promote entrepreneurship awareness",
				"Collaborate with national and international agencies",
				"Provide end-to-end support to entrepreneurs",
				"Manage Startup Centers, Incubation Centers, and FabLabs",
				"Participate in policy, planning, and budgeting",
			],
			units: [
				{
					name: "Entrepreneurship Development and Acceleration Unit (EDAU)",
					responsibilities: [
						"Develop programs for creativity and innovation",
						"Design and implement training and startup events",
						"Promote entrepreneurship education in institutes",
						"Implement National Entrepreneurship Strategy",
						"Enhance program quality and professional development",
						"Network with agencies for end-to-end support",
						"Conduct R&D on entrepreneurship",
						"Develop acceleration programs with mentorship",
						"Monitor innovation trends and opportunities",
						"Collect and report on entrepreneurship programs",
					],
				},
				{
					name: "Startup and Incubation Unit (SIU)",
					responsibilities: [
						"Provide incubation and Fab-Lab infrastructure",
						"Offer mentoring, coaching, and advisory services",
						"Support college-based incubation centers",
						"Facilitate access to finance, marketing, and R&D",
						"Organize product launches and investment platforms",
						"Manage administration of incubation centers",
						"Track startup project lifecycle",
						"Review and evaluate business proposals",
						"Generate reports on center activities",
					],
				},
			],
		},
	],
};
