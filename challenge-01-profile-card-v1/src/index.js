import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";

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
			<Skill name="HTML + CSS 💪" color="orangered" />
			<Skill name="Javascript 💪" color="yellow" />
			<Skill name="ReactJS 💪" color="lightblue" />
			<Skill name="NodeJS 💪" color="green" />
		</div>
	);
}

function Skill(props) {
	return (
		<div className="skill" style={{ backgroundColor: props.color }}>
			<p>{props.name}</p>
		</div>
	);
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
