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
		progressPercentage: "70",
	},
	{
		Stack: "Programming",
		progressPercentage: "60",
	},
];

export const educationInfo = [
	{
		weight: 1,
		schoolName: "Dwarkadas J. Sanghvi College of Engineering",
		subHeader: "Bachelor of Engineering in Computer Science",
		duration: "July 2018 - June 2022",
		desc: "Worked on multiple projects in core computer science domain and published 2 papers.",
		descBullets: [
			"9.82 of 10.00 GPA upto 7th Semester",
			"Mentor at DJ Unicode 2020-21",
			"Co-Infotech Head DJ ACM 2019-20"
		],
	},
	{
		schoolName: "Nirmala Memorial Foundation College of Science & Arts",
		subHeader: "Higher Secondary School (HSC)",
		duration: "August 2016 - May 2018",
		descBullets: [
			"81% Overall",
			"Specialization in Computer Science"
		],
	},
	{
		schoolName: "St Francis D'Assisi High School",
		subHeader: "Secondary School Certificate (SSC)",
		duration: "Till April 2016",
		desc: "Ranked among top 10% in the school.",
		descBullets: [
			"92.80% Overall",
		],
	},
];

export const experience = [
	{
		role: "Technology Analyst Intern",
		company: "JioSaavn",
		companylogo: prefix+"/img/icons/common/saavnLogo.png",
		date: "June 2021 – August 2021",
		desc: "Worked on Saavn Intellect , an advertisement management platform , where AD campaigns run on JioSaavn app are created and managed along with analysis of user and product data",
		descBullets: [
			"Developed the frontend in React.js and successfully deployed  functional version on production focusing on design, testing  and scalability",
			"Wrote flexible code and gained experience on Agile Software delivery",
		],
	},
	{
		role: "MERN Stack Developer Intern",
		company: "Humaps Pvt.ltd",
		companylogo: prefix + "/img/icons/common/humps.jpg",
		date: "Jan 2021 – March 2021",
		desc: "Worked with full stack development team for creating a Report Framework , a framework which can be used to generate , schedule, deliver runtime reports in an organization",
		descBullets: [
			"Documented ,designed and implementing solutions for the Report framework in frontend and backend",
			"Imporved responsivness of frontend by implementing preprocessing of data using web workers"
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
		github: "https://github.com/YatharthVyas/Network-Simulator",

	}, 
	{
		name: "In-Tuition",
		stacks: ["Node.js", "MongoDB","React","ReactNative","Firebase","WebSockets"],
		descBullets: [
			"A platform for connecting home tutors to students across the world and organize their batches , lectures , tests , assignments and related study materials all in a single application ", 
			"Designed the schema and implemented the logic for assignment and lecture scheduling using cron jobs in backend along with other apis focusing on mvc architecture ",
			"Contributed in frontend by designing and developing components in react.js and react native"
		],
		github: "https://github.com/Tejas988/LOC3.0_The_Classicals_Backend",
	},
	{
		name: "Infant Emotion Detection using Audio Vistual stream",
		stacks: ["Python", "Tensorflow", "Keras", "OpenCV", "CVZone", "Transfer Learning"],
		descBullets: [
			"A multi-modal CNN to predict emotions of infants based on audio characteristics of their cry and a video stream",
			"MFCC is used to extract audio frequencies and is then fed into an ANN.",
			"Images are sampled from a video at 6 frames per second, augmented to increase dataset size and then used to train an ensemble of 6 Convoluted Neural Networks.",
			"A total of 5 unique datasets collected from researchers have been combined for training and testing."
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
		github: "https://github.com/YatharthVyas/8086-emulator-web-1",
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
		name: "Simulation of a Distributed Architecture on a Single System using Nodes emulated by Docker containers:",
		feedback:
		"I'm a part of a group researching the simulation of a multi-node system using Linux’s namespaces through containers using Docker. Results obtained proved an optimization from 98 seconds on a single node to 45 seconds in a simulated multi-node configuration. The paper for the same is currently under work"
	},
	{
		name: "Emulating Intel's 8086 Microprocessor using Rust and WASM",
		feedback:
		"This study presents various advantages of emulating an 8086 microprocessor using Rust and WASM and describes the technology and architecture involved behind one. The paper is currently under review."
	},
	{
		name: "Infant Emotion Detection using a live audio-visual stream",
		feedback:
		"Currently Ongoing: We are working on a research project to detect emotions of infants. It involves gathering and merging several unique datasets followed by a meticulous process of analysis and interpretation involved due to the sensitive nature of the data."
	}
];


