'use client';
import { Button } from '../components/ui/button';
import { questionsSai as qSai } from '../components/ui/elements/questions';
import { useEffect, useState } from 'react';

const Question = () => {
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [selectedOption, setSelectedOption] = useState(-1);
	const [finished, setFinished] = useState(false);
	const [answers, setAnswers] = useState<number[]>(Array(qSai.length).fill(-1));

	useEffect(()=>{
		const newAnswers = [...answers];
		newAnswers[currentQuestion] = selectedOption;
		setAnswers(newAnswers);
	},[currentQuestion])

	const handleNext = () => {
		const newAnswers = [...answers];
		newAnswers[currentQuestion] = selectedOption;
		setAnswers(newAnswers);
		

		if (currentQuestion < qSai.length - 1) {
			setCurrentQuestion(currentQuestion + 1);

			setSelectedOption(-1);
		} else {
			console.log(answers);
			setFinished(true);
			
		}
	};

	const handlePrevious = () => {
		if (currentQuestion > 0) {
			const previousAnswer = answers[currentQuestion - 1];
			setSelectedOption(previousAnswer);
			setCurrentQuestion(currentQuestion - 1);
		}
	};

	return (
		<div>
			{!finished ? (
				<div className="w-full max-w-md bg-white p-6 shadow-md rounded-lg">
					<h2 className="text-2xl font-bold mb-4">
						Question {currentQuestion + 1}
					</h2>
					<p className="text-lg mb-6">{qSai[currentQuestion].question}</p>
					<div className="space-y-4">
						{qSai[currentQuestion].choices.map((choices, index) => (
							<button
								key={index}
								onClick={() => setSelectedOption(index)}
								className={`w-full p-2 border rounded-md ${
									qSai[currentQuestion].choices[selectedOption] === choices
										? 'bg-blue-500 text-white'
										: 'bg-gray-200'
								}`}
							>
								{choices}
							</button>
						))}
					</div>
					<div className="flex gap-2 my-2">
						<Button
							onClick={handlePrevious}
							className="px-4 py-2 text-white rounded-md disabled:bg-gray-400"
							disabled={currentQuestion === 0}
						>
							Previous
						</Button>
						<Button
							onClick={()=>handleNext()}
							className="px-4 py-2 text-white rounded-md disabled:bg-gray-400"
							disabled={selectedOption === -1}
						>
							{currentQuestion === qSai.length - 1 ? 'Finish' : 'Next'}
						</Button>
					</div>
				</div>
			) : (
				<div className="w-full max-w-md bg-white p-6 shadow-md rounded-lg">
					<h2 className="text-2xl font-bold mb-4">Quiz Finished!</h2>
					<div></div>
				</div>
			)}
		</div>
	);
};

export { Question };

/* <div>
				{qSai.map((q, indexQ) => (
					<div>
						<div>
							Question{indexQ} {qSai[indexQ].question}
						</div>
						<div>
							{q.choices.map((_ans, indexAns) => (
								<div>
									<RadioGroup defaultValue="comfortable">
										<div className="flex items-center space-x-2 p-2">
											<RadioGroupItem value="default" id="r1" />
											<Label htmlFor="r1">
												{qSai[indexQ].choices[indexAns]}
											</Label>
										</div>
									</RadioGroup>
								</div>
							))}
							<br />
						</div>
						<div className="flex gap-2">
							<Button onClick={handleNext}>Previous</Button>
							<Button onClick={handleNext}>Next</Button>
						</div>
					</div>
				))}
			</div>
			<div>ans</div> */
