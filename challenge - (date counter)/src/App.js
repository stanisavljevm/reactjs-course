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

	function handleReset() {
		setStep(1);
		setCount(0);
	}

	return (
		<>
			<div>
				<input
					type="range"
					min="1"
					max="10"
					value={step}
					onChange={(e) => setStep(+e.target.value)}
				/>
				<span>{step}</span>
			</div>
			<div>
				<button onClick={decreaseCount}> - </button>
				<input
					type="text"
					value={count}
					onChange={(e) => setCount(+e.target.value)}
				/>
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
			{(count !== 0 || step !== 1) && (
				<div>
					<button onClick={handleReset}>Reset</button>
				</div>
			)}
		</>
	);
}
