import { Button } from '../components/ui/button';
import {
	questionsSai as qSai,
	questionsSaiExtra as qSaiExtra,
} from '../components/ui/elements/questions';
import { useEffect, useState } from 'react';

const Question = () => {
	const [currentQuestion, setCurrentQuestion] = useState(0);	//เก็บ index ข้อปัจจุบัน
	const [selectedOption, setSelectedOption] = useState(-1);	//เก็บ index of selected choice
	const [finishedSai, setFinishedSai] = useState(false);	//เก็บสถานะว่าตอบคำถาม 5 ข้อแรกเสร็จยัง(5 ข้อแรกเป็นคำถามเลือกสาย)
	const [answers, setAnswers] = useState<number[]>(Array(qSai.length).fill(-1));	//list คำตอบทั้งหมด(index)
	const [sai, setSai] = useState(-1);	//เก็บ index ของสายที่ได้ อิงตามใน docs

	//set answer ทุกครั้งหลังทำแต่ละข้อเสร็จ
	useEffect(() => {
		const newAnswers = [...answers];
		newAnswers[currentQuestion] = selectedOption;
		setAnswers(newAnswers);
	}, [currentQuestion, selectedOption]);

	//ไปข้อถัดไป
	const handleNext = () => {
		if (currentQuestion < qSai.length - 1) {
			setCurrentQuestion(currentQuestion + 1);
			setSelectedOption(-1);
		} else {
			// console.log(answers);
			setFinishedSai(true);
		}
	};

	//หาว่าได้สายยัง โดยได้สายเมื่อมีเพียงหนึ่งสายที่ถูกเลือกมากสุด
	useEffect(() => {
		if (finishedSai) {
			const cntHightestSai = (answers: number[]) => {
				const freqMap: Record<number, number> = {};

				// Count the frequency of each answer
				answers.forEach((num) => {
					if (num !== -1) {
						freqMap[num] = (freqMap[num] || 0) + 1;
					}
				});

				// Find the highest frequency
				const maxFreq = Math.max(...Object.values(freqMap));

				// Find the answers that have the highest frequency
				const mostFrequent = Object.keys(freqMap)
					.filter((key) => freqMap[Number(key)] === maxFreq)
					.map(Number);

				// Check if there is only one most frequent answer
				if (mostFrequent.length === 1) {
					setSai(mostFrequent[0]); // Set sai to the most frequent answer
					// console.log(mostFrequent[0])
				} else {
					setSai(-1); // Indicate a tie or no clear most frequent answer
					// console.log(-1)
				}
			};

			cntHightestSai(answers); // Call the function to calculate the highest SAI
		}
		
	}, [finishedSai, answers]); // Only run when the quiz is finished

	//ไปข้อก่อนหน้า
	const handlePrevious = () => {
		if (currentQuestion > 0) {
			const previousAnswer = answers[currentQuestion - 1];
			setSelectedOption(previousAnswer);
			setCurrentQuestion(currentQuestion - 1);
		}
	};

	return (
		<div>
			{!finishedSai ? (
				<div className="w-full p-12 flex-col justify-center">
					<h2 className="text-7xl font-SilverStone-Regular text-Yellow mb-4">
						QUESTION {currentQuestion + 1}
					</h2>
					<p className="text-lg mb-6 text-Yellow font-ibm-plex-thai justify-center">{qSai[currentQuestion].question}</p>
					<div className="space-y-4">
						{qSai[currentQuestion].choices.map((choices, index) => (
							<button
								key={index}
								onClick={() => {
									setSelectedOption(index);
									handleNext();
								}}
								className={`w-full p-3 rounded-md font-ibm-plex-thai ${
									qSai[currentQuestion].choices[selectedOption] === choices
										? 'bg-gray-400 text-white'
										: 'bg-gray-200'
								}`}
							>
								{choices}
							</button>
						))}
					</div>
					<div className="flex gap-2 my-4">
						<Button
							onClick={handlePrevious}
							className="px-4 py-2 text-Yellow border border-Yellow rounded-md bg-Yellow bg-opacity-25 disabled:bg-Yellow-400 font-ibm-plex-thai"
							disabled={currentQuestion === 0}
						>
							Back
						</Button>
					</div>
				</div>
			) : (
				<div className="w-full max-w-md bg-white p-6 shadow-md rounded-lg">
					{sai === -1 ? (
						<div>
							ทำอีกข้อนึง
							<p className="text-lg mb-6">{qSaiExtra[0].question}</p>
							<div className="space-y-4">
								{qSaiExtra[0].choices.map((choices, index) => (
									<button
										key={index}
										onClick={() => setSelectedOption(index)}
										className={`w-full p-2 border rounded-md ${
											qSaiExtra[0].choices[selectedOption] === choices
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
									onClick={() => handleNext()}
									className="px-4 py-2 text-white rounded-md disabled:bg-gray-400"
									disabled={selectedOption === -1}
								>
									Next
								</Button>
							</div>
						</div>
					) : (
						<div>ทำข้อที่เหลือ</div>
					)}
				</div>
			)}
		</div>
	);
};

export { Question };
