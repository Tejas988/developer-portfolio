import dynamic from "next/dynamic";
import PropTypes from "prop-types";
const Navigation = dynamic(() => import("../components/Navigation"));
const Greetings = dynamic(() => import("../containers/Greetings"));
const Skills = dynamic(() => import("../containers/Skills"));
const Proficiency = dynamic(() => import("../containers/Proficiency"));
const Education = dynamic(() => import("../containers/Education"));
const Experience = dynamic(() => import("../containers/Experience"));
const Projects = dynamic(() => import("../containers/Projects"));
const Feedbacks = dynamic(() => import("../containers/Feedbacks"));
const GithubProfileCard = dynamic(() =>
	import("../components/GithubProfileCard")
);
import { openSource } from "../portfolio";
import SEO from "../components/SEO";

export default function Home({ githubProfileData }) {
	return (
		<div>
			<SEO
				data={{
					title: "Tejas Ghone",
					description:
						"A passionate Full Stack Web Developer and Mobile App Developer.",
					image: process.env.NEXT_PUBLIC_BASE_PATH +"/img/icons/common/self.jpg",
					keywords: [
						"tejas",
						"Tejas Ghone",
						"@1tejas100",
						"1tejas100",
						"Portfolio",
						"tejas Portfolio ",
						"Tejas Ghone Portfolio",
						"web developer",
						"full stack",
						"full stack web developer",
						"mobile app developer",
						"android developer",
						"django",
						"flask",
						"django rest framework",
						"nodejs ",
						"expressjs",
						"reactjs ",
						"contextapi",
						"redux",
						"flutter",
					],
				}}
			/>
			<Navigation />
			<Greetings />
			<Skills />
			<Education />
			<Experience />
			<Proficiency />
			<Projects />
			<Feedbacks />
			<GithubProfileCard prof={githubProfileData} />
		</div>
	);
}

Home.prototype = {
	githubProfileData: PropTypes.object.isRequired,
};

export async function getStaticProps(_) {
	const githubProfileData = await fetch(
		`https://api.github.com/users/Tejas988`
	).then((res) => res.json());

	return {
		props: { githubProfileData },
	};
}
