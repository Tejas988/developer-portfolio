import React from "react";
import { SkillBars } from "../portfolio";
import { Container, Row, Progress, Col } from "reactstrap";

import { Fade } from "react-reveal";
import { socialLinks } from "../portfolio";



import GreetingLottie from "../components/DisplayLottie";
const prefix=process.env.NEXT_PUBLIC_BASE_PATH||"";

const Proficiency = () => {
	return (
		<Container className="section section-lg">
			<Fade bottom duration={1000} distance="40px">
				<Row>
					<Col lg="6">
						<h1 className="h1" id="programming-profiles">Programming Profiles</h1>
						<div className="d-flex p-1">
						<div>
							<div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle ">
								<i className="fa fa-github" />
							</div>
						</div>
						<div className="pl-4 pt-3">
							<a target="_blank" rel="noreferrer" href={socialLinks.github}><h4 className="display-4 text-gr">Github</h4></a>
						</div>
						</div>
						<div className="d-flex p-1">
						<div>
							<div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-gr">
								<img
									src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
									width={"100px"}
									height={"100px"}
									alt=""
								/>
							</div>
						</div>
						<div className="pl-4 pt-3">
							<a target="_blank" rel="noreferrer" href={socialLinks.leetcode}><h4 className="display-4 text-gr">Leetcode</h4></a>
						</div>
						</div>
						<div className="d-flex p-1">
						<div>
							<div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-gr">
								<img
									src="https://avatars1.githubusercontent.com/u/11960354?s=460&v=4"
									width={"100px"}
									height={"100px"}
									alt=""
								/>
							</div>
						</div>
						<div className="pl-4 pt-3">
							<a target="_blank" rel="noreferrer" href={socialLinks.codechef}><h4 className="display-4 text-gr">Codechef</h4></a>
						</div>
						</div>
						<div className="d-flex p-1">
						<div>
							<div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-gr">
							<img
								src="https://play-lh.googleusercontent.com/-9azrA7GgyNpNVfHRI5xLhRyy4OuqevecUAjUFFfpJccTGHkdd4oXYfw11Z5-jxlDRM"
								width={"100px"}
								height={"100px"}
								alt=""
							/>
							</div>
						</div>
						<div className="pl-4 pt-3">
							<a target="_blank" rel="noreferrer" href={socialLinks.codeforces}><h4 className="display-4 text-gr">Codeforces</h4></a>
						</div>
						</div>
						<div className="d-flex p-1">
						<div>
							<div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-gr">
							<img
								src="https://upload.wikimedia.org/wikipedia/commons/4/40/HackerRank_Icon-1000px.png"
								width={"100px"}
								height={"100px"}
								alt=""
							/>
							</div>
						</div>
						<div className="pl-4 pt-3">
							<a target="_blank" rel="noreferrer"  href="https://www.hackerrank.com/tejasghone73?hr_r=1"><h4 className="display-4 text-gr">Hackerrank</h4></a>
						</div>
						</div>
					</Col>
					<Col lg="6">
						<GreetingLottie animationPath={prefix+"/lottie/build.json"} />
					</Col>
				</Row>
			</Fade>
		</Container>
	);
};

export default Proficiency;
