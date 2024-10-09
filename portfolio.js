import emoji from "react-easy-emoji";

export const greetings = {
	name: "Tejas Ghone",
	title: "Hey, I'm Tejas",
	description:
		"I love solving problems using tech",
	resumeLink: "https://drive.google.com/file/d/1t0P-sVbnNeEqvzPpObyGdr6OjNS0Gxmf/view?usp=sharing",
};
const prefix=process.env.NEXT_PUBLIC_BASE_PATH||"";

export const openSource = {
	githubUserName: "Tejas988",
};

export const contact = {

};

export const socialLinks = {

	github: "https://github.com/Tejas988/",
	instagram: "https://www.instagram.com/_tejas.1801/",
	facebook: 'https://ne-np.facebook.com/tejas.ghone.77/',
	twitter: 'https://twitter.com/TejasG16960740',

	linkedin: "https://www.linkedin.com/in/tejas-ghone-3372a9199/",
	codeforces: "https://codeforces.com/profile/newbie0928",
	codechef: "https://www.codechef.com/users/brute99",
	leetcode:"https://leetcode.com/tejas_18/"

};

export const skillsSection = {
	title: "What I do",
	subTitle:"Running a depth first search on my domains of interest",
	skills: [
			"Flexible with respect to tech stack. I believe in learning by doing"
		,
		
			"Interested in Algorithms,Operating Systems ,Cryptography,Blockchain & Distributed Systems"
		,
		
			"I like to write clean, maintainable, robust code, even if it takes a little more time ;) "
		,
	],

	softwareSkills: [
		{
			skillName: "html-5",
			fontAwesomeClassname: "vscode-icons:file-type-html",
		},
		{
			skillName: "css3",
			fontAwesomeClassname: "vscode-icons:file-type-css",
		},
		{
			skillName: "sass",
			fontAwesomeClassname: "logos:sass",
		},
		{
			skillName: "JavaScript",
			fontAwesomeClassname: "logos:javascript",
		},
		{
			skillName: "reactjs",
			fontAwesomeClassname: "vscode-icons:file-type-reactjs",
		},
		{
			skillName: "nodejs",
			fontAwesomeClassname: "logos:nodejs-icon",
		},
		{
			skillName: "reactnative",
			fontAwesomeClassname: "vscode-icons:file-type-reactjs",
		},
		{
			skillName: "npm",
			fontAwesomeClassname: "vscode-icons:file-type-npm",
		},
		{
			skillName: "sql-database",
			fontAwesomeClassname: "vscode-icons:file-type-sql",
		},
		{
			skillName: "mongoDB",
			fontAwesomeClassname: "vscode-icons:file-type-mongo",
		},
		{
			skillName: "firebase",
			fontAwesomeClassname: "logos:firebase",
		},
	
		{
			skillName: "git",
			fontAwesomeClassname: "logos:git-icon",
		},
		{
			skillName: "CPP",
			fontAwesomeClassname: "vscode-icons:file-type-cpp",
		},
		{
			skillName: "Java",
			fontAwesomeClassname: "vscode-icons:file-type-java",
		},
		{
			skillName: "C",
			fontAwesomeClassname: "vscode-icons:file-type-c",
		},
		{
			skillName: "python",
			fontAwesomeClassname: "logos:python",
		},
		{
			skillName: "Rust",
			fontAwesomeClassname: "logos:rust",
		},
		{
			skillName: "solidity",
			fontAwesomeClassname: "logos:solidity",
		},
	],
};

export const SkillBars = [
	{
		Stack: "Frontend/Design", //Insert stack or technology you have experience in
		progressPercentage: "90", //Insert relative proficiency in percentage
	},
	{
		Stack: "Backend",
		progressPercentage: "80",
	},
	{
		Stack: "Programming",
		progressPercentage: "90",
	},
	{
		Stack: "Cloud", //Insert stack or technology you have experience in
		progressPercentage: "90", //Insert relative proficiency in percentage
	},
];

export const educationInfo = [
	{
		weight: 2,
		schoolName: "Georgia Institute of Technology",
		subHeader: "Masters in Computer Science",
		duration: "Aug 2024 - May 2026",
		desc: "Specializing in Computing Systems",
		descBullets: [
			"4/4 GPA",
			"Fall 2024 : Graduate Algorithms, Advanced Computer Networks, Data Visualisation Principles"
		],
	},
	{
		weight: 2,
		schoolName: "University of Mumbai",
		subHeader: "Bachelor of Engineering in Computer Science",
		duration: "July 2018 - June 2022",
		desc: "Worked on multiple projects in core computer science domain and published 2 papers and 1 patent.",
		descBullets: [
			"9.80 of 10.00 GPA",
			"Mentor at DJ Unicode 2020-21",
			"Co-Infotech Head DJ ACM 2019-20"
		],
	}
];

export const experience = [
	{
		role: "Software Engineer",
		company: "JP Morgan Chase & Co.",
		companylogo: "/img/icons/common/jpmc.jpg",
		date: "July 2022 – July 2024",
		desc: "Working as part of Payments and Trade Team in Supply Chain Finance",
		descBullets: [
			"Contributing in tech stream for Supplier Onboarding portal",
			"Part of key infrastructure migrations and tech upgrades",
			"Proactively developed key features aligned with business needs, consistently achieving defect-free task completion ahead of deadlines",
		],
	},
	{
		role: "Software Engineer Intern",
		company: "X80 Security",
		companylogo:  "/img/icons/common/x80.png",
		date: "Jan 2022 – Jun 2022",
		desc: "Worked on full stack development on multiple projects. Explored and utilised various Cloud technologies",
		descBullets: [
			"Led the development of a security dashboard from its inception, delving into Cloud Computing to engineer a graph tool that simplified complex cloud data into clear network graphs, offering a streamlined perspective on security insights.",
			"Developed Flask APIs and honed expertise in the Neo4j database, contributing significantly to backend development."
		],
	},
	{
		role: "Technology Analyst Intern",
		company: "JioSaavn",
		companylogo: "/img/icons/common/saavnLogo.png",
		date: "June 2021 – August 2021",
		desc: "Worked on Saavn Intellect , an advertisement management platform , where AD campaigns run on JioSaavn app are created and managed along with analysis of user and product data",
		descBullets: [
			"Developed the frontend in React.js and successfully deployed functional version on production focusing on design, testing  and scalability",
			"Wrote flexible code and gained experience on Agile Software delivery",
		],
	}
];

export const projects = [
	{
		name: "Network Simulator",
		stacks: ["Svelte", "SVG.js", "Vis.js", "JSON"],
		desc: "This is a simple in browser network simulator, which can be used to visualize network graph and run specific logic code on packets.",
		descBullets: [
			"Simulate packet transmission with animations",
			"Implemented network graph parser and examples such as ARP Spoofing , DDOS , TCP-IP etc for simulation.",
			"Project accepted in IEEE 2022 7th I2CT,Pune,Maharashtra,India. Paper ID - 223"
		],
		link: "https://yjdoc2.github.io/Network-Simulator/",
		github: "https://github.com/Tejas988/Network-Simulator",

	}, 
	{
		name: "In-Tuition",
		stacks: ["Node.js", "MongoDB","React","ReactNative","Firebase","WebSockets"],
		descBullets: [
			"A platform for connecting home tutors to students across the world and organize their batches , lectures , tests , assignments and related study materials all in a single application ", 
			"Designed the schema and implemented the logic for assignment and lecture scheduling using cron jobs in backend along with other apis focusing on mvc architecture ",
			"Contributed in frontend by designing and developing components in react.js and react native"
		],
		github: "https://github.com/Tejas988/Tuition",
	},
	{
		name: "Infant Emotion Detection using Audio Vistual stream",
		stacks: ["Python", "Tensorflow", "Keras", "OpenCV", "CVZone", "Transfer Learning"],
		descBullets: [
			"Developed a machine learning and computer vision-based hardware system to predict infant emotions from audio-visual streams, using Raspberry Pi 4 for ML processing with integrated microphone and camera for inputs.",
			"Successfully achieved consistent performance across diverse ethnicities, overcoming a key limitation in prior research, culminating in a patent publication",
		],
	},
	{
		name: "8086 Emulator Web",
		stacks: ["ReactJs", "Web Assembly", "Rust"],
		descBullets: [
			"Emulates Intel 8086 instruction set and provides an interactive interpreter to run programs in native syntax line by line.",
			"Error reporting & handling, code highlighting, and code execution is supported.",
			"Runs without any backend/server and is completely client-side with zero hosting and maintainance required.",
		],
		link: "https://yjdoc2.github.io/8086-emulator-web/",
		github: "https://github.com/Tejas988/8086-emulator-web",
	},
	{
		name: "Inventory Management",
		stacks: ["ReactNative", "Django", "SQL"],
		descBullets: [
			"Contributed in designing the schema and developing pages in react native for the mobile application",
			"Collaborated with team of 3 for developing the frontend of the application."
		],
		github: "https://github.com/Tejas988/inventory-management-rn",
	},

	{
		name: "Digit Recognizer",
		stacks: ["Web Assembly", "Rust", "JavaScript", "HTML-Canvas"],
		descBullets: [
			"Neural Network in Rust from scratch and trained over MNIST data, accuracy in the range of 95 to 96%",
			"The grayscale pixels are pre-processed in frontend, and fed to the Web Assembly for prediction."
		],
		github: "https://github.com/Tejas988/Rust-NN",
		link: "http://rust-nn-web.herokuapp.com/",
	},
];

export const research = [
	{
		name: "Simple Network Simulator",
		feedback:
			"This paper has been accepted by 'IEEE 2022 7th International Conference for Convergence in Technology (I2CT), Pune' which has Ei Compendex and Scopus Indexing. It is about the implementation of a fully customizable network simulator that can be programmed using Javascript and JSON. It is designed to help researchers and professors in teaching concepts of Networks and Cyber Security with animated packet transfer",
	},
	{
		name: "Emulating Intel's 8086 Microprocessor using Rust and WASM",
		feedback:
		"This study presents various advantages of emulating an 8086 microprocessor using Rust and WASM and describes the technology and architecture involved behind one. Paper accepted in 2022 3rd International Conference for Emerging Technology (INCET)."
	},
	{
		name: "Infant Emotion Recognition using Audio-Visual Stream",
		feedback:
		"A machine learning and computer vision-based hardware system to predict infant emotions from audio-visual stream. Published Patent (Application Id: 202221046321)"
	}
];


