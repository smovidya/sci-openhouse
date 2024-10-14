import { useState } from 'react';
import { questions } from './assets/questions';

const App = () => {
	const [currentQuestion, setCurrentQuestion] = useState(0);
	//Answer of all Questions
	const [answers, setAnswers] = useState<string[]>([]);
	const [showResult, setShowResult] = useState(false);

	// ฟังก์ชันสำหรับเลือกคำตอบ
	const handleAnswer = (answer: string) => {
		const updatedAnswers = [...answers];
		updatedAnswers[currentQuestion] = answer;
		setAnswers(updatedAnswers);
	};

	// Next Button
	const handleNext = () => {
		if (currentQuestion < questions.length - 1) {
			setCurrentQuestion(currentQuestion + 1);
		} else {
			setShowResult(true);
		}
	};

	// ฟังก์ชันสำหรับย้อนกลับไปข้อก่อนหน้า
	const handlePrevious = () => {
		if (currentQuestion > 0) {
			setCurrentQuestion(currentQuestion - 1);
		}
		
	};

	// Calculate Score
	const score = answers.reduce(
		(acc, answer, idx) =>
			answer === questions[idx].correctAnswer ? acc + 1 : acc,
		0
	);

	return (
		<div style={{ padding: '20px' }}>
			{!showResult ? (
				<div>
					<h2>
						Question {currentQuestion + 1} of {questions.length}
					</h2>
					<p>{questions[currentQuestion].question}</p>
					<div>
						{questions[currentQuestion].choices.map((choices) => (
							<button
								key={choices}
								onClick={() => handleAnswer(choices)}
								style={{
									margin: '5px',
									padding: '10px',
									backgroundColor:
										answers[currentQuestion] === choices ? 'lightblue' : 'white',
									border: '1px solid #ccc',
									borderRadius: '5px',
								}}
							>
								{choices}
							</button>
						))}
					</div>
					<div style={{ marginTop: '20px' }}>
						{/* ปุ่มย้อนกลับ */}
						<button
							onClick={handlePrevious}
							style={{
								marginRight: '10px',
								padding: '10px',
								border: '1px solid #ccc',
								backgroundColor: currentQuestion === 0 ? 'grey' : 'lightgray',
								cursor: currentQuestion === 0 ? 'not-allowed' : 'pointer',
							}}
							disabled={currentQuestion === 0}
						>
							Previous
						</button>

						{/* ปุ่มถัดไป */}
						<button
							onClick={handleNext}
							style={{
								padding: '10px',
								border: '1px solid #ccc',
								backgroundColor: 'lightgray',
								cursor: 'pointer',
							}}
						>
							{currentQuestion < questions.length - 1 ? 'Next' : 'Submit'}
						</button>
					</div>
				</div>
			) : (
				<div>
					<h2>
						Your Score: {score} / {questions.length}
					</h2>
				</div>
			)}
		</div>
	);
};

export { App };
