import { useState } from "react";
export default function App() {
	return (
		<div className="App">
			<Counter />
		</div>
	);
}

function Counter() {
	const [step, setStep] = useState(1);
	const [count, setCount] = useState(0);

	const date = new Date();
	date.setDate(date.getDate() + count);

	function decreaseCount() {
		setCount((curCount) => curCount - step);
	}

	function increaseCount() {
		setCount((curCount) => curCount + step);
	}

	function decreaseStep() {
		setStep((curStep) => curStep - 1);
	}

	function increaseStep() {
		setStep((curStep) => curStep + 1);
	}

	return (
		<>
			<div>
				<button onClick={decreaseStep}> - </button>
				<span>Step: {step}</span>
				<button onClick={increaseStep}> + </button>
			</div>
			<div>
				<button onClick={decreaseCount}>-</button>
				<span>Count: {count}</span>
				<button onClick={increaseCount}> + </button>
			</div>
			<p>
				<span>
					{count === 0
						? "Today is "
						: count > 0
						? `${count} days from today is `
						: `${Math.abs(count)} days ago was `}
				</span>
				<span>{date.toDateString()}</span>
			</p>
		</>
	);
}
