function Options({ question, dispatch, answer }) {
	const hasAnswered = answer !== null;
	return (
		<div className="options">
			{question.options.map((option, i) => (
				<button
					key={option}
					onClick={() => dispatch({ type: "newAnswer", payload: i })}
					className={`btn btn-option ${i === answer ? "answer" : ""} ${
						hasAnswered
							? i === question.correctOption
								? "correct"
								: "wrong"
							: ""
					}`}
					disabled={hasAnswered}
				>
					{option}
				</button>
			))}
		</div>
	);
}

export default Options;
