import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";

const skills = [
	{
		skill: "HTML+CSS",
		level: "advanced",
		color: "#2662EA",
	},
	{
		skill: "JavaScript",
		level: "advanced",
		color: "#EFD81D",
	},
	{
		skill: "Web Design",
		level: "advanced",
		color: "#C3DCAF",
	},
	{
		skill: "Git and GitHub",
		level: "intermediate",
		color: "#E84F33",
	},
	{
		skill: "React",
		level: "advanced",
		color: "#60DAFB",
	},
	{
		skill: "Svelte",
		level: "beginner",
		color: "#FF3B00",
	},
];

function App() {
	return (
		<div className="card">
			<Avatar />

			<div className="data">
				<Intro />
				<SkillList />
			</div>
		</div>
	);
}

function Avatar() {
	return <img className="avatar" src="img/girl.jpg" alt="Girl Developer" />;
}

function Intro() {
	return (
		<div>
			<h1>Jane Doe</h1>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Pharetra vel turpis
				nunc eget lorem dolor sed viverra. Sodales ut etiam sit amet nisl purus.
				Risus quis varius quam.
			</p>
		</div>
	);
}

function SkillList() {
	return (
		<div className="skill-list">
			{skills.map((skill) => (
				<Skill skill={skill.skill} level={skill.level} color={skill.color} />
			))}
		</div>
	);
}

function Skill({ skill, level, color }) {
	return (
		<div className="skill" style={{ backgroundColor: color }}>
			<span>{skill}</span>
			<span>
				{level === "beginner" && "👶"}
				{level === "intermediate" && "👍"}
				{level === "advanced" && "💪"}
			</span>
		</div>
	);
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
